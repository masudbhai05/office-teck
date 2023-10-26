import { useEffect, useState } from "react";
import { FaPlus} from "react-icons/fa6";

const EmployeesInfoTable = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch('UserInfo.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    console.log(employees);
    return (
        <>
            <div>
                <div className="flex justify-between items-center mx-[30px] mt-4">
                    <div className="mt-[30px]">
                        <ul className="flex justify-center items-center gap-4">
                            <li>All</li>
                            <li>Active</li>
                            <li>Blocked</li>
                        </ul>
                    </div>
                    <div>
                        <button className="cta-btn flex justify-center items-center gap-3">
                           <FaPlus></FaPlus> <span>Add Employee</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white mx-[30px] mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Employee Name</th>
                                <th>Location</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
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
                                                    <img src={employee.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{employee.name}</div>
                                                <div className="text-sm opacity-50">{employee.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-sm opacity-50">{employee.location}</p>
                                    </td>
                                    <td>
                                        {employee.phone}
                                    </td>
                                    <td>
                                        {employee.date}
                                    </td>
                                    <td>
                                        <button className="status-btn">{employee.status}</button>
                                    </td>

                                </tr>
                                )}

                        </tbody>
                    </table>
                </div>

            </div >
        </>
    );
};

export default EmployeesInfoTable;