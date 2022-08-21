import React from 'react';

import {
    Card, CardContent, 
    Typography, Button, TextField,
} from "@mui/material";
import { Send } from '@mui/icons-material';


export const LoginCard = () => {
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

