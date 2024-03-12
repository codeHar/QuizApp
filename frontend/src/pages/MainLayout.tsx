import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className="main-layout bg-background">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
