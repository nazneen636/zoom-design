import Topbar from "../homeComponent/Topbar";
import Menu from "../homeComponent/Menu";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Topbar />
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
