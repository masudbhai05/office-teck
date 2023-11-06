import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import SideBar from "../Pages/Shared/SideBar/SideBar";


const Main = () => {
    return (
        <div className="relative">
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>

            
            <div>
                <div className="">
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;