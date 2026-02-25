import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import ProjectDetail from "../pages/projectDetails/ProjectDetail";

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<ProjectDetail/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
  
}

export default App;
