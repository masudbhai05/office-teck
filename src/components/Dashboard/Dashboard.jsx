import { Helmet } from "react-helmet";
import ChartLayout from "./ChartLayout/ChartLayout";

const Dashboard = () => {
    return (
        <div className="ml-[300px] mt-[97px]">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <ChartLayout></ChartLayout>
        </div>
    );
};

export default Dashboard;