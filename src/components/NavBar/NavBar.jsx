import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from '../Toggler/Toggler';
import {Link, useLocation} from "react-router-dom";
import {Box, AppBar, Toolbar, useScrollTrigger, Slide} from "@mui/material";
import mainLogo from '../../assets/logo_is.png';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      neutral: {
        main: '#f8f8f8',
        // contrastText: '#fff',
      },
    },
  });

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} in={!trigger}>
        {children}
      </Slide>
    );
}


export default function Navbar({darkMode, handleClick, ...otherProps}) {
    const location = useLocation()

    return (
        <React.Fragment>
            <ElevationScroll {...otherProps}>
                <AppBar sx={{backgroundColor: '#010536', p:1 }}>
                    <Toolbar sx={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Box 
                            display={'flex'} 
                            justifyContent={'space-between'} 
                            alignItems={'center'}
                            gap={{xs: '2rem', md: '8rem'}}
                            fontSize={'2rem'}
                            width="100%"
                            px={2}
                        >
                            <Link 
                                to='/'
                            >
                                <img 
                                    src={mainLogo} 
                                    className={Style.logo} 
                                    alt="fireSpot"
                                />
                            </Link>
                            <IconButton 
                                className={Style.user} 
                                aria-label="delete" 
                                size='large'
                                style={{color: 'yellow'}}    
                                onClick={() => {console.log('aaaa')}}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}