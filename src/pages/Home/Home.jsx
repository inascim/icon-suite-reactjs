import React, { useState } from 'react';
import { GamesTableContainer } from '../../components/GamesTableContainer/GamesTableContainer';
import { experimentalStyled as styled } from '@mui/material/styles';
// import Style from './Home.module.scss';
// import me from '../../img/self.png';
// import classNames from 'classnames';
// import EmojiBullet from "./EmojiBullet";
// import SocialIcon from "./SocialIcon";

import {
    Box, Grid, Card, CardContent, 
    Typography, CardActionArea, CardMedia,
    Button, TextField, Divider, InputLabel,
    MenuItem, FormControl, Select
} from "@mui/material";
import { Send } from '@mui/icons-material';
// import {info} from "../../info/Info";

const SelectSmall = ({
    selectLabel = '',
    values = [{value: '', label: 'None'}],
    ...otherProps
}) => {
    const [val, setVal] = useState('');

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    return (
        <FormControl sx={{ mb: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">{selectLabel}</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={val}
                    label="Age"
                    onChange={handleChange}
                    {...otherProps}
                >
                    {values.map(
                        ({value, label}, idx) => (<MenuItem key={idx} value={value}>{label}</MenuItem>)
                    )}
            </Select>
        </FormControl>
    );
}

const LoginCard = () => {
    return (
        <Card sx={{ marginBottom: 1, width: '100%', height: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" 
                    display={'flex'} justifyContent={'center'}>
                    Login
                </Typography>
                <TextField id="outlined-basic-login" label="Login" fullWidth sx={{ marginBottom: 4}}
                    variant="outlined" size={'medium'} helperText="Please enter your login." />
                <TextField id="outlined-basic-pass" label="Password" fullWidth type={'password'} sx={{ marginBottom: 4}}
                    variant="outlined" size={'medium'} helperText="Please enter your password." />
                <Button variant="contained" size="large" endIcon={<Send />}>
                    Login
                </Button>
            </CardContent>
        </Card>
    )
}

export default function Home({debug = false}) {
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