import { FaRegTrashAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, description, projectImage } = project;
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/projects/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Project Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(id)
            })
    }
    return (
        <div className="CustomShadow card w-96 bg-base-100">
            <div className="card-body">
                <div className="flex justify-between gap-3">
                    <div className="flex justify-center items-center gap-3">
                        <img className="w-[50px] rounded-full" src={projectImage} alt="Avatar" />
                        <h2 className="text-base font-bold">{name}</h2>
                    </div>
                    <div className="dropdown dropdown-left">
                        <label tabIndex={0} className="btn m-1 rounded-full bg-white"><HiDotsVertical /></label>
                        <ul tabIndex={0} className="p-2 shadow-xl  menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className="mb-2"><Link to={`/update-project-form/${id}`}><MdOutlineModeEdit /> Edit</Link></li>
                            <hr />
                            <li className="mt-2"><button onClick={()=>handleDelete(id)} className="text-red-600 hover:bg-red-600 hover:text-white"><FaRegTrashAlt /> Delete</button></li>
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="w-full">
                    <div className="flex  justify-between text-gray-400">
                        <p>Progress</p>
                        <p className="flex-grow-0">{75} %</p>
                    </div>
                    <progress className="progress progress-success" value={75} max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;