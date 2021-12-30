import {
    Card,
    CardContent,
    CircularProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    ChangeHistoryTwoTone,
    YoutubeSearchedForOutlined,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/actions/fetchComments';
import { fetchUserInfo } from '../redux/actions/fetchUserInfo';
import { loading } from './Home/Welcome';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: 500,
        width: '100%',
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

const CardOfComment = ({ kid_id }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let [comments, setComments] = useState({});
    useEffect(() => {
        if (kid_id) {
            dispatch(fetchComments(kid_id)).then((res) => {
                setComments(res.data);
            });
        }
    }, [kid_id]);

    const redirectToUsersPage = (story) => {
        dispatch(fetchUserInfo(story.by));
    };

    if (!comments) {
        return (
            <div style={loading}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Card className={`${classes.root} ${classes.cardSpacing}`}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {comments?.url?.split('/')[2]}
                    </Typography>
                    <Typography variant="subtitle2" component="h6">
                        <a
                            href={comments?.url}
                            className={classes.titleLinkDecoration}
                        >
                            {comments?.text}
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
                        {comments?.score} points by{' '}
                        <Link to={'/user?id=' + comments?.by}>
                            {' '}
                            <span onClick={() => redirectToUsersPage(comments)}>
                                {' '}
                                {comments?.by}
                            </span>
                        </Link>{' '}
                        {/* <br /> {hours} hours ago */}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};
{
    /* <CardActions>
                    <Button size="small">
                        {storyData?.kids?.length ? storyData.kids.length : 0}{' '}
                        comments
                    </Button>
                </CardActions> */
}

export default CardOfComment;
