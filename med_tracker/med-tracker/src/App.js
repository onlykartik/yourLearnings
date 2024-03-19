import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import AdminDashboard from "./Components/admin/adminDashboard";
import PatientDashboard from './Components/Patients/PatientDashboard';
import EditAccountDetails from './Components/Patients/editAccountDetails';
import NurseDashboard from "./Components/nurse/nurseDashboard";
import DoctorDashboard from "./Components/doctor/doctorDashboard";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import {ProtectedRoute} from "./context/protectedRoute";
//import {useContext} from "react";
//import {AuthContext} from "./context/authContext";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />


            <Route path="adminDashboard" element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                </ProtectedRoute>
            } />
            <Route path="patientDashboard" element={
                <ProtectedRoute allowedRoles={['patient']}>
                    <PatientDashboard />
                </ProtectedRoute>
            } />
            <Route path="editPatientAccount" element={
                <ProtectedRoute allowedRoles={['patient']}>
                    <EditAccountDetails />
                </ProtectedRoute>
            } />
            <Route path="nurseDashboard" element={
                <ProtectedRoute allowedRoles={['nurse']}>
                    <NurseDashboard />
                </ProtectedRoute>
            } />
            <Route path="doctorDashboard" element={
                <ProtectedRoute allowedRoles={['doctor']}>
                    <DoctorDashboard />
                </ProtectedRoute>
            } />
        </Routes>
      </BrowserRouter>

  );
}



export default App;
