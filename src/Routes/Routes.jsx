import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import EmployeesInfoTable from "../components/EmployeesInfoTable/EmployeesInfoTable";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'employeeinfotable',
                element: <EmployeesInfoTable></EmployeesInfoTable>
            }
        ]
    }
])