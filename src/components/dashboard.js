import DashboardAbout from "../components/about";
import DashboardContact from "../components/contact";
import DashboardLanding from "../components/landing";
import DashboardServices from "../components/services";

const Dashboard = () => {
  return (
    <div>
      <DashboardLanding />
      <DashboardServices />
      <DashboardAbout />
      <DashboardContact />
    </div>
  )
};

export default Dashboard;
