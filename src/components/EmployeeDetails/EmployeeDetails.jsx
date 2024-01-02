import { useContext, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { MdOutlineArrowBackIos } from "react-icons/md";



const EmployeeDetails = () => {
    const employeeDetails = useLoaderData();
    const { id, name, email, phone, address, supervisor, image } = employeeDetails.data;

    const { user } = useContext(AuthContex);
    const [activeTab, setActiveTab] = useState('tab1'); // Set the initial active tab
    const tabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div>
           
            {/* tab start here  */}
            <div className="ml-[300px] mt-[100px]">
                <div className="my-3">
                    <Link to={"/employees"}> <span className="text-sky-600 flex items-center gap-2"><MdOutlineArrowBackIos/> Back</span> </Link>
                </div>
                <div className="tabs tabs-boxed mr-6" role="tablist">
                    <NavLink
                        // to="/details"
                        className={`tab ${activeTab === 'tab1' ? 'tab-active' : ''}`}
                        role="tab"
                        onClick={() => tabClick('tab1')}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        // to="/devices"
                        className={`tab ${activeTab === 'tab2' ? 'tab-active' : ''}`}
                        role="tab"
                        onClick={() => tabClick('tab2')}
                    >
                        Devices
                    </NavLink>
                    <NavLink
                        // to="/tab3"
                        className={`tab ${activeTab === 'tab3' ? 'tab-active' : ''}`}
                        role="tab"
                        onClick={() => tabClick('tab3')}
                    >
                        Leave
                    </NavLink>
                </div>

                {/* Render different content based on active tab */}
                <div>
                    {activeTab === 'tab1' && (
                        <div>
                            <div className="mt-[100px]">
                                <div className="">
                                    <div className=" w-[800px] flex justify-between lg:flex-row-reverse">
                                        <div className="max-w-[300px] flex flex-col gap-5">
                                            <img src={image} className="w-full rounded-lg shadow-2xl" />
                                            <p className="text-gray-500">ID: {id}</p>
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-bold">{name}</h1>
                                            <p className="py-1">{email}</p>
                                            <p className="py-1">{phone}</p>
                                            <p className="py-1">Role: {supervisor}</p>
                                            <address>{address}</address>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div>
                            {/* Content for Tab 2 */}
                            This is Tab 2 content. Its currently active.
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div>
                            {/* Content for Tab 3 */}
                            This is Tab 3 content.
                        </div>
                    )}
                </div>
            </div >

        </div>
    );
};

export default EmployeeDetails;