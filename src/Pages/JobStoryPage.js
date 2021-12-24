import { Container, Fab, Grid, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoryCard from '../components/Home/StoryCard';
import { centerFloatingBtn, loading } from '../components/Home/Welcome';
import { YoutubeSearchedForOutlined } from '@material-ui/icons';
import { fetchJobStories } from '../redux/actions/fetchAskStories';

const JobStoryPage = () => {
    const dispatch = useDispatch();
    const jobStoryId = useSelector(
        (state) => state.askStoriesReducer.jobStoriesId
    );
    const [startingIndex, setStartigIndex] = useState(0);
    const [endingIndex, setEndingIndex] = useState(10);

    useEffect(() => {
        dispatch(fetchJobStories());
    }, []);

    console.log('jobStoryId', jobStoryId);

    const loadMoreStories = () => {
        setStartigIndex(startingIndex + 10);
        setEndingIndex(endingIndex + 10);
    };

    if (!jobStoryId?.length > 0) {
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
                    {jobStoryId.slice(startingIndex, endingIndex).map((id) => {
                        return <StoryCard key={id} storyId={id} />;
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default JobStoryPage;
