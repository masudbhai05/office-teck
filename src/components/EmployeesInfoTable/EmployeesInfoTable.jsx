import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";


import AddEmployeeForm from "../Form/AddEmployeeForm";
import { MdOutlineModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const EmployeesInfoTable = () => {
    const [employees, setEmployees] = useState([])
    const [openEmployeeModal, setOpenEmployeeModal] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/employees')
            .then(res => res.json())
            .then(data => setEmployees(data.data))
    }, [employees])

    const handlMultiValueForm = () => {
        setOpenEmployeeModal(true)
    }
    const handleCloseModal = () => {
        setOpenEmployeeModal(false)
    }

    const handleDelete = (employee) => {
        fetch(`http://localhost:5000/api/v1/employees/${employee.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Employee Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <>
             <Helmet>
                <title>Employees</title>
            </Helmet>
            {
                openEmployeeModal && <AddEmployeeForm onClose={handleCloseModal}> </AddEmployeeForm>
            }
            <div className="table-data mt-[97px]">
                <div className="flex justify-between items-center ml-[300px] mr-[30px]">
                    <div className="">
                        <ul className="flex justify-center items-center gap-6">
                            <li>
                                <button className="pb-3 border-b-2 border-blue-500 active">
                                    All <div className="badge bg-[#E8E9EB] text-[#8A9099] py-3 ml-2 rounded-md">999</div>
                                </button>
                            </li>
                            <li>
                                <button className="pb-3 border-b-2 border-blue-500">
                                    Active <div className="badge bg-[#E8E9EB] text-[#8A9099] py-3 ml-2 rounded-md">999</div>
                                </button>
                            </li>
                            <li>
                                <button className="pb-3 border-b-2 border-blue-500">
                                    Blocked <div className="badge bg-[#E8E9EB] text-[#8A9099] py-3 ml-2 rounded-md">999</div>
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <button className="cta-btn" onClick={handlMultiValueForm}><FaPlus></FaPlus> Add Employee</button>
                    </div>
                </div>
                <div className="bg-white ml-[300px] mr-[30px] py-5 px-2 mt-4 rounded-xl pl-4 pr-16">
                    {/* this is search console  */}
                    <div className="w-full flex justify-between items-center px-[14px]">
                        <div className="w-full flex justify-between items-center px-[14px] mr-6 border-[1px] rounded-2xl">
                            <div className="grow flex items-center">
                                <label htmlFor="search" className="text-2xl grow-0"><GrSearch /></label>
                                <input type="text" id="search" placeholder="Search Customers..." className="input grow focus:outline-none w-full" />
                            </div>
                            <button className="text-2xl"><HiOutlineAdjustmentsHorizontal /></button>
                        </div>
                        {/* action button here  */}
                        <div className="btn btn-outline rounded-2xl border-neutral-200 hover:bg-[#304FFD] hover:border-none ">
                            <button>Action</button>
                            <span className="text-2xl">
                                <RiArrowDropDownLine></RiArrowDropDownLine>
                            </span>

                        </div>
                    </div>


                    <table className="table mt-8">
                        {/* head */}
                        <thead className="text-base">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Employee Name <span className="inline-flex"><IoMdArrowDropdown /></span></th>
                                <th>Location <span className="inline-flex"><IoMdArrowDropdown /></span></th>
                                <th>Phone <span className="inline-flex"><IoMdArrowDropdown /></span></th>
                                <th>Date <span className="inline-flex"><IoMdArrowDropdown /></span></th>
                                <th>Role <span className="inline-flex"><IoMdArrowDropdown /></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                employees.map((employee) => < tr
                                    key={employee.id}
                                >
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={employee.image} className="rounded-full" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{employee.name}</div>
                                                <div className="text-sm opacity-50">{employee.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-sm opacity-50">{employee.address}</p>
                                    </td>
                                    <td>
                                        {employee.phone}
                                    </td>
                                    <td>
                                        {employee.createdAt}
                                    </td>
                                    <td>
                                        {employee.supervisor}
                                    </td>
                                    <td>
                                        <div className="dropdown dropdown-left">
                                            <label tabIndex={0} className="btn m-1 rounded-full"><HiDotsVertical /></label>
                                            <ul tabIndex={0} className="p-2 shadow-xl  menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                <li><Link to={`/employee-update/${employee.id}`}><MdOutlineModeEdit /> Edit</Link></li>
                                                <li className="mb-2"><Link to={`/employee-details/${employee.id}`}><CgDetailsMore /> Details</Link></li>
                                                <hr />
                                                <li className="mt-2"><button onClick={() => { handleDelete(employee) }} className="text-red-600 hover:bg-red-600 hover:text-white"><FaRegTrashAlt /> Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                                )}

                        </tbody>
                    </table>
                    {/* TO DO: Pagination */}
                </div>

            </div >
        </>
    );
};

export default EmployeesInfoTable;