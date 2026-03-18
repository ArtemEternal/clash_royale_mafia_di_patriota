import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NotFound from "./components/NotFound.jsx";
import FamigliaPage from "./components/FamiliagaPage.jsx";
import BossPage from "./components/BossModule.jsx";
import AdminPage from "./components/AdminsPage.jsx";
import RulesPage from "./components/RulesPage.jsx";
import DomainPage from "./components/DomainPage.jsx";
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/famiglia" element={<FamigliaPage/>}/>
      <Route path="/owner" element={<BossPage/>}/>
      <Route path="/head" element={<AdminPage/>}/>
      <Route path="/rules" element={<RulesPage/>}/>
      <Route path="/domain" element={<DomainPage/>}/>
    </Routes>
  )
}

export default App
