import { useMemo, useState } from "react";
import { Bill, User } from "../../types";
import SelectPayer from "./comps/SelectPayer";
import SplitBtn from "./comps/SplitBtn";

interface CalculatorProps {
  users: User[];
  onUpdateUserBalance: (user: User) => void;
}

const Calculator = ({ users, onUpdateUserBalance }: CalculatorProps) => {
  const [bill, setBill] = useState<Bill>({ value: 0, yourExpense: 0, friendExpense: 0, payer: "none" });
  const selectedUser = useMemo(() => {
    return users.find((user) => user.isSelected === true);
  }, [users]);

  const handleSplitBill = () => {
    if (!selectedUser) return;

    const value = 0; //replace

    //balance represents if someone OWES to me (friend user balance is POSITIVE) or I owe THEM (friend user balance is NEGATIVE)
    //newBalance can be either negative or positive so it should be OK to do like this
    onUpdateUserBalance({ ...selectedUser, balance: selectedUser.balance + value, isSelected: false });
  };

  return (
    <div className="my-4">
      <div className="border-2 rounded-sm shadow-lg min-h-screen-50 py-10 w-78 sm:w-96 bg-fuchsia-50">
        <div className="text-center text-4xl my-3 uppercase tracking-tighter ">
          SPLIT BILL WITH {selectedUser?.name}
        </div>
        <div className="flex flex-col gap-4 px-5 mx-auto">
          {/* <SelectPayer selectedUser={} payer={{ value: "Jens", label: "Jens" }} onHandlePayer={handleOnPayer} /> */}
          <div className="flex flex-row">
            <div className="w-5/10">💰Bill value</div>
            <input
              className="border w-5/10"
              type="text"
              onChange={(e) =>
                setBill((props) => ({ ...props, value: isNaN(+e.target.value) ? bill.value : +e.target.value }))
              }
              value={bill.value === 0 ? "" : bill.value}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-5/10">🧙‍♂️Your expense</div>
            <input
              className="border w-5/10"
              type="text"
              onChange={(e) =>
                setBill((props) => ({ ...props, value: isNaN(+e.target.value) ? bill.value : +e.target.value }))
              }
              value={bill.value === 0 ? "" : bill.value}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-5/10">🧙{selectedUser?.name}'s expense</div>
            <input
              className="border w-5/10"
              type="text"
              onChange={(e) =>
                setBill((props) => ({ ...props, value: isNaN(+e.target.value) ? bill.value : +e.target.value }))
              }
              value={bill.value === 0 ? "" : bill.value}
            />
          </div>
          <button
            onClick={() => handleSplitBill()}
            className="btn px-10 uppercase mx-auto bg-primary/30 hover:bg-primary/40 border-none hover:border-none mt-6"
          >
            Split bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
