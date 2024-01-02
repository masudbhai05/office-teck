import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeesInfoTable from "../components/EmployeesInfoTable/EmployeesInfoTable";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo";
import UpdateProjectForm from "../components/UpdateProjectForm/UpdateProjectForm";
import Dashboard from "../components/Dashboard/Dashboard";
import EmployeeUpdate from "../components/EmployeeUpdate/EmployeeUpdate";
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails";
import Login from "../components/Login/Login";
import Authentication from "../Layouts/Authentication";
import SignUp from "../components/Login/SignUp";
import LandingPage from "../components/LandingPage/LandingPage";
import Profile from "../components/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Asset from "../components/Asset/Asset";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/',
                element: <LandingPage></LandingPage>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: 'asset',
                element:<Asset></Asset>
            },
            {
                path: 'profile',
                element:<Profile></Profile>
            },
            {
                path: 'employees',
                element: <EmployeesInfoTable></EmployeesInfoTable>
            },
            {
                path: 'projects',
                element: <ProjectInfo></ProjectInfo>
            },
            {
                path: 'update-project-form/:id',
                element: <UpdateProjectForm></UpdateProjectForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/projects/${params.id}`)
            },
            {
                path: 'employee-update/:id',
                element: <EmployeeUpdate></EmployeeUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/employees/${params.id}`)
            },
            {
                path: 'employee-details/:id',
                element: <EmployeeDetails></EmployeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/employees/${params.id}`)
            }
        ]
    },

])