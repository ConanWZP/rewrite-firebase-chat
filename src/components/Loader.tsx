import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import './../App.css'

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 64}}
                  alignItems={'center'}
                  justifyContent={'center'}>
                <Grid container alignItems={'center'} direction={'column'}>
                    <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;