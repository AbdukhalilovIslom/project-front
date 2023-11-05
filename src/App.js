import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Collections from "./pages/collections";
import Items from "./pages/items";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Users from "./pages/users";
import MyCollections from "./pages/myCollections";
import Aside from "./components/Aside";
import "./style.css";
export const base_url = "http://localhost:4100";
// export const base_url = "https://project-back-sryf.onrender.com";

function App() {
  return (
    <div className="light-theme">
      <div style={{ display: "flex", height: "100vh" }}>
        <Aside />
        <div style={{ flex: "1", height: "100%", overflow: "scroll" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/items" element={<Items />} />
            <Route path="/profile" element={<Profile />}>
              <Route index path="collections" element={<MyCollections />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
