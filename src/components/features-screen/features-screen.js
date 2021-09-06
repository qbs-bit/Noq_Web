// Note: FeaturesScreen component...!

import React from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import Cover from "./images/cover.png";
import AlertIcon from "./images/alerts.png";
import EtaIcon from "./images/eta.png";
import OneAppIcon from "./images/oneapp.png";
import OnlineIcon from "./images/online.png";
import QueueIcon from "./images/queue.png";
import SecureIcon from "./images/secure.png";
import "./features-screen.css";
import Fade from 'react-reveal/Fade';

// Note: Most probably this data will be coming from an API...!
const data = [
    {
        dataImage: SecureIcon,
        dataHeading: 'Secure appointment'
    },
    {
        dataImage: QueueIcon,
        dataHeading: 'Queue flexibility'
    },
    {
        dataImage: EtaIcon,
        dataHeading: 'ETA tracking for appointments'
    },
    {
        dataImage: OneAppIcon,
        dataHeading: 'All your appointments in one app'
    },
    {
        dataImage: AlertIcon,
        dataHeading: 'Appointment alerts'
    },
    {
        dataImage: OnlineIcon,
        dataHeading: 'Online turn tracking'
    },
];

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

    mainHeader: {
        fontFamily: "raleway",
        color: "#6f42c1",
        textAlign: "center",
        paddingTop: theme.spacing(5)
    },

    listContainer: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up('md')]: {
            flexWrap: "wrap",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: "center",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: "center",
        },
        marginTop: theme.spacing(2)
    },

    cardRoot: {
        width: '20%',
        [theme.breakpoints.down('md')]: {
            width: '70%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%',
        },
        margin: theme.spacing(5),
        borderWidth: 0.5,
        borderColor: "whitesmoke",
        borderStyle: "solid",
        textAlign: "center",
        borderRadius: '20px'
    },

    cardTitle: {
        fontSize: 22,
        color: "#6f42c1",
        fontFamily: "sans-serif"
    },

    cardImage: {
        marginTop: theme.spacing(3),
        objectFit: "contain",
        height: '20vh',
        width: '40%',
        [theme.breakpoints.down('md')]: {
            width: '50%'
        }
    }
}));

const FeaturesScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer}>
                <Fade bottom>
                    <h2 className={classes.mainHeader}> Key features </h2>
                </Fade>

                <div className={classes.listContainer}>
                    {
                        data.map((item, index) => {
                            return (
                                <Card className={classes.cardRoot} key={index} id="card-root">
                                    <Fade left>
                                        <img
                                            alt="Icon"
                                            src={item.dataImage}
                                            className={classes.cardImage}
                                        />
                                    </Fade>
                                    <CardContent>
                                        <Fade right>
                                            <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                {item.dataHeading}
                                            </Typography>
                                        </Fade>
                                    </CardContent>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeaturesScreen;