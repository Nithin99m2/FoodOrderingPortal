import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Hehe1 from "./components/common/Hehe1";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Hehe from "./components/common/Hehe";
import Ur from "./components/common/Register";
import Vr from "./components/common/RegisterV";
import Ul from "./components/common/Login";
import Vl from "./components/common/Login";
import Na from "./components/users/bhome";
import Nal from "./components/users/vhome";
import Uhome from "./components/common/Upof";
import Vhome from "./components/common/Vprofile";


const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Hehe1 />} />
          <Route path="Login" element={<Ul />} />
          <Route path="profile" element={<Profile />} />
          <Route path="buyer" element={<UsersList />} />
          <Route path="ul" element={<Ul/>} />
          <Route path="vl" element={<Vl />} />
          <Route path="ur" element={<Ur />} />
          <Route path="vr" element={<Vr />} />
          <Route path="nav" element={<Na />} />
          <Route path="navl" element={<Nal />} />
          <Route path="uprofi" element={<Uhome />} />
          <Route path="vprofi" element={<Vhome />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;