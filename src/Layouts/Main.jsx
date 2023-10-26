import { Outlet } from "react-router-dom";
import SideBar from "../Pages/Shared/SideBar/SideBar";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="flex lg:flex-row w-screen">
            <div className="w-[15%] h-screen bg-white border-r-2 border-r-[#E8E9EB] ">
                <SideBar></SideBar>
            </div>
            <div className="w-full">
                <NavBar></NavBar>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;