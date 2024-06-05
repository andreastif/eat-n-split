import { useState } from "react";

interface AddUserProps {
  onAddUser: (name: string, img: string) => void;
  onShowAddUser: (show: boolean) => void;
  showAddUser: boolean;
}

const AddUser = ({ onAddUser, onShowAddUser, showAddUser }: AddUserProps) => {
  const [userProps, setUserProps] = useState({ name: "", img: "https://i.pravatar.cc/100?img=6" });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserProps({ name: "", img: "" });
    onAddUser(userProps.name, userProps.img);
  };

  return (
    <div className="relative border-2 rounded-sm shadow-lg min-h-12 py-10 w-78 sm:w-96 bg-fuchsia-50">
      <button
        className="absolute btn btn-xs btn-circle px-3 top-1 right-1 bg-red-100 hover:bg-red-300/50 border-none hover:border-none"
        onClick={() => onShowAddUser(!showAddUser)}
      >
        ❌
      </button>
      <form className="flex flex-col" onSubmit={handleOnSubmit}>
        <div className="flex flex-row p-1 mx-auto">
          <div className="mx-1 w-32">🧙‍♂️ Friend name</div>
          <input
            className="border w-40"
            type="text"
            onChange={(e) => setUserProps((props) => ({ ...props, name: e.target.value }))}
            value={userProps.name}
          />
        </div>
        <div className="flex flex-row p-1 mx-auto">
          <div className="mx-1 w-32">🌄 Image URL</div>
          <input
            className="border w-40"
            type="text"
            onChange={(e) => setUserProps((props) => ({ ...props, img: e.target.value }))}
            value={userProps.img}
          />
        </div>
        <button className="btn btn-wide uppercase mx-auto bg-primary/30 hover:bg-primary/40 border-none hover:border-none mt-6">
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default AddUser;
