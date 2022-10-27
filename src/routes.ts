import Login from "./components/Login";
import Chat from "./components/Chat";
import {CHAT_PAGE, LOGIN_PAGE} from "./utils/const";




export const publicRoutes = [
    {
        path: LOGIN_PAGE,
        element: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_PAGE,
        element: Chat
    }
]