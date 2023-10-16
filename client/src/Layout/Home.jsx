import { Outlet, useNavigate } from "react-router-dom";
import LeftNavbar from "../Components/Shared/LeftNavbar/LeftNavbar";
import TopNavbar from "../Components/Shared/TopNavbar/TopNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLoggedOut } from "../redux-rtk/features/auth/authSlice";

const Home = () => {

    // globals
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    // if profile api failed to fetch
    useEffect(() => {
        if (!auth.isAuthenticated) {
            dispatch(userLoggedOut());
            navigate('/login');
        }
    }, [auth.isAuthenticated, dispatch, navigate])

    // loading
    if (!auth.isAuthenticated) return null;

    return (
        <div className="flex gap-2 w-full h-full min-h-screen relative">
            <LeftNavbar></LeftNavbar>
            <div className="w-full h-full max-h-screen overflow-auto relative flex flex-col">
                <TopNavbar></TopNavbar>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;