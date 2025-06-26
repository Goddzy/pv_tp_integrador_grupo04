import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
     const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/iniciarSesion"  replace />;
  if (!user.administrador) return <Navigate to="/" replace />; 
  return children;
};

export default AdminRoute;