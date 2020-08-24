import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import flickhub from '../assets/images/logo3.jpg';
import MobileFlickhub from './MobileFlickHub/MobileFlickhub';
import About from './../pages/About/About';
import MobileFilter from './MobileFilter';
import MobileFeedback from './MobileFeedback';
import SearchResult from './../pages/SearchResult/SearchResult';
import MobileSpinner from './MobileSpinner';
//import { Info } from "../Routers";
import PageNotFound from '../PageNotFound';
import Faq from './../pages/Faq/Faq';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import Typography from '@material-ui/core/Typography';

import FilterResult from './../pages/FilterResult/FilterResult';
import Movie from './../pages/Movie/Movie';
import Footer from './../components/Footer/Footer';
import MobileGoBack from './MobileGoBack/MobileGoBack';

export const ulRouter = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '0',
  position: 'fixed',
  tansition: 'all 0.3s ease',
  padding: '10px 40px',
};

export const SearchMobile = (props) => {
  const [respObj, setRespObj] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  // Link to server for making requests
  React.useEffect(() => {
    fetch(`https://flickhub.in/submit2/${props.match.params.searchString}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mv_name: props.match.params.searchString }),
    })
      .then((response) => response.json())
      // .then(response => console.log("Response mobile: ",response))
      .then((response) => {
        setRespObj(response);
        response.data.length === 0 ? setNotFound(true) : setNotFound(false);
      })
      .catch((error) => console.log('error', error));
  }, [props.match.params.searchString]);

  return (
    <div>
      {!notFound ? (
        respObj ? (
          <SearchResult
            respObj={respObj.data}
            similar={respObj.similar}
            mobileCard={true}
            searchFor={props.match.params.searchString}
          />
        ) : (
          <MobileSpinner />
        )
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

const MobileRouters = (props) => {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    text: {
      color: '#6c757d',
      fontWeight: 'bolder !important',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
      justifyContent: 'flex-start',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
            color="transparent"
          >
            <Toolbar>
              <IconButton className={classes.title}>
                <Link to="/">
                  <img src={flickhub} height="30" width="30" alt="" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
                style={{ outline: 'none' }}
              >
                <MenuIcon style={{ color: 'white' }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="temporary"
            onEscapeKeyDown={handleDrawerClose}
            onBackdropClick={handleDrawerClose}
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                onClick={handleDrawerClose}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemIcon
                  style={{
                    color: `${getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--primary')}`,
                  }}
                >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.text}>Home</Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/filter"
                onClick={handleDrawerClose}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemIcon
                  style={{
                    color: `${getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--primary')}`,
                  }}
                >
                  <TuneIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.text}>
                    Filtered Search
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/faq"
                onClick={handleDrawerClose}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemIcon
                  style={{
                    color: `${getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--primary')}`,
                  }}
                >
                  <LiveHelpOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.text}>FAQs</Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/about"
                onClick={handleDrawerClose}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemIcon
                  style={{
                    color: `${getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--primary')}`,
                  }}
                >
                  <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.text}>About</Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/feedback"
                onClick={handleDrawerClose}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemIcon
                  style={{
                    color: `${getComputedStyle(
                      document.documentElement
                    ).getPropertyValue('--primary')}`,
                  }}
                >
                  <FeedbackOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.text}>Feedback</Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </div>
        <MobileGoBack />
        <Switch>
          <Route
            path={`/search/:searchString`}
            // exact
            component={SearchMobile}
          />
          {/* <Route path="/title/:id" component={Info} /> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/filter">
            <MobileFilter />
          </Route>
          <Route path="/feedback">
            <MobileFeedback />
          </Route>
          <Route path="/filterResult" component={FilterResult} />
          <Route path="/title/:id" component={Movie} />
          <Route path="/">
            <MobileFlickhub />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default MobileRouters;
