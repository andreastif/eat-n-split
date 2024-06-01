import { Outlet } from "react-router-dom";
import { Disclaimer } from "./Disclaimer";

export const Home = () => {
  return (
    <div>
      <div className="min-h-screen min-w-full bg-slate-50">
        <Outlet />
      </div>
      <Disclaimer />
    </div>
  );
};
