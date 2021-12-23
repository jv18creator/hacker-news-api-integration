import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { ChangeHistoryTwoTone } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../redux/actions/fetchUserInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        width: 300,
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
    titleLinkDecoration: {
        color: 'black',
    },
}));

const StoryCard = ({ storyId }) => {
    const classes = useStyles();
    const [storyData, setStoryData] = useState({});
    const dispatch = useDispatch();

    const redirectToUsersPage = (story) => {
        dispatch(fetchUserInfo(story.by));
    };

    useEffect(() => {
        if (storyId) {
            const fetchStories = async () => {
                await Axios.get(
                    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
                )
                    .then((res) => {
                        setStoryData(res.data);
                    })
                    .catch((err) => {
                        // handle error
                    });
            };
            fetchStories();
        }
    }, []);

    const date = new Date(storyData?.time * 1000);
    const hours = date.getHours();

    return (
        <>
            <Card className={`${classes.root} ${classes.cardSpacing}`}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {storyData?.url?.split('/')[2]}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        <a
                            href={storyData?.url}
                            className={classes.titleLinkDecoration}
                        >
                            {storyData?.title}
                        </a>
                    </Typography>
                    <Typography
                        className={classes.pos}
                        variant="subtitle2"
                        color="textSecondary"
                    >
                        <Link to="#" className={classes.removeTextDecoration}>
                            hide
                        </Link>
                        {' | '}
                        <ChangeHistoryTwoTone
                            style={{
                                width: '18px',
                                height: '18px',
                                position: 'relative',
                                top: '5px',
                            }}
                        />
                    </Typography>
                    <Typography variant="body2" component="p">
                        {storyData?.score} points by{' '}
                        <Link to={'/user?id=' + storyData.by}>
                            {' '}
                            <span
                                onClick={() => redirectToUsersPage(storyData)}
                            >
                                {' '}
                                {storyData?.by}
                            </span>
                        </Link>{' '}
                        <br /> {hours} hours ago
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        {storyData?.kids?.length ? storyData.kids.length : 0}{' '}
                        comments
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default StoryCard;
