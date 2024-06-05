import { useState } from "react";
import Calculator from "./calculator/Calculator";
import Users from "./users/Users";
import { User } from "../types";
import AddUser from "./users/AddUser";

const SplitPage = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "You", balance: 0, img: "https://i.pravatar.cc/100?img=2", isSelected: false },
    { id: 2, name: "Jake", balance: 10, img: "https://i.pravatar.cc/100?img=3", isSelected: false },
    { id: 3, name: "Kim", balance: -32, img: "https://i.pravatar.cc/100?img=5", isSelected: false },
  ]);
  const [showAddUser, setShowAddUser] = useState<boolean>(false);

  const handleUpdateUserBalance = (splitUser: User) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === splitUser.id ? { ...user, balance: splitUser.balance, isSelected: false } : user
      )
    );
  };

  const handleAddUser = (name: string, img: string) => {
    setUsers((prev) => [...prev, { id: Date.now(), name: name, img: img, balance: 0, isSelected: false }]);
  };

  const handleShowAddUser = (show: boolean) => {
    setShowAddUser(show);
  };

  const handleSelectUser = (id: number) => {
    setUsers((users) =>
      users.map((user) => (user.id === id ? { ...user, isSelected: !user.isSelected } : { ...user, isSelected: false }))
    );
  };

  return (
    <div className="flex flex-row justify-center font-mono">
      <div className="flex flex-col ">
        <Users users={users} onSelectUser={handleSelectUser} />
        {users.findIndex((user) => user.isSelected) > -1 ? (
          <Calculator users={users} onUpdateUserBalance={handleUpdateUserBalance} />
        ) : (
          <div className="my-2"></div>
        )}
        {showAddUser && (
          <AddUser onAddUser={handleAddUser} showAddUser={showAddUser} onShowAddUser={handleShowAddUser} />
        )}
        {!showAddUser && (
          <button
            className="btn btn-lg rounded-sm uppercase shadow-lg border-2 btn-success my-auto"
            onClick={() => handleShowAddUser(!showAddUser)}
          >
            Add New Friend
          </button>
        )}
      </div>
    </div>
  );
};

export default SplitPage;
