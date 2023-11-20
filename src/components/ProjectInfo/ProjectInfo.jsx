import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ProjectCard from "../ProjectCard/ProjectCard";
import AddProjectForm from "../AddProjectForm/AddProjectForm";




const ProjectInfo = () => {

    const [projects, setProjects] = useState([])
    const [openProjectModal, setOpenProjectModal] = useState(false)

    useEffect(() => {
        // fetch('http://localhost:5000/api/v1/projects/create-project')
        fetch(`http://localhost:5000/api/v1/projects`)
            .then(res => res.json())
            .then(data => setProjects(data.data))
    }, [projects])


    const handleAddProjectForm = () => {
        setOpenProjectModal(true)
    }
    const handleCloseModal = () => {
        setOpenProjectModal(false)
    }
    return (
        <>
            {
                openProjectModal && <AddProjectForm onClose={handleCloseModal}> </AddProjectForm>
            }
            <div className="mt-[97px]">
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
                                    Started <div className="badge bg-[#E8E9EB] text-[#8A9099] py-3 ml-2 rounded-md">999</div>
                                </button>
                            </li>
                            <li>
                                <button className="pb-3 border-b-2 border-blue-500">
                                    Completed <div className="badge bg-[#E8E9EB] text-[#8A9099] py-3 ml-2 rounded-md">999</div>
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <button className="cta-btn" onClick={handleAddProjectForm}><FaPlus></FaPlus> Add Project</button>
                    </div>
                </div>
            </div>

            <div className="mt-8 ml-[300px] mr-8">
                <div className="grid md:grid-cols-3 gap-8 mb-10 mt-16">
                    {
                        projects.map((project) => <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProjectInfo;