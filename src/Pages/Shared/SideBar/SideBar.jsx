import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiUsers, FiLayers, } from "react-icons/fi";

const SideBar = () => {
    return (
        <div className="w-[270px] h-screen bg-white fixed top-0 z-10 border-r-2">
            <img className="ml-7 mt-5" src="/src/assets/logo.png" alt="" />
            <ul className=" menus mt-8">
                {/* Sidebar content here */}
                <li><Link to="/"><RxDashboard></RxDashboard> Dashboard</Link></li>
                <li><Link to="/employee-info-table"><FiUsers></FiUsers> Employees</Link></li>
                <li><Link to="/project-info"><FiLayers></FiLayers> Projects</Link></li>
                <li><Link><RiPriceTag3Line></RiPriceTag3Line> Assets</Link></li>

            </ul>
        </div>
    );
};

export default SideBar;