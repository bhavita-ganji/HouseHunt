import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/common/Home";
import Login from "./modules/common/Login";
import Register from "./modules/common/Register";

import AdminHome from "./modules/admin/AdminHome";
import AllUsers from "./modules/admin/AllUsers";
import AdminAllProperty from "./modules/admin/AllProperty";
import AdminAllBookings from "./modules/admin/AllBookings";

import OwnerHome from "./modules/user/owner/OwnerHome";
import AddProperty from "./modules/user/owner/AddProperty";
import OwnerAllProperties from "./modules/user/owner/AllProperties";
import OwnerAllBookings from "./modules/user/owner/AllBookings";

import RenterHome from "./modules/user/renter/RenterHome";
import RenterAllProperties from "./modules/user/renter/AllProperties";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/properties" element={<AdminAllProperty />} />
        <Route path="/admin/bookings" element={<AdminAllBookings />} />

        <Route path="/owner" element={<OwnerHome />} />
        <Route path="/owner/add-property" element={<AddProperty />} />
        <Route path="/owner/properties" element={<OwnerAllProperties />} />
        <Route path="/owner/bookings" element={<OwnerAllBookings />} />

        <Route path="/renter" element={<RenterHome />} />
        <Route path="/renter/properties" element={<RenterAllProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;