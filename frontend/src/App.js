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
import Addf from "./components/common/fooditemsadd";
import Viewf from "./components/common/foodlist";
import Edf from "./components/common/editfood";
import Adc from "./components/common/buyitems";
import Ulog from "./components/common/Logoutu";
import Vlog from "./components/common/LogoutV";
import Quq from "./components/common/quant";
import Cart from "./components/common/my_cart";
import Aag from "./components/common/aagorder";
import Favo from "./components/common/favors";
import Shu from "./components/common/statistics";
import Sk from "./components/common/wallet";
import Tp from "./components/common/toper";
import Suba from "./components/common/dash";


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
          <Route path="addfood" element={<Addf />} />
          <Route path="viewf" element={<Viewf />} />
          <Route path="editingfood" element={<Edf />} />
          <Route path="addtocart" element={<Adc />} />
          <Route path="ulogout" element={<Ulog />} />
          <Route path="vlogout" element={<Vlog />} />
          <Route path="quantity" element={<Quq />} />
          <Route path="carter" element={<Cart />} />
          <Route path="aag" element={<Aag />} />
          <Route path="Favour" element={<Favo />} />
          <Route path="vstati" element={<Shu />} />
          <Route path="Sk" element={<Sk />} />
          <Route path="top" element={<Tp />} />
          <Route path="Suba" element={<Suba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
