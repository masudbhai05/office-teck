import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProjectForm = ({ onClose }) => {
    const navigate = useNavigate()

    const HandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const addProject = {
            name,
            description,
            startDate: "2023-01-10T08:00:00.000Z",
            deadline: "2023-03-15T23:59:59.999Z",
            client: "Client X",
            image,
        }
        fetch(`http://localhost:5000/api/v1/projects/create-project`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProject)
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
                        title: "Project Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    onClose();
                    navigate('/project-info')
                }
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div className="bg-[#00000039] fixed top-0 w-full h-screen  z-30">
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
                                <h2 className="text-2xl">Add Project</h2>
                                {/* <div className="flex justify-center items-center">
                                        <div className="w-[160px] h-[160px] flex justify-center items-center rounded-full  border-2 border-gray-300 border-dashed">
                                            <div className="w-[140px] h-[140px] bg-violet-700 flex justify-center items-center rounded-full">
                                                <img src="/src/assets/Avater/girl-avater.png" alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                            <div className="flex flex-col gap-y-4 mt-4 text-gray-400">
                                <div className="flex flex-col">
                                    <label htmlFor="Project-name">Project Name</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Project Name" id="Project-name" name="name" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Description" id="description" name="description" cols="30" rows="5"></textarea>
                                    {/* <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Description" id="description" name="description" /> */}
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="image">Project Image</label>
                                    <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Project Image Link" id="image" name="image" />
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

export default AddProjectForm;