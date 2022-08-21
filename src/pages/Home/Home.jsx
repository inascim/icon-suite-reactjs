import React, { useState, useEffect } from 'react';
import { GamesTableContainer } from '../../components/GamesTableContainer/GamesTableContainer';
import { LoginCard } from '../../components/LoginCard/LoginCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";

export default function Home({debug = false}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (fullScreen) {
            console.log('quebrou a tela')
        }
    }, [fullScreen]);
    

    return (
        <Grid container item flexGrow={1} backgroundColor={debug ? 'red' : null} p={2}>
            <Grid container item xs={6} px={2}>
                <GamesTableContainer />
            </Grid>
            <Grid container item xs={4} backgroundColor={debug ? 'yellow' : null} px={2}
                direction={'column'}>
                <Grid item xs={6} backgroundColor={debug ? 'white' : null}>
                    {/* Login Card  */}
                    <LoginCard />
                </Grid>
            </Grid>
        </Grid>
    )
}