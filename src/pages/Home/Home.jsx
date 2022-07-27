import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
// import Style from './Home.module.scss';
// import me from '../../img/self.png';
// import classNames from 'classnames';
// import EmojiBullet from "./EmojiBullet";
// import SocialIcon from "./SocialIcon";
import {Box, Grid, Paper} from "@mui/material";
// import {info} from "../../info/Info";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }));
  

export default function Home() {

return (
    <Grid 
        container
        style={{ height: '100%' }}
        backgroundColor={'red'}
    >
        <Grid container item xs={12} backgroundColor={'green'}/>
    </Grid>
)
}