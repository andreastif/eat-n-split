import { useState } from "react";
import { Bill, User } from "../../types";
import SelectPayer from "./SelectPayer";

interface CalculatorProps {
  users: User[];
  onUpdateUserBalance: (user: User) => void;
}

const Calculator = ({ users, onUpdateUserBalance }: CalculatorProps) => {
  const [bill, setBill] = useState<Bill>({ value: 0, yourExpense: 0, friendExpense: 0, payer: "You" });
  const selectedUser = users.find((user) => user.isSelected === true);

  const handleSplitBill = () => {
    if (!selectedUser) return;

    const value = bill.payer === "You" ? bill.friendExpense : -bill.yourExpense;
    //balance represents if someone OWES to me (friend user balance is POSITIVE) or I owe THEM (friend user balance is NEGATIVE)
    onUpdateUserBalance({ ...selectedUser, balance: selectedUser.balance + value, isSelected: false });
  };

  const handlePayer = (payer: string) => {
    return setBill((prev) => ({ ...prev, payer: payer }));
  };

  const handleSetExpense = (expense: string) => {
    setBill((props) => ({
      ...props,
      yourExpense: isNaN(+expense) ? bill.yourExpense : +expense,
      friendExpense: isNaN(+expense) ? bill.friendExpense : bill.value - +expense,
    }));
  };

  return (
    <div className="my-4">
      <div className="border-2 rounded-sm shadow-lg min-h-screen-50 py-10 w-78 sm:w-96 bg-fuchsia-50">
        <div className="text-center text-4xl my-10 mx-6 uppercase tracking-tighter ">
          SPLIT BILL WITH {selectedUser?.name}
        </div>
        <div className="flex flex-col gap-4 px-5 mx-auto">
          <div className="flex flex-row">
            <div className="w-7/10">💰Bill value</div>
            <input
              className="border w-3/10 rounded-md px-1"
              type="text"
              onChange={(e) =>
                setBill((props) => ({ ...props, value: isNaN(+e.target.value) ? bill.value : +e.target.value }))
              }
              value={bill.value === 0 ? "" : bill.value}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-7/10">🧙‍♂️Your expense</div>
            <input
              className="border w-3/10 rounded-md px-1"
              type="text"
              onChange={(e) => handleSetExpense(e.target.value)}
              value={bill.yourExpense === 0 ? "" : bill.yourExpense}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-7/10">🧙{selectedUser?.name}'s expense</div>
            <input className="border w-3/10 rounded-md px-1" type="text" disabled={true} value={bill.friendExpense} />
          </div>
          {selectedUser ? (
            <SelectPayer selectedUser={selectedUser?.name} payer={bill.payer} onHandlePayer={handlePayer}>
              💳Who is paying?
            </SelectPayer>
          ) : null}

          <button
            disabled={bill.payer === "none"}
            onClick={() => handleSplitBill()}
            className="btn px-10 uppercase mx-auto bg-primary/30 hover:bg-primary/40 border-none hover:border-none mt-10"
          >
            Split bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
