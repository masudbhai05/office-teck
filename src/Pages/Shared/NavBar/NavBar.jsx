import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const NavBar = ({ selectedOption }) => {
    return (
        <header className="app-header">
            <div className="ml-[270px] flex items-center justify-between h-16 bg-base-100  border-b-2 border-[#E8E9EB]">
                <div className="navbar-center ml-[30px]">
                    <span className="normal-case text-xl">{selectedOption}</span>
                </div>
                <div className='mr-[30px] flex items-center'>
                    <button className="btn bg-transparent btn-circle border-none ml-[18px]">
                        <AiOutlineSearch className="text-xl"></AiOutlineSearch>
                    </button>
                    <button className="btn bg-transparent btn-circle border-none ml-[18px]">
                        <div className="indicator">
                            <AiOutlineBell className="text-xl"></AiOutlineBell>
                            <span className="badge badge-xs badge-secondary indicator-item"></span>
                        </div>
                    </button>
                    <div className='relative ml-[18px]'>
                        <div className='flex justify-center items-center pl-[18px] ml-[18px] before:absolute before:content-"" before:w-[2px] before:h-[31px] before:left-1 before:bg-[#E8E9EB]'>
                            <img className="w-[40px] rounded-full" src="https://cdn-icons-png.flaticon.com/512/168/168726.png" />
                            <div className="flex-none">
                                <ul className="menu menu-horizontal px-1">
                                    <li>
                                        <div className='relative dropdown dropdown-bottom'>
                                            <label tabIndex={0} className='text-[#3F434A]'>
                                                ArtTemplate
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content absolute right-1 z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-52">
                                                <li><Link to={"/profile"}>Profile</Link></li>
                                                <li><Link to={"/signup"}>Sign Up</Link></li>
                                                <li><Link>Link 2</Link></li>
                                                <li><Link>Link 2</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;