// Note: GridScreen component...!

import React from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import Cover from "./images/cover.png";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
import Icon5 from "./images/icon5.png";
import Icon6 from "./images/icon6.png";
import Icon7 from "./images/icon7.png";
import Icon8 from "./images/icon8.png";
import "./grid-screen.css";
import Fade from 'react-reveal/Fade';

// Note: Most probably this data will be coming from an API...!
const data = [
    {
        dataImage: Icon1,
        dataHeading: 'Covid centers',
        dataParagraph: 'Health without compromise! Get your tests and vaccinations done without queuing up.'
    },
    {
        dataImage: Icon2,
        dataHeading: 'Health care',
        dataParagraph: 'Appointments simplified! No need to queue up, track your appointment anytime from anywhere.'
    },
    {
        dataImage: Icon3,
        dataHeading: 'Public facilitation centres',
        dataParagraph: 'Public facilitation centres are no more a hassle! Save time, every time with pre-booked appointments.'
    },
    {
        dataImage: Icon4,
        dataHeading: 'Embassies',
        dataParagraph: 'No wait, no queue, arrive at your designated time slot for on-time facilitation.'
    },
    {
        dataImage: Icon5,
        dataHeading: 'Entertainment',
        dataParagraph: 'Skip the queue, direct entry at your favourite funspots.'
    },
    {
        dataImage: Icon6,
        dataHeading: 'Lifestyle stations',
        dataParagraph: 'Free up the wait time, every time at all your favourite lifestyle stations.'
    },
    {
        dataImage: Icon7,
        dataHeading: 'Launch events',
        dataParagraph: 'Break the physical queue, no odd waiting times, get to your spot when its your turn.'
    },
    {
        dataImage: Icon8,
        dataHeading: 'General services',
        dataParagraph: 'Arrive when its your turn without the fear of loosing it, the App takes the queue spot for you.'
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
        color: "#5a5454",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)

        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
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
            width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%',
        },

        marginTop: theme.spacing(2),
        margin: theme.spacing(1.5),
        borderWidth: 1,
        borderColor: "#e75788",
        borderStyle: "solid",
        textAlign: "center",
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(0)
    },

    cardTitle: {
        color: "white",
        fontSize: 20
    },

    cardFooterText: {
        color: "white",
        fontSize: 15,
        fontWeight: "normal"
    },

    cardImage: {
        objectFit: "contain"
    }
}));

const GridScreen = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootContainer}>
                <Fade bottom>
                    <h1 className={classes.mainHeader}> We partner with service facilities to <br /> save your valuable time </h1>
                </Fade>

                <Fade bottom>
                    <div className={classes.listContainer}>
                        {
                            data.map((item, index) => {
                                return (
                                    <Card className={classes.cardRoot} key={index} id="card-container">
                                        <Fade top>
                                            <img
                                                alt="Icon"
                                                src={item.dataImage}
                                                className={classes.cardImage}
                                            />
                                        </Fade>
                                        <CardContent>
                                            {/* <Fade right> */}
                                            <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                {item.dataHeading}
                                            </Typography>
                                            {/* </Fade> */}

                                            {/* <Fade left> */}
                                            <Typography className={classes.cardFooterText}>
                                                {item.dataParagraph}
                                            </Typography>
                                            {/* </Fade> */}
                                        </CardContent>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </Fade>
            </div>
        </React.Fragment>
    );
}

export default GridScreen;