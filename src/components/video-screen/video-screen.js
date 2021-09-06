// Note: VideoScreen component...!

import React from 'react';
import { makeStyles } from '@material-ui/core';
import Cover from "./images/cover.png";
import PlayIcon1 from "./images/play-icon1.png";
import PlayIcon2 from "./images/play-icon2.png";
import Fade from 'react-reveal/Fade';

import videoPath from './video-assets/noq-video.mp4';
import noqLogoPath from './images/noq-logo.png';

// Note: Handeling Material UI Styling here...!
const useStyles = makeStyles((theme) => ({
    rootContainer: {
        backgroundImage: `url(${Cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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

    images: {
        height: "auto",
        width: "auto",
        objectFit: "contain"
    },

    videoTag: {
        width: '50%',
        height: 'auto',
        objectFit: "contain",
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        borderRadius: 5
    },

    containerOne: {
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(2),
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },

    containerTwo: {
        width: '80%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            alignItems: "center"
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: "center"
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center"
        }
    },

    containerthree: {
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        padding: theme.spacing(2)
    },

    innerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(3)
    },

    containerTwoHeading: {
        fontFamily: "raleway",
        color: "#6f42c1",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    },

    paragraph: {
        fontFamily: "sans-serif",
        color: "#5a5454",
        fontSize: '1.2rem',
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    }
}));

const VideoScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer}>
                {/* container # 01 */}
                <div className={classes.containerOne}>
                    <Fade right>
                        <img
                            alt="Play-Icon-2"
                            src={PlayIcon2}
                            className={classes.images}
                        />
                    </Fade>
                </div>

                {/* container # 02 */}
                <div className={classes.containerTwo}>
                    <Fade left>
                        <video
                            className={classes.videoTag}
                            src={videoPath}
                            poster={noqLogoPath}
                            controls
                        >
                        </video>
                    </Fade>


                    <div className={classes.innerContainer}>
                        <Fade bottom>
                            <h2 className={classes.containerTwoHeading}> Does standing in line and waiting for service bothers you? </h2>
                        </Fade>

                        <Fade bottom>
                            <p className={classes.paragraph}> NOQ lets you avoid physical queues and long hours waiting by getting you in a virtual queue </p>
                        </Fade>
                    </div>
                </div>

                {/* container # 03 */}
                <div className={classes.containerthree}>
                    <Fade left>
                        <img
                            alt="Play-Icon-1"
                            src={PlayIcon1}
                            className={classes.images}
                        />
                    </Fade>
                </div>
            </div>
        </React.Fragment >
    );
}

export default VideoScreen;