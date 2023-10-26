import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=" w-full h-16 bg-base-100 flex justify-between items-center border-b-2 border-[#E8E9EB]">
            <div className="navbar-center ml-[30px]">
                <span className="normal-case text-xl">Employees</span>
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
                                    <details className='relative'>
                                        <summary className='text-[#3F434A]'>
                                            ArtTemplate
                                        </summary>
                                        <ul className="w-[200px] absolute right-0 top-8 p-2 bg-base-100">
                                            <li><Link>Link 1</Link></li>
                                            <li><Link>Link 2</Link></li>
                                            <li><Link>Link 2</Link></li>
                                            <li><Link>Link 2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;