// Note: WebWorksScreen component...!

import React from 'react';
import { makeStyles } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

// Note: Importing images...!
import Cover from "./images/cover.png";
import NOQ_WebGif_3 from "./images/noq-gif-3.gif";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({
    rootContainer: {
        backgroundImage: `url(${Cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        [theme.breakpoints.up('md')]: {
            height: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto'
        },
    },

    heading: {
        color: "#6f42c1",
        fontFamily: "raleway",
        textAlign: "center",
        padding: theme.spacing(3)
    },

    imageContainer: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(2),
            marginBottom: theme.spacing(5)
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2),
            marginBottom: theme.spacing(5)
        },
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(2),
            marginBottom: theme.spacing(5)
        },
    },

    images: {
        objectFit: "contain",
        height: "auto",
        width: '100%',
        maxWidth: 1000
    }
}));

const WebWorksScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer}>
                <Fade bottom>
                    <h1 className={classes.heading}> How NOQ works </h1>
                </Fade>

                {/* Note: Image container */}
                <div className={classes.imageContainer}>
                    <img
                        alt="NOQ-Web-Gif"
                        src={NOQ_WebGif_3}
                        className={classes.images}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default WebWorksScreen;