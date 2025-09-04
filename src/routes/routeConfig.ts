import Home from "../components/Home/index";
import Dashboard from "../components/Dashboard/index";
import Analytics from "../components/Analytics/index";
import Transactions from "../components/Transactions/index";
import LoginPage from "../components/Auth/LoginPage";

// Protected routes configuration
export const protectedRoutes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/analytics", component: Analytics },
  { path: "/transactions", component: Transactions },
];

// Public routes configuration
export const publicRoutes = [{ path: "/login", component: LoginPage }];
