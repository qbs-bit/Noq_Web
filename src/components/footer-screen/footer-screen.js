// Note: FooterScreen component...!

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import "./footer-screen.css";
import Logo from "./images/noq-logo.png";
import FacebookIcon from "./images/ffooter.png";
import InstagramIcon from "./images/ifooter.png";
import TwitterIcon from "./images/twifooter.png";
import LinkedInIcon from "./images/lfooter.png";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
        height: '40vh',
        [theme.breakpoints.up('md')]: {
            height: 'auto',
            flexWrap: "wrap"
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            flexWrap: "wrap",
            // flexDirection: "row",
            alignItems: "center",
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            flexDirection: "column",
            alignItems: "center",
        },
        paddingBottom: theme.spacing(6),
        paddingTop: theme.spacing(3)
    },

    firstContainer: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    },

    remainingContainers: {
        width: '20%',
        padding: theme.spacing(2.5),
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            width: "auto",
            paddingLeft: theme.spacing(0),
            padding: theme.spacing(2.5),
        },

        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            width: "auto",
            paddingLeft: theme.spacing(0),
            padding: theme.spacing(2.5)
        }
    },

    firstContainerParagraph: {
        color: "white",
        fontSize: "1rem"
    },

    imageContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    images: {
        height: "auto",
        width: "auto",
        objectFit: "contain",
        paddingRight: theme.spacing(1)
    },

    typographyHeader: {
        color: "white"
    },

    typographyText: {
        color: "white",
        fontSize: '1rem'
    }
}));

const FooterScreen = () => {

    // Note: To acess Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer} id="footer-container">

                {/* 1st container */}
                <div className={classes.firstContainer}>
                    <img
                        alt="Logo"
                        src={Logo}
                        className={classes.images}
                    />

                    <p className={classes.firstContainerParagraph}> No more waiting in queues. </p>

                    <p className={classes.imageContainer}>
                        <a
                            href="https://www.facebook.com/noqhub/"
                            target="_blank"
                            id="footer-links"
                        >
                            <img
                                alt="Facebook-Icon"
                                src={FacebookIcon}
                                className={classes.images}
                            />
                        </a>

                        <a
                            href="https://twitter.com/NoqHub"
                            target="_blank"
                            id="footer-links"
                        >
                            <img
                                alt="Twitter-Icon"
                                src={TwitterIcon}
                                className={classes.images}
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/noqhub/"
                            target="_blank"
                            id="footer-links"
                        >
                            <img
                                alt="Instagram-Icon"
                                src={InstagramIcon}
                                className={classes.images}
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/noqhub"
                            target="_blank"
                            id="footer-links"
                        >
                            <img
                                alt="LinkedIn-Icon"
                                src={LinkedInIcon}
                                className={classes.images}
                            />
                        </a>
                    </p>

                    <p className={classes.firstContainerParagraph}> &copy; 2021 design & develop by - QBS Co </p>
                </div>

                {/* 2nd container */}
                <div className={classes.remainingContainers}>
                    <Typography variant="h5" gutterBottom className={classes.typographyHeader}>
                        Links
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        FAQ
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        Privicy policy
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        Terms & conditions
                    </Typography>
                </div>

                {/* 3rd container */}
                <div className={classes.remainingContainers}>
                    <Typography variant="h5" gutterBottom className={classes.typographyHeader}>
                        Contact
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        +92 21 35802386
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        +92 3212664746
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.typographyText}>
                        Info@noqhub.com
                    </Typography>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FooterScreen;