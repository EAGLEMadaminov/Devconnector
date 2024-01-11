import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/Main";
// Pages
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Posts from "./Pages/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
