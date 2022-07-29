import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "../components/NavBar/NavBar";
import { styled } from '@mui/material/styles';
import GameRoom from "../pages/GameRoom/GameRoom";
import Home from "../pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import {Box, Grid, Paper} from "@mui/material";



export default function BaseLayout() {
    const [darkMode, setDarkMode] = useState(true);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleClick}/>
                </Grid>
                <Routes>
                    <Route exact path={'/'} element={<Home/>}/>
                    <Route exact path={'/:id'} element={<GameRoom/>}/>
                    {/* <Route exact path={'/about'} element={<About/>}/>
                    <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                    <Route exact path={'/Skills'} element={<Skills/>}/> */}
                </Routes>
            </Grid>
        </Box>
    )
}

