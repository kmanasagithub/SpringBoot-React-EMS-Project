import ListEmployeeComponent from "./components/ListEmployeeComponent"
import './App.css'
import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from "./components/EmployeeComponent"
import Home from "./components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
           {/* http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
           {/* http://localhost:3000/edit-employee/{id} */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
