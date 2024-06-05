interface TipInputProps {
  price: number;
  onHandleSetPrice: (amount: number) => void;
  children?: React.ReactNode;
}

const TipInput = ({ price, onHandleSetPrice, children }: TipInputProps) => {
  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      <div className="w-9.5/10">{children}</div>
      <input
        className="w-56 pl-1 rounded-sm border border-black "
        type="text"
        onChange={(e) => onHandleSetPrice(Number(e.target.value) ? Number(e.target.value) : 0)}
        value={price}
      />
    </div>
  );
};

export default TipInput;
