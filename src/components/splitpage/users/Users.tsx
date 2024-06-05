import { User } from "../../types";

interface UsersProps {
  users: User[];
  onSelectUser: (id: number) => void;
}

const Users = ({ users, onSelectUser }: UsersProps) => {
  return (
    <div className=" border-2 rounded-sm shadow-lg mt-4 sm:mt-10 min-h-12 py-12 w-78 sm:w-96 bg-fuchsia-50">
      <div className="flex flex-col">
        {users.map((user, key) =>
          user.name !== "You" ? (
            <div key={"user: " + key}>
              <div className="flex flex-row my-2">
                <img className="rounded-full my-1 mx-2 sm:mx-4 max-h-12" alt="profile" src={user.img} width={50} />
                <div className="flex flex-col my-1 text-sm sm:mx-4 overflow-scroll">
                  <div className="font-bold max-w-44">{user.name}</div>
                  {user.balance === 0 && <div className="w-44 max-w-44">You and {user.name} are even</div>}
                  {user.balance < 0 && (
                    <div className="text-error/90 w-44 max-w-44">
                      You owe {user.name} {Math.abs(user.balance)}€
                    </div>
                  )}
                  {user.balance > 0 && (
                    <div className="text-success/90 w-44 max-w-44">
                      {user.name} owes you {Math.abs(user.balance)}€
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="absolute uppercase btn btn-xs mx-1 bottom-4 bg-primary/30 hover:bg-primary/40 border-none hover:border-none"
                    onClick={() => onSelectUser(user.id)}
                  >
                    {!user.isSelected ? "Select" : "Close"}
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Users;
