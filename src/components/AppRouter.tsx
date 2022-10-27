import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../routes';
import {CHAT_PAGE, LOGIN_PAGE} from "../utils/const";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    /*const user = false*/
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            {user ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element/>} />
                )}
                <Route path={'/*'} element={<Navigate to={CHAT_PAGE}/>} />
            </Routes>
            :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element/>} />
                    )}
                    <Route path={'/*'} element={<Navigate to={LOGIN_PAGE}/>} />
                </Routes>
            }
        </div>
    );
};

export default AppRouter;