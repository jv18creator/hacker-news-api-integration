import { Container, Fab, Grid, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoryCard from '../components/Home/StoryCard';
import { fetchNewestNews } from '../redux/actions/fetchNewestNews';
import { centerFloatingBtn, loading } from '../components/Home/Welcome';
import { YoutubeSearchedForOutlined } from '@material-ui/icons';

const NewestNewsPage = () => {
    const dispatch = useDispatch();
    const postIds = useSelector(
        (state) => state.newestNewsReducer.newestPostsId
    );
    const [startingIndex, setStartigIndex] = useState(0);
    const [endingIndex, setEndingIndex] = useState(10);

    useEffect(() => {
        dispatch(fetchNewestNews());
    }, []);

    const loadMoreStories = () => {
        setStartigIndex(startingIndex + 10);
        setEndingIndex(endingIndex + 10);
    };

    if (!postIds?.length > 0) {
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
                    {postIds.slice(startingIndex, endingIndex).map((id) => {
                        return <StoryCard key={id} storyId={id} />;
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default NewestNewsPage;
