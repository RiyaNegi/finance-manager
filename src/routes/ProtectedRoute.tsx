import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/authSlice";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: ProtectedRouteProps) => {
  const { user, loading } = useSelector(selectAuth);

  // Show loading spinner while checking auth
  if (loading) {
    return <span className="fa fa-spin fa-spinner" style={{ width: "20px" }} />;
  }
  // Redirect if not authenticated
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  // Render protected content
  return <>{children}</>;
};
