import { Route, Routes } from "react-router-dom";
import ManageTasks from "./components/ManageTasks";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import AddTask from "./pages/AddTask";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="/" element={<PrivateRoute><ManageTasks /></PrivateRoute>} />
          <Route path="addTask" element={<PrivateRoute><AddTask /></PrivateRoute>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
