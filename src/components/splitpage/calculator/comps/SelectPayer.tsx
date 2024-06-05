import Select from "react-select";
import { Payer } from "./Types";
import { User } from "../../../types";

interface SelectPayerProps {
  selectedUser: User;
  payer: Payer;
  onHandlePayer: (payer: string, label: string) => void;
  children?: React.ReactNode;
}

const SelectPayer = ({ selectedUser, payer, onHandlePayer, children }: SelectPayerProps) => {
  const selectOptions: Payer[] = [
    { value: "You", label: "You" },
    { value: selectedUser.name, label: selectedUser.name },
  ];

  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      {children}
      <Select
        className="w-56"
        options={selectOptions}
        onChange={(e) => onHandlePayer(e!.value, e!.label)}
        value={payer}
      />
    </div>
  );
};

export default SelectPayer;
