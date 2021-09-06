// Note: MainHome component...!

import React from 'react';
import Fade from 'react-reveal/Fade';
import {
    makeStyles,
    useTheme,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    MenuItem,
    Menu,
    useMediaQuery
}
    from '@material-ui/core';

// Note: Importing Material UI icons...!
import NavigationIcon from '@material-ui/icons/Navigation';
import MoreIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import InstagramIcon from '@material-ui/icons/Instagram';

// Note: Importing images from local...!
import NOQ_LOGO from "./images/noq-logo.png";
import leftSideBanner from "./images/Sidebar-banner.png";

// Note: Importing css file...!
import "./style.css";

// Note: Importing reuseabale components...!
import HomeScreen from "../home-screen/home-screen";
import GridScreen from "../grid-screen/grid-screen";
import VideoScreen from "../video-screen/video-screen";
import FeaturesScreen from "../features-screen/features-screen";
import WebWorksScreen from "../web-wroks-screen/web-works-screen";
import DownloadScreen from "../download-screen/download-screen";
import FooterScreen from "../footer-screen/footer-screen";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({

    // Note: Navbar styling start!
    navBar: {
        boxShadow: "none",
        backgroundColor: "#FBFCFE"
    },

    grow: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    noqLogo: {
        height: 30
    },

    getAppBtn: {
        textTransform: "capitalize",
        backgroundColor: "#CD4D79",
        color: "white",
        borderRadius: 30,
        '&:hover': {
            backgroundColor: "#CD4D79"
        }
    },

    linksText: {
        textDecoration: "none",
        color: "white",
        paddingTop: theme.spacing(1.5),
        paddingRight: theme.spacing(3),
        '&:hover': {
            textDecoration: "underline",
            color: "lightblue"
        }
    },

    linksTextForSMDevices: {
        textAlign: "center",
        textDecoration: "none",
        color: "black",
        paddingTop: theme.spacing(1.5),
        paddingRight: theme.spacing(3),
        '&:hover': {
            textDecoration: "underline",
            color: "lightblue"
        }
    },
    // Note: Navbar styling End!

    mainContainer: {
        maxWidth: 1400,
        margin: '0 auto',
        position: "relative"
    },

    navIUcon: {
        position: "fixed",
        right: 15,
        bottom: 10,
        zIndex: 1,
        color: "#CD4D79",
        fontSize: '5em'
    },

    leftSideBannerStyle: {
        position: 'absolute',
        width: "7%",
        height: 'auto',
        objectFit: "contain",
        top: '22vh',
        left: 0
    }
}));

