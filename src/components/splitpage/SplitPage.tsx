import { Calculator } from "./calculator/Calculator";
import { Friends } from "./friends/Friends";

export const SplitPage = () => {
  return (
    <div className="flex justify-center">
      <Friends />
      <Calculator />
    </div>
  );
};
