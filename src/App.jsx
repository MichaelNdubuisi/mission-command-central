import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EquipmentCatalog from "./pages/EquipmentCatalog";
import LeaveApplications from "./pages/LeaveApplications";
import LeaveApplicationForm from "./pages/LeaveApplicationForm";
import Orders from "./pages/Orders";
import Announcements from "./pages/Announcements";
import Profile from "./pages/Profile";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
        <Route path="/equipment" element={
          <DashboardLayout>
            <EquipmentCatalog />
          </DashboardLayout>
        } />
        <Route path="/leave" element={
          <DashboardLayout>
            <LeaveApplications />
          </DashboardLayout>
        } />
        <Route path="/leave/apply" element={
          <DashboardLayout>
            <LeaveApplicationForm />
          </DashboardLayout>
        } />
        <Route path="/orders" element={
          <DashboardLayout>
            <Orders />
          </DashboardLayout>
        } />
        <Route path="/announcements" element={
          <DashboardLayout>
            <Announcements />
          </DashboardLayout>
        } />
        <Route path="/profile" element={
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
