import "./App.css";
import Main from "./pages/Main";

import { Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path=":projectName" element={<Project />} />
    </Routes>
  );
}

export default App;
