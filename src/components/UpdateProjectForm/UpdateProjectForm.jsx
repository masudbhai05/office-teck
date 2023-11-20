import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProjectForm = () => {
    const project = useLoaderData();
    const { id, name, description, projectImage } = project.data;
    const navigate = useNavigate()

    console.log(project)

    const HandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const projectImage = form.projectImage.value;
        const updateProject = { name, description, projectImage }
        fetch(`http://localhost:5000/api/v1/projects/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProject)
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
                        title: "Project Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/project-info')
                }
            })
            .catch(error => console.error('Error:', error));
    }



    return (
        <div>
            <div className="w-[900px] m-auto mt-[100px]">
                <form onSubmit={HandleSubmit}>
                    <div>
                        <div className="my-[15px]">
                            <h2 className="text-2xl">Update Project</h2>
                        </div>
                        <div className="flex flex-col gap-y-4 mt-4 text-gray-400">
                            <div className="flex flex-col">
                                <label htmlFor="Project-name">Project Name</label>
                                <input type="text" defaultValue={name} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Project Name" id="Project-name" name="name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="description">Description</label>
                                <textarea defaultValue={description} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Description" id="description" name="description" cols="30" rows="5"></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="number">Project Image</label>
                                <input type="text" defaultValue={projectImage} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Project Image Link" id="number" name="projectImage" />
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="flex justify-end mt-4">
                            <button type="submit" className="cta-btn">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProjectForm;