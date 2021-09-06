// Note: DownloadScreen component...!

import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import GooglePlayStore from "./images/googleplaystore.png";
import AppStore from "./images/appstore.png";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '50vh',
        [theme.breakpoints.up('md')]: {
            height: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto'
        }
    },

    heading: {
        color: "#5a5454",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: theme.spacing(1),
        paddingTop: theme.spacing(2)
    },

    paragraph: {
        color: "#CECECE",
        fontFamily: "sans-serif",
        fontSize: "1rem",
        textAlign: "center",
        padding: theme.spacing(1)
    },

    images: {
        height: "auto",
        width: "100%",
        objectFit: "contain"
    },

    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap"
        },
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap"
        },
    }
}));

const DownloadScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer}>
                <Fade bottom>
                    <h1 className={classes.heading}> Download the app from </h1>
                </Fade>

                <Fade bottom>
                    <p className={classes.paragraph}> Customer review sites for collecting business & product reviews. </p>
                </Fade>

                <div className={classes.btnContainer}>
                    <Button>
                        <img
                            alt="AppStore-Button"
                            src={AppStore}
                            className={classes.images}
                        />
                    </Button>

                    <Button>
                        <img
                            alt="GooglePlayStore-Button"
                            src={GooglePlayStore}
                            className={classes.images}
                        />
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DownloadScreen;