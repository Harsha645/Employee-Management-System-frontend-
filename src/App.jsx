
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import EmployeeDetails from "./Pages/EmployeeDetails";
import Header from "./component/Header";
import SignUp from "./Pages/SignUp";
import AddEmployeeByAdmin from "./Pages/AddEmployeeByAdmin";


function App() {

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/employees" element={<EmployeeDetails/>}/>
        <Route path="/add-employee" element={<AddEmployeeByAdmin/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
