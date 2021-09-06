// Note: HomeScreen component...!

import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

// Note: Importing Material UI components...!
import {
    makeStyles,
    Button,
    Paper,
    Grid
}
    from '@material-ui/core';

import Content_Logo from "./images/Updated_Logo.png";
import AnimatedMobile from "./images/Mobile.gif";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({

    // Main container styling!
    screenContainer: {
        [theme.breakpoints.down('xl')]: {
            height: '100vh'
        },
        [theme.breakpoints.down('lg')]: {
            height: '100vh'
        },
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto'
        },
        backgroundColor: "#FBFCFE",
    },

    paper: {
        textAlign: "center",
        backgroundColor: "transparent",
        height: '85vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
            alignItems: "center"
        },
        [theme.breakpoints.down('xs')]: {
            height: '70vh',
            alignItems: "center"
        },
    },

    paperTwo: {
        textAlign: "center",
        backgroundColor: "transparent",
        padding: theme.spacing(2),
        height: '85vh',
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
            alignItems: "center"
        },
        [theme.breakpoints.down('xs')]: {
            height: '50vh',
            alignItems: "center"
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    gridContainer: {
        marginTop: theme.spacing(1)
    },

    contentLogo: {
        height: "auto",
        width: '50%',
        margin: "0 auto"
    },

    contentBtn: {
        backgroundColor: "#CD4D79",
        borderRadius: 30,
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            width: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            // width: 'auto',
            width: '45%'
        },
        [theme.breakpoints.down('xs')]: {
            // width: 'auto',
            width: '45%'
        }
    },

    contentHeader: {
        fontFamily: "sans-serif",
        color: "#544B4E",
        paddingTop: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    },

    btnContainer: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(4),
            width: '80%'
        }
    },

    phoneImages: {
        objectFit: "contain",
        height: "auto",
        width: '70%',
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },

        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },

        [theme.breakpoints.down('xs')]: {
            width: '80%'
        }
    }
}));

const HomeScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Main container */}
            <div className={classes.screenContainer}>

                {/* Note: Content container start */}
                <div className={classes.gridContainer}>

                    {/* Grid container */}
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Slide top>
                                    <img
                                        alt="Logo"
                                        src={Content_Logo}
                                        className={classes.contentLogo}
                                    />
                                </Slide>

                                <Slide top>
                                    <h1 className={classes.contentHeader}> Skip Queue, <br /> Save Time </h1>
                                </Slide>

                                <p className={classes.btnContainer}>
                                    <Button variant="contained" color="secondary" className={classes.contentBtn}>
                                        DOWNLOAD
                                    </Button>

                                    <Button variant="contained" color="secondary" className={classes.contentBtn} style={{ marginLeft: 20 }}>
                                        EXPLORE
                                    </Button>
                                </p>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paperTwo} elevation={0}>
                                <Fade right>
                                    <img
                                        alt="Animated-Mobile"
                                        src={AnimatedMobile}
                                        className={classes.phoneImages}
                                    />
                                </Fade>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeScreen;