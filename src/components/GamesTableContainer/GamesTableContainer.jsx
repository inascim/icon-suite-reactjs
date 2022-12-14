import React from 'react'
import GameNavBar from '../GameNavBar/GameNavBar';
import GamesInteractionBar from '../GamesInteractionBar/GamesInteractionBar';
import GamesCardList from '../GamesCardList/GamesCardList';
import { Grid, Card, CardContent } from "@mui/material";
import { useQuery, gql, useSubscription } from "@apollo/client";


const GAMES_QUERY = gql`
    {
        games{
            _id 
            gameCards
            gameMode
            gameDificulty
            players { playerName playerScore playerCards} 
        }
    }
`;

const COMMENTS_SUBSCRIPTION = gql`
    subscription {
        gamesSub {
            gameName
            gameMode
            gameDificulty
        }
    }
`;

export const GamesTableContainer = ({debug = false}) => {

    const mockRooms = [
        {   players: [],
            name: 'First Room',
            gameMode: 'Basic Game',
            dificulty: 'Easy'
        },
        {   players: [],
            name: 'Second Room',
            gameMode: 'Advanced Game',
            dificulty: 'Medium'
        },
        {   players: [],
            name: 'Thrid Room',
            gameMode: 'Crazy Game',
            dificulty: 'Hard'
        },
        {   players: [],
            name: 'Impossible Room',
            gameMode: 'Disaster Game',
            dificulty: 'R U MAD ?'
        },
    ]

    const { data, loading, error } = useQuery(GAMES_QUERY);
    const { data: dSub, loading: lSub, error: eSub } = useSubscription(COMMENTS_SUBSCRIPTION);

    console.log({ data, loading, error });
    console.log({ dSub, lSub, eSub });

    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent>
                <Grid container item backgroundColor={debug ? 'black' : null}
                    direction={'column'} alignItems={'stretch'} justifyContent={'flex-start'}>
                    <Grid item xs={1} backgroundColor={'white'} >
                        <GamesInteractionBar />
                    </Grid>
                    <Grid item backgroundColor={debug ? 'green' : null} >
                        {/* <Room Game Card /> */}
                        <GamesCardList gameList={mockRooms} />
                    </Grid>
                    <Grid container item xs={1} p={1} pb={0} backgroundColor={'white'}>
                        {/* Room Navigation Bar */}
                        <GameNavBar />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
)
}
