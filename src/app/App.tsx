import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProjectDetailPage from "../pages/ProjectDetail/ProjectDetailPage";
import styles from "../App.module.css";


function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
