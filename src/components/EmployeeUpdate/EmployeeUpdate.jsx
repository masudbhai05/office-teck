import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeUpdate = () => {
    const employee = useLoaderData()
    const { id, name, email, phone, address, supervisor, image } = employee.data;
    const navigate = useNavigate()

    const HandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.number.value;
        const address = form.address.value;
        const supervisor = form.supervisor.value;
        const image = form.image.value;
        const addEmployee = {
            name,
            email,
            phone,
            emergencyContact: "Emergency Contact 2",
            address,
            bloodGroup: "A-",
            joiningDate: "2022-03-01T08:00:00.000Z",
            department: "HR",
            supervisor,
            nidNumber: "NID654321",
            passportNumber: "PassportXYZ456",
            image,
            bio: "Jane Smith is an enthusiastic team player with excellent interpersonal skills."
        }
        fetch(`http://localhost:5000/api/v1/employees/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addEmployee)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === "success") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Employee Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/employee-info-table')
                }
            })
            .catch(error => console.error('Error:', error));

    }

    return (
        <div>
            <div className="w-[900px] m-auto mt-[90px] mb-[90px]">
                <div>
                <Link to={"/employees"}> <span className="text-sky-600 flex items-center gap-2"><MdOutlineArrowBackIos/> Back</span> </Link>
                </div>
                <div className="my-[15px]">
                            <h2 className="text-2xl">Update Employee</h2>
                        </div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        
                        <div className="flex flex-col gap-y-4 mt-4 text-gray-400">
                            <div className="flex flex-col">
                                <label htmlFor="first-name">Full Name</label>
                                <input type="text" defaultValue={name} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Full Name" id="first-name" name="name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input type="email" defaultValue={email} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Email" id="email" name="email" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="number">Phone</label>
                                <input type="text" defaultValue={phone} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Number" id="number" name="number" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="address">Location</label>
                                <input type="text" defaultValue={address} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Location" id="address" name="address" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="role">Role</label>
                                <input type="text" defaultValue={supervisor} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Salary" id="salary" name="supervisor" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="image">Image Link</label>
                                <input type="text" defaultValue={image} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Image Link" id="image" name="image" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="submit" className="cta-btn ml-3">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeUpdate;