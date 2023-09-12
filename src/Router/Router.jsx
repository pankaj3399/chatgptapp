import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Library from "../Components/Library/Library";
import Chat from "../Components/Chat/Chat/Chat";
import MyPrompts from "../Components/MyPrompts/MyPrompts/MyPrompts";
import Login from "../Layout/Login";
import CreateCharacter from "../Components/Create/CreateCharacter/CreateCharacter";
import CreatePrompts from "../Components/Create/CreatePrompts/CreatePrompts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Library></Library>
            },
            {
                path: '/library',
                element: <Library></Library>
            },
            {
                path: '/chat',
                element: <Chat></Chat>
            },
            {
                path: '/myprompts',
                element: <MyPrompts></MyPrompts>
            },
            {
                path: '/createPrompts',
                element: <CreatePrompts></CreatePrompts>
            },
            {
                path: '/createCharacter',
                element: <CreateCharacter></CreateCharacter>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);