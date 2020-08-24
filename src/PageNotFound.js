import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  errorHolder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  root: {
    maxWidth: 650,
    minWidth: 320,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    boxShadow: 'none',
  },
  content: {
    pointerEvents: 'none',
  },
  media: {
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    fontSize: '100px',
  },
  button: {
    color: 'orange',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.errorHolder}>
      <Card className={classes.root}>
        <CardActionArea className={classes.content}>
          <CardMedia
            className={classes.media}
            children={
              <ErrorOutlineOutlinedIcon
                color="error"
                className={classes.errorIcon}
              />
            }
          />
          <ThemeProvider theme={theme}>
            <CardContent>
              <Typography variant="h4">
                Our team is working on getting this Flick on Flickhub.
              </Typography>
              <Typography variant="h5">Stay tuned!</Typography>
            </CardContent>
          </ThemeProvider>
        </CardActionArea>
        <CardActions>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              className={classes.button}
              startIcon={<ArrowBackIcon />}
              size="small"
              color="primary"
            >
              Go Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
