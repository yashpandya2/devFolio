import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// import Login from "./components/Login/Login";
// import {  useSelector } from "react-redux";
// import { getUser, loadUser } from "./actions/user";
// import AdminPanel from "./components/Admin/AdminPanel";
// import Timeline from "./components/Admin/Timeline";
// import Project from "./components/Admin/Project";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            /> */}
          {/* <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            /> */}
          {/* <Route
              path="/admin/projects"
              element={isAuthenticated ? <Project /> : <Login />}
            /> */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
