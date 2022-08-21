import React from 'react'
import { Grid, Button, TextField } from "@mui/material";
import { VideogameAsset, FilterAlt } from '@mui/icons-material';

const GamesInteractionBar = ({games}) => {
    const handleClickFilter = () => {};
    return (
        <Grid container direction={'row'} justifyContent={'flex-start'} alignItems={'center'}>
            <Grid container item xs={8} direction={'row'} justifyContent={'flex-start'}
                alignItems={'center'} p={1}>
                <Grid item xs={6} mr={1}>
                    <TextField id="outlined-basic-room-name-filter" label="Room Name" 
                        variant="outlined" size={'small'} />
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={handleClickFilter} variant="contained" 
                        size="small" endIcon={<FilterAlt />}>

                        Filter
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={4} display={'flex'} justifyContent={'flex-end'}>
                <Button variant="outlined" size="small" endIcon={<VideogameAsset />}>
                    New Game
                </Button>
            </Grid>
        </Grid>
        );
    }

export default GamesInteractionBar;