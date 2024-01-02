import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiUsers, FiLayers, } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SideBar = ({ handleSidebarClick }) => {
    const { logOut } = useContext(AuthContex)
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        handleSidebarClick(itemName); // Pass the item name to handleSidebarClick function
    };

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Log Out Successfull',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login');
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="flex flex-col justify-between w-[270px] h-screen bg-black fixed top-0 z-10 border-r-2">
            <div>
                <img className="ml-7 mt-5" src="/src/assets/logo.png" alt="" />
                <ul className=" menus mt-8">
                    {/* Sidebar content here */}
                    <li onClick={() => handleItemClick('Dashboard')} className={selectedItem === 'Dashboard' ? 'active' : ''}><Link to="/dashboard"><RxDashboard></RxDashboard> Dashboard</Link></li>
                    <li onClick={() => handleItemClick('Employees')} className={selectedItem === 'Employees' ? 'active' : ''}><Link to="/employees"><FiUsers></FiUsers> Employees</Link></li>
                    <li onClick={() => handleItemClick('Projects')} className={selectedItem === 'Projects' ? 'active' : ''}><Link to="/projects"><FiLayers></FiLayers> Projects</Link></li>
                    <li onClick={() => handleItemClick('Assets')} className={selectedItem === 'Assets' ? 'active' : ''}><Link to={"/asset"}><RiPriceTag3Line></RiPriceTag3Line> Assets</Link></li>

                </ul>
            </div>
            <div>
                <button onClick={handleLogOut} className="cta-btn-log w-[90%] mx-auto mb-10">Log Out</button>
            </div>
        </div>
    );
};

export default SideBar;