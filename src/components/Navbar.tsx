import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_PAGE} from "../utils/const";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent={'end'}>
                    {user ?
                        <>
                            <Button variant={'outlined'} color={'inherit'} onClick={() => auth.signOut()}>Выйти</Button>
                        </>

                    :
                        <NavLink to={LOGIN_PAGE} style={{color: 'inherit', textDecoration: 'none'}}>
                            <Button variant={'outlined'} color={'inherit'}>Логин</Button>
                        </NavLink>
                    }

                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;