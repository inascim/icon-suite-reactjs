import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "../components/NavBar/NavBar";
import { styled } from '@mui/material/styles';
import Home from "../pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import {Box, Grid, Paper} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FormRow = () => {
        return (
            <React.Fragment>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            </React.Fragment>
        );
    }

const NestedGrid = () => {
    return (
        <Grid container xs={5} display={'flex'} alignContent={'center'} 
            justifyContent={'center'} alignItems={'center'}>
            <Grid container item spacing={1}>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </Grid>
    );
    }

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
                <Grid container item flexGrow={1} backgroundColor={'red'} p={2}>
                    <Grid container item xs={1} backgroundColor={'green'} px={1}>
                        {/* Users0  */}
                    </Grid>
                    <Grid container item xs={10} p={1} direction={'column'}
                        backgroundColor={'blue'} justifyContent={'space-between'} alignItems={'stretch'}>
                        <Grid item xs={2} backgroundColor={'black'}>
                            {/* Users1  */}
                        </Grid>
                        <Grid item xs={6} backgroundColor={'purple'} display={'flex'} 
                            alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
                            {/* Card Games  */}
                            {<NestedGrid />}
                        </Grid>
                        <Grid item xs={4} backgroundColor={'white'} display={'flex'} 
                            alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
                            {/* poins <- Player Cars -> stats */}
                            {<NestedGrid />}
                        </Grid>
                    </Grid>
                    <Grid container item xs={1} backgroundColor={'yellow'} px={1}>
                        {/* Users2  */}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

