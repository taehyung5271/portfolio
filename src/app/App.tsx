import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProjectDetail from "../pages/ProjectDetails/ProjectDetail";

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
