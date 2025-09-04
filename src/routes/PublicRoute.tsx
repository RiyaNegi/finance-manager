import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/authSlice";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const PublicRoute = ({
  children,
  redirectTo = "/",
}: PublicRouteProps) => {
  const { user, loading } = useSelector(selectAuth);

  // Show loading spinner while checking auth
  if (loading) {
    return <span className="fa fa-spin fa-spinner" style={{ width: "20px" }} />;
  }

  // Redirect if already authenticated
  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  // Render public content (login/register)
  return <>{children}</>;
};
