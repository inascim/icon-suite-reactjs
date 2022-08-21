import React, { useState, useEffect } from 'react';
import { GamesTableContainer } from '../../components/GamesTableContainer/GamesTableContainer';
import { LoginCard } from '../../components/LoginCard/LoginCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";

export default function Home({debug = false}) {
    const theme = useTheme();
    const fullScreenDown = useMediaQuery(theme.breakpoints.down('sm'));
    const fullScreenUp = useMediaQuery(theme.breakpoints.up('sm'));

    useEffect(() => {
        if (fullScreenUp || fullScreenDown) {
            console.log('quebrou a tela')
        }
    }, [fullScreenDown, fullScreenUp]);
    

    return (
        <Grid container item flexGrow={1} backgroundColor={debug ? 'red' : null} p={2}>
            <Grid container item xs={12} sm={6} px={2}>
                <GamesTableContainer />
            </Grid>
            {fullScreenUp && (
                <Grid container item xs={4} backgroundColor={debug ? 'yellow' : null} px={2}
                    direction={'column'}>
                    <Grid item xs={6} backgroundColor={debug ? 'white' : null}>
                        {/* Login Card  */}
                        <LoginCard />
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}