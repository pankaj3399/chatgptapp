import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {
  userLoggedIn,
  userLoggedOut,
} from "../redux-rtk/features/auth/authSlice";
import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginUrl } from "../configs/constants";

export default function useAuthCheck() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authChecked) return;

    const accessToken = Cookies.get("accessToken");
    const _id = Cookies.get("_id");
    const headers = { Authorization: `Bearer ${accessToken}` };

    if (accessToken && _id) {
      const decodedToken = decode(accessToken);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(userLoggedOut());
        navigate(loginUrl);
      } else {
        // Check if already authenticated
        if (!authenticated) {
          // Fetch user data from the server
          fetch(`${import.meta.env.VITE_BACKEND_URL}auth/profile`, { headers })
            .then((response) => response.json())
            .then((data) => {
              dispatch(
                userLoggedIn({
                  accessToken: accessToken,
                  isAuthenticated: true,
                  _id: _id,
                  user: data.data,
                })
              );
              setAuthenticated(true); // Mark as authenticated
            })
            .catch((error) => {
              console.error(error);
              dispatch(userLoggedOut());
              navigate(loginUrl);
            });
        }
        setAuthChecked(true);
      }
    } else {
      navigate(loginUrl);
      setAuthChecked(true);
      setAuthenticated(true);
    }

    // Set authChecked to true after processing
    setAuthChecked(true);
  }, [dispatch, navigate, authChecked, authenticated]);

  return authenticated; // Return the authenticated state
}
