import { Route, Routes } from "react-router-dom";
import { NoMatchView } from "./shared/views/NoMatchView";
import { HomepageView } from "./shared/views/HomepageView";
import { LoginView } from "./features/auth/views/LoginView";

/**
 * View to display if the url doesn't match any view in the router
 */

export const MainRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginView></LoginView>} />
    <Route path="/" element={<HomepageView />} />
    <Route path="*" element={<NoMatchView />} />
  </Routes>
);
