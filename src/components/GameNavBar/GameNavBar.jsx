import React from 'react';
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

const GameNavBar = ({
    games,
    page = 1,
    totalGames = 0,
}) => {

    const handleClickNextPage = () => {alert('next page')};
    const handleClickPrevPage = () => {alert('prev page')};

    return (<Grid container item direction={'row'} justifyContent={'space-between'}>
    <Grid item xs={2} display={'flex'} justifyContent={'space-between'}>
        <IconButton color="primary" size={'small'} onClick={handleClickPrevPage}>
            <ArrowBackIos sx={{ width: '0.75rem', height: '0.75rem'}}/>
        </IconButton>

        <IconButton color="primary" size={'small'} onClick={handleClickNextPage}>
            <ArrowForwardIos sx={{ width: '0.75rem', height: '0.75rem'}}/>
        </IconButton>
    </Grid>
    <Grid item xs={8} display={'flex'} justifyContent={'flex-end'}>
        <Typography gutterBottom component="div" color={'black'}>
            Page: {page} / Total: {totalGames}
        </Typography>
    </Grid>
</Grid>)
};

export default GameNavBar;