import { Routes, Route } from "react-router-dom";
import Applied from "./pages/Applied";
import Jobposts from "./pages/Jobposts";
import Profile from "./pages/Profie";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Jobposts" element={<Jobposts/>} />
        <Route path="/Applied" element={<Applied/>} />
      </Routes>
    </>
  );
}

export default App;
