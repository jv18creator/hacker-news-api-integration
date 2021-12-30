import { Container, Fab, Grid } from '@material-ui/core';
import { YoutubeSearchedForOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopStories } from '../redux/actions/fetchAskStories';
import CardOfComment from './CardOfComment';
import { centerFloatingBtn } from './Home/Welcome';

const CommentCard = ({ topStoriesId }) => {
    const dispatch = useDispatch();
    let [allKids, setAllKids] = useState([]);
    useEffect(() => {
        if (topStoriesId) {
            dispatch(fetchTopStories(topStoriesId)).then((res) => {
                setAllKids([...res.data.kids]);
            });
        }
    }, [topStoriesId]);

    return (
        <>
            <div>
                <Container maxWidth="lg" style={{ minHeight: '100vh' }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {allKids?.map((kid_id) => (
                            <CardOfComment kid_id={kid_id} key={kid_id} />
                        ))}
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default CommentCard;
