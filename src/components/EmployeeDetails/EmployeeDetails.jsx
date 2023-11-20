import { useLoaderData } from "react-router-dom";

const EmployeeDetails = () => {
    const employeeDetails = useLoaderData();
    const { id, name, email, phone, address, salary, profileImage } = employeeDetails.data;
    return (
        <div>
            <div className="ml-[250px]">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content w-[800px] flex justify-between lg:flex-row-reverse">
                        <div className="flex flex-col gap-5">
                            <img src={profileImage} className="max-w-sm rounded-lg shadow-2xl" />
                            <p className="text-gray-500">ID: {id}</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <p className="py-1">{email}</p>
                            <p className="py-1">{phone}</p>
                            <p className="py-1">Salary: {salary}</p>
                            <address>{address}</address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;