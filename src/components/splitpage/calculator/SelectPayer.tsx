import Select from "react-select";
import { Payer } from "./Types";

interface SelectPayerProps {
  selectedUser: string;
  payer: string;
  onHandlePayer: (payer: string) => void;
  children?: React.ReactNode;
}

const SelectPayer = ({ selectedUser, payer, onHandlePayer, children }: SelectPayerProps) => {
  const selectOptions: Payer[] = [
    { value: "You", label: "You" },
    { value: selectedUser, label: selectedUser },
  ];

  const payerValue: Payer =
    selectedUser === payer
      ? {
          value: selectedUser,
          label: selectedUser,
        }
      : {
          value: "You",
          label: "You",
        };

  return (
    <div className="flex flex-row">
      <div className="w-7/10">{children}</div>
      <Select
        className="w-3/10 "
        options={selectOptions}
        onChange={(e) => onHandlePayer(e!.value)}
        value={payerValue}
      />
    </div>
  );
};

export default SelectPayer;
