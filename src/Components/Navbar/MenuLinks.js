import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    linkColor: {
        color: '#FF6600',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const SideMenuLinks = (props) => {
    const classes = useStyles();

    const closeMenu = () => {
        props.setShowSideMenuLinks((prevState) => !prevState);
    };

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="/newest"
                        color="#BADA55"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        New
                    </Link>
                </Toolbar>

                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="/ask"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Ask
                    </Link>
                </Toolbar>
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="/show"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Show
                    </Link>
                </Toolbar>
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="/jobs"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Jobs
                    </Link>
                </Toolbar>
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="#"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Comments
                    </Link>
                </Toolbar>
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="#"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Past
                    </Link>
                </Toolbar>
                <Toolbar>
                    <Link
                        variant="subtitle1"
                        to="/submit"
                        color="secondary"
                        className={classes.linkColor}
                        onClick={closeMenu}
                    >
                        Submit
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default SideMenuLinks;
