import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginUrl } from "../../configs/constants";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {

    // globals
    const location = useLocation()
    const auth = useSelector((state) => state.auth);

    return (
        auth?.isAuthenticated
            ? children
            : <Navigate to={loginUrl} state={{ from: location.pathname }} replace />
    )
}

export default RequireAuth