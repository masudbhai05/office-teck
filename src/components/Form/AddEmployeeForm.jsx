
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const AddEmployeeForm = ({ onClose }) => {
    const navigate = useNavigate()

    const HandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.number.value;
        const address = form.address.value;
        const salary = form.salary.value;
        const profileImage = form.profileImage.value;
        const addEmployee = { name, email, phone, address, salary, attachment:"photo.png",profileImage };
        fetch(`http://localhost:5000/api/v1/employees/create-employee`, {
            method: "POST",
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
                    onClose()
                    navigate('/employee-info-table')
                }
        })
        .catch(error => console.error('Error:', error));

    }


    return (
        <div className="bg-[#00000039] fixed w-full h-screen  z-20">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="modal-box m-auto">
                <div className="flex justify-end items-end">
                    <button className="cross-btn" onClick={() => onClose()}><RxCross1 /></button>
                </div>
                <div className="flex flex-col">
                    {/* TO DO: Form */}
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <div className="my-[15px]">
                                <h2 className="text-2xl">Add Employee</h2>
                                <div className="flex justify-center items-center">
                                    <div className="w-[160px] h-[160px] flex justify-center items-center rounded-full  border-2 border-gray-300 border-dashed">
                                        <div className="w-[140px] h-[140px] bg-violet-700 flex justify-center items-center rounded-full">
                                            <img src="/src/assets/Avater/girl-avater.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4 mt-4 text-gray-400">
                                <div className="flex flex-col">
                                    <label htmlFor="first-name">Full Name</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Full Name" id="first-name" name="name" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Email" id="email" name="email" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="number">Phone</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Number" id="number" name="number" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="address">Location</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Location" id="address" name="address" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Salary" id="salary" name="salary" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="image">Image Link</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Image Link" id="image" name="profileImage" />
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex justify-between mt-4">
                                <button onClick={() => onClose()} className="cta-btn-outline">Cancel</button>
                                <button type="submit" className="cta-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                    {/* TO DO: Form */}
                </div>

            </div>
        </div>
    );
};

export default AddEmployeeForm;