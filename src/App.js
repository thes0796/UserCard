import "./App.css";
import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

const Profile = lazy(() => import("./Components/Profile/Profile"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route
            path="profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
