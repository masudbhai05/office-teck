import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import SideBar from "../Pages/Shared/SideBar/SideBar";
import { useState } from "react";


const Main = () => {
    const [selectedOption, setSelectedOption] = useState('Dashboard');

    const handleSidebarClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="relative">
            <div>
                <div>
                    <NavBar selectedOption={selectedOption}></NavBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>


            <div>
                <div className="">
                    <SideBar handleSidebarClick={handleSidebarClick}></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;