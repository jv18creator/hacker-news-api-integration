import { Container, Fab, Grid, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { centerFloatingBtn, loading } from '../components/Home/Welcome';
import {
    fetchAskStories,
    fetchTopStories,
    fetchTopStoriesId,
} from '../redux/actions/fetchAskStories';
import CommentCard from '../components/CommentCard';
import { YoutubeSearchedForOutlined } from '@material-ui/icons';

const NewCommentsPage = () => {
    const dispatch = useDispatch();
    const topStoriesId = useSelector(
        (state) => state.newCommentsReducer.topStories
    );
    const [startingIndex, setStartigIndex] = useState(0);
    const [endingIndex, setEndingIndex] = useState(3);

    useEffect(() => {
        dispatch(fetchTopStoriesId());
    }, []);

    const loadMoreStories = () => {
        setStartigIndex(startingIndex + 3);
        setEndingIndex(endingIndex + 3);
    };

    if (!topStoriesId?.length > 0) {
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
                    {topStoriesId
                        .slice(startingIndex, endingIndex)
                        .map((id) => {
                            return <CommentCard key={id} topStoriesId={id} />;
                        })}
                </Grid>
            </Container>
        </>
    );
};

export default NewCommentsPage;
