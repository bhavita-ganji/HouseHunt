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

import Layout from "./components/Layout";
import RequireAdmin from "./components/RequireAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Layout>
                <AdminHome />
              </Layout>
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/users"
          element={
            <RequireAdmin>
              <Layout>
                <AllUsers />
              </Layout>
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/properties"
          element={
            <RequireAdmin>
              <Layout>
                <AdminAllProperty />
              </Layout>
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <RequireAdmin>
              <Layout>
                <AdminAllBookings />
              </Layout>
            </RequireAdmin>
          }
        />

        <Route
          path="/owner"
          element={
            <Layout>
              <OwnerHome />
            </Layout>
          }
        />
        <Route
          path="/owner/add-property"
          element={
            <Layout>
              <AddProperty />
            </Layout>
          }
        />
        <Route
          path="/owner/properties"
          element={
            <Layout>
              <OwnerAllProperties />
            </Layout>
          }
        />
        <Route
          path="/owner/bookings"
          element={
            <Layout>
              <OwnerAllBookings />
            </Layout>
          }
        />

        <Route
          path="/renter"
          element={
            <Layout>
              <RenterHome />
            </Layout>
          }
        />
        <Route
          path="/renter/properties"
          element={
            <Layout>
              <RenterAllProperties />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
