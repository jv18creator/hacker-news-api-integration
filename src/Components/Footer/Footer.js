import { Box, Container, Input, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footerLink: {
        textDecoration: 'none',
        color: '#FFF',
    },
    inputStyles: {
        [theme.breakpoints.up('md')]: {
            minWidth: '320px',
        },
        color: '#FFF',
    },
    footerBg: {
        background: '#3F51B5',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                p={1}
                className={classes.footerBg}
            >
                <Container maxWidth="lg">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        p={2}
                        alignItems="center"
                    >
                        <Box flexDirection={'row'} display={'flex'}>
                            <Box p={2}>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Guidelines
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        FAQ
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Lists
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        API
                                    </Link>
                                </Box>
                            </Box>
                            <Box p={2}>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Security
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Legal
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Apply to YC
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to="#" className={classes.footerLink}>
                                        Contact
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Input
                                className={classes.inputStyles}
                                placeholder="Search News"
                                autoComplete
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
export default Footer;
