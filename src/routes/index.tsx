import { Route, Routes } from "react-router-dom";
import PanelLayout from "../layout/panel";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";
import SingOut from "../pages/signOut";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sign-out" element={<SingOut />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
