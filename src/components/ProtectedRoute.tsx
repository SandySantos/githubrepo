import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }: any) => {
  const code = localStorage.getItem('code');

  return <>{code ? children : <Navigate to='/' replace />}</>;
};

export default ProtectedRoute;
