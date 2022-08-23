import React from 'react'
import {
    Box, Card, CardContent, Grid,
    Typography, CardActionArea, 
} from "@mui/material";

const GameCard = ({
    game: {
        name = '-',
        players  = [],
        gameMode = '-',
        dificulty = '-'
    }
}) => {
    return (
        <Card 
            sx={{ marginBottom: 1}}
        >
            <CardActionArea
                onClick={() => {console.log('AAAAAAAAAAA')}}
            >
                <CardContent>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item display={'flex'} flexDirection={'row'}>
                            <Typography variant="body2" color="text.secondary" mr={2}>
                                Game Mode: {gameMode}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dificulty: {dificulty}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                Total Players: {players?.length}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


const GamesCardList = ({gameList = []}) => {
    return (
        <Box sx={{ 
            backgroundColor: 'white', overflow: 'auto', 
            maxHeight: '60vh', borderRadius: '1px'
        }} p={1} width={'100%'} height={'100%'}>
            {gameList.map((game, idx) => (<GameCard game={game} key={idx} />))}
        </Box>
    )
}

export default GamesCardList