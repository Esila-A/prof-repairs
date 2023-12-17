import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="landing" element={<Landing />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
