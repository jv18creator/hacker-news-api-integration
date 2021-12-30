import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loading } from '../components/Home/Welcome';
import { isEmpty } from 'lodash';
import {
    Box,
    CircularProgress,
    Container,
    CssBaseline,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { fetchUserInfo } from '../redux/actions/fetchUserInfo';

const useStyles = makeStyles({
    containerSpacing: {
        padding: '26px 0 26px 12px',
        display: 'block',
        overflowX: 'hidden',
        height: '70vh',
    },
    infoSpacing: {
        marginLeft: '12px',
    },
});

const UserInfoPage = () => {
    const userInfo = useSelector((state) => state.userReducer.selectedUserInfo);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (isEmpty(userInfo)) {
            const searchQuery = window?.location?.href
                ?.split('/')[3]
                ?.split('=')[1];

            dispatch(fetchUserInfo(searchQuery));
        }
    }, []);

    if (isEmpty(userInfo)) {
        return (
            <div style={loading}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <CssBaseline />
            {/* <Container
                maxWidth="md"
                className={classes.containerSpacing}
            ></Container> */}
            <Grid
                container
                direction="row"
                className={classes.containerSpacing}
                justifyContent="start"
                alignItems="center"
            >
                {userInfo?.id && (
                    <Box>
                        <Box>
                            User:{' '}
                            <span className={classes.infoSpacing}>
                                {' '}
                                {userInfo.id}
                            </span>
                        </Box>
                    </Box>
                )}
                {userInfo?.created && (
                    <>
                        <Box alignItems={'row'}>
                            <Box>
                                Created:{' '}
                                <span className={classes.infoSpacing}>
                                    {' '}
                                    {new Date(userInfo.created).getDate()}
                                </span>
                            </Box>
                        </Box>
                    </>
                )}
                {userInfo?.about && (
                    <Box alignItems={'row'}>
                        <Box>
                            About:{' '}
                            <span className={classes.infoSpacing}>
                                {' '}
                                {userInfo.about}
                            </span>
                        </Box>
                    </Box>
                )}
                {userInfo?.karma && (
                    <Box alignItems={'row'}>
                        <Box>
                            Karma:{' '}
                            <span className={classes.infoSpacing}>
                                {' '}
                                {userInfo.karma}
                            </span>
                        </Box>
                    </Box>
                )}
            </Grid>
        </>
    );
};

export default UserInfoPage;
