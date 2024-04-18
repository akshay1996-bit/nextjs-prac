import { Metadata } from "next";

// ignores the template and returns absolute metadata
export const metadata: Metadata = {
    title: {
        absolute: 'Dashboard - Absolute Title'
    }
}
const Dashboard = () => {
    return (
        <h1>Dashboard</h1>
    );
}

export default Dashboard;