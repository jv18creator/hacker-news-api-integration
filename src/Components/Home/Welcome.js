import {
    Container,
    makeStyles,
    CardContent,
    Card,
    Typography,
    CardActions,
    Button,
    Grid,
    CircularProgress,
    Modal,
    Fab,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import StoryCard from './StoryCard';
import { YoutubeSearchedForOutlined } from '@material-ui/icons';

export const centerFloatingBtn = {
    position: 'fixed',
    inset: '90% 50% 0 50%',
    zIndex: 1000,
    width: '280px',
    transform: `translateX(-30%)`,
};

export const loading = {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardSpacing: {
        margin: '18px 10px',
    },
    removeTextDecoration: {
        textDecoration: 'none',
        color: 'gray',
        fontWeight: '400',
    },
}));

const Welcome = (props) => {
    const { startingIndex, endingIndex, setStartigIndex, setEndingIndex } =
        props;
    const classes = useStyles();
    const [error, setError] = useState({
        message: null,
    });
    let [dataId, setDataId] = useState([]);

    useEffect(() => {
        const fetchIds = async () => {
            await Axios.get(
                `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
            )
                .then((res) => {
                    setDataId(res.data);
                })
                .catch((err) => {
                    setError({
                        message: 'Please try again after some time',
                    });
                });
        };
        fetchIds();
    }, []);

    const loadMoreStories = () => {
        setStartigIndex(startingIndex + 10);
        setEndingIndex(endingIndex + 10);
    };

    useEffect(() => {
        if (endingIndex >= dataId.length) {
            setEndingIndex(10);
            setStartigIndex(0);
        }
    }, [endingIndex]);

    if (error.message) {
        return (
            <div style={loading}>
                <Typography variant="h4" style={{ fontWeight: 600 }}>
                    {error.message}
                </Typography>
            </div>
        );
    }

    if (!dataId.length > 0) {
        return (
            <div style={loading}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <div style={centerFloatingBtn} onClick={loadMoreStories}>
                <Fab variant="extended">
                    <YoutubeSearchedForOutlined />
                    Load more
                </Fab>
            </div>
            <Container maxWidth="lg" style={{ minHeight: '100vh' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {dataId.slice(startingIndex, endingIndex).map((id) => {
                        return <StoryCard key={id} storyId={id} />;
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Welcome;
