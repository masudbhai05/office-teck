import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeesInfoTable from "../components/EmployeesInfoTable/EmployeesInfoTable";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo";
import UpdateProjectForm from "../components/UpdateProjectForm/UpdateProjectForm";
import Dashboard from "../components/Dashboard/Dashboard";
import EmployeeUpdate from "../components/EmployeeUpdate/EmployeeUpdate";
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: 'employee-info-table',
                element: <EmployeesInfoTable></EmployeesInfoTable>
            },
            {
                path: 'project-info',
                element: <ProjectInfo></ProjectInfo>
            },
            {
                path: 'update-project-form/:id',
                element: <UpdateProjectForm></UpdateProjectForm>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/projects/${params.id}`)
            },
            {
                path: 'employee-update/:id',
                element: <EmployeeUpdate></EmployeeUpdate>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/employees/${params.id}`)
            },
            {
                path: 'employee-details/:id',
                element: <EmployeeDetails></EmployeeDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/employees/${params.id}`)
            }
        ]
    }
])