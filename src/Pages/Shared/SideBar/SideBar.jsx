import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiUsers, FiLayers, FiClipboard } from "react-icons/fi";

const SideBar = () => {
    return (
        <div className="w-[270px] h-screen bg-white fixed top-0 z-10 border-r-2">
            <img className="ml-7 mt-5" src="/src/assets/logo.png" alt="" />
            <ul className=" menus mt-8">
                {/* Sidebar content here */}
                <li><Link><RxDashboard></RxDashboard> Dashboard</Link></li>
                <li><Link to="/employee-info-table"><FiUsers></FiUsers> Employees</Link></li>
                <li><Link><FiLayers></FiLayers> Projects</Link></li>
                <li><Link><FiClipboard></FiClipboard> Tasks</Link></li>
                <li><Link><FaRegFolderClosed></FaRegFolderClosed>File Manager</Link></li>
                <li><Link><RiPriceTag3Line></RiPriceTag3Line> Assets</Link></li>

            </ul>
        </div>
    );
};

export default SideBar;