const MainHome = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    // Note: To control the responsiveness of left side banner...!
    const theme = useTheme();
    // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    // Note: Handeling states here...!
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';

    // Note: Navbar for mobile or small devices...!
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem style={{ display: "flex", justifyContent: "center", paddingRight: 0 }}>
                <a
                    href="#"
                    className={classes.linksTextForSMDevices}
                >
                    HOME
                </a>
            </MenuItem>

            <MenuItem style={{ display: "flex", justifyContent: "center", paddingRight: 0 }}>
                <a
                    href="#video-screen"
                    className={classes.linksTextForSMDevices}
                >
                    ABOUT
                </a>
            </MenuItem>

            <MenuItem style={{ display: "flex", justifyContent: "center", paddingRight: 0 }}>
                <a
                    href="#web-works-screen"
                    className={classes.linksTextForSMDevices}
                >
                    HOW NOQ WORK
                </a>
            </MenuItem>

            <MenuItem style={{ display: "flex", justifyContent: "center", paddingRight: 0 }}>
                <a
                    href="#features-screen"
                    className={classes.linksTextForSMDevices}
                >
                    FEATURES
                </a>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="Get App Icon" color="inherit">
                    <GetAppIcon />
                </IconButton>
                <p> Get App </p>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="Share Icon" color="inherit">
                    <ShareIcon />
                </IconButton>
                <p> Share </p>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="Facebook Icon" color="inherit">
                    <FacebookIcon />
                </IconButton>
                <p>
                    <a
                        href="https://www.facebook.com/noqhub/"
                        target="_blank"
                        id="nav-links-mobile-screen"
                    >
                        Facebook
                    </a>
                </p>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="Twitter Icon" color="inherit">
                    <TwitterIcon />
                </IconButton>
                <p>
                    <a
                        href="https://twitter.com/NoqHub"
                        target="_blank"
                        id="nav-links-mobile-screen"
                    >
                        Twitter
                    </a>
                </p>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="Google Icon" color="inherit">
                    <InstagramIcon />
                </IconButton>
                <p>
                    <a
                        href="https://www.instagram.com/noqhub/"
                        target="_blank"
                        id="nav-links-mobile-screen"
                    >
                        Instagram
                    </a>
                </p>
            </MenuItem>

            <MenuItem>
                <IconButton aria-label="LinkedIn Icon" color="inherit">
                    <LinkedInIcon />
                </IconButton>
                <p>
                    <a
                        href="https://www.linkedin.com/company/noqhub"
                        target="_blank"
                        id="nav-links-mobile-screen"
                    >
                        LinkedIn
                    </a>
                </p>
            </MenuItem>
        </Menu>
    );

    // Note: Function to scrolling to top...!
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <React.Fragment>
            <div className={classes.mainContainer} id="container">
                <IconButton
                    aria-label="Navigation Icon"
                    aria-controls="Navigation Icon"
                    aria-haspopup="true"
                    className={classes.navIUcon}
                    onClick={scrollToTop}
                >
                    <NavigationIcon />
                </IconButton>

                {/* Note: To control left side banner */}
                {
                    (matchesXS)
                        ?
                        (null)
                        :
                        (
                            <Fade left>
                                <img
                                    alt="Left-Side-Banner"
                                    src={leftSideBanner}
                                    className={classes.leftSideBannerStyle}
                                />
                            </Fade>
                        )
                }

                {/* Note: Navigation bar start */}
                <div className={classes.grow}>
                    <AppBar position="static" className={classes.navBar}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <img
                                    alt="Google-Plus"
                                    src={NOQ_LOGO}
                                    className={classes.noqLogo}
                                />
                            </IconButton>

                            <div className={classes.grow} />

                            <div className={classes.sectionDesktop}>
                                <a
                                    href="#"
                                    className={classes.linksText}
                                >
                                    HOME
                                </a>

                                <a
                                    href="#video-screen"
                                    className={classes.linksText}
                                >
                                    ABOUT
                                </a>

                                <a
                                    href="#web-works-screen"
                                    className={classes.linksText}
                                >
                                    HOW NOQ WORK
                                </a>

                                <a
                                    href="#features-screen"
                                    className={classes.linksText}
                                >
                                    FEATURES
                                </a>

                                <Button
                                    variant="contained"
                                    className={classes.getAppBtn}
                                >
                                    Get app
                                </Button>

                                <IconButton aria-label="Share Icon" color="inherit">
                                    <ShareIcon />
                                </IconButton>

                                <a
                                    href="https://www.facebook.com/noqhub/"
                                    target="_blank"
                                    id="nav-links-full-screen"
                                >
                                    <IconButton aria-label="Facebook Icon" color="inherit">
                                        <FacebookIcon />
                                    </IconButton>
                                </a>

                                <a
                                    href="https://twitter.com/NoqHub"
                                    target="_blank"
                                    id="nav-links-full-screen"
                                >
                                    <IconButton aria-label="Twitter Icon" color="inherit">
                                        <TwitterIcon />
                                    </IconButton>
                                </a>

                                <a
                                    href="https://www.instagram.com/noqhub/"
                                    target="_blank"
                                    id="nav-links-full-screen"
                                >
                                    <IconButton aria-label="Instagram Icon" color="inherit">
                                        <InstagramIcon />
                                    </IconButton>
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/noqhub/"
                                    target="_blank"
                                    id="nav-links-full-screen"
                                >
                                    <IconButton aria-label="LinkedIn Icon" color="inherit">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                            </div>

                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                </div>
                {/* Note: Navigation bar end */}

                {/* Note: All other components */}
                <div id="home-screen">
                    <HomeScreen />
                </div>

                <div id="grid-screen">
                    <GridScreen />
                </div>

                <div id="video-screen">
                    <VideoScreen />
                </div>

                <div id="features-screen">
                    <FeaturesScreen />
                </div>

                <div id="web-works-screen">
                    <WebWorksScreen />
                </div>

                <div id="download-screen">
                    <DownloadScreen />
                </div>

                <div id="footer-screen">
                    <FooterScreen />
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainHome;