import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import DashboardAbout from "./components/about";
import DashboardContact from "./components/contact";
import Footer from "./components/footer";
import DashboardLanding from "./components/landing";
import DashboardServices from "./components/services";
import Gallery from "./components/gallery";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="header" element={<DashboardLanding />} />
          <Route path="services" element={<DashboardServices />} />
          <Route path="about" element={<DashboardAbout />} />
          <Route path="contact" element={<DashboardContact />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
