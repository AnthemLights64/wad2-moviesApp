import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import {message} from 'antd';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {signIn, getNewSession, getAccount} from '../../api/tmdb-api'
import { MoviesContext } from '../../contexts/moviesContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ({history}) {
  const context = useContext(MoviesContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const doSignIn = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }

    if (!username || !password) {
      message.warn("Username and password cannot be empty.")
      return;
    }
    signIn(username, password).then((res) => {
      if (res.success) {
        getNewSession(res.request_token).then(sessionId => {
          getAccount(sessionId).then(user => {
            context.maintainUser({...user,sessionId})
            //history.replace('/movies/personal')
            history.go(-1);
          })
        })
      } else {
        message.error(res.status_message)
      }
    })
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={event=>setUserName(event.target.value)}
            className="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event=>setPassword(event.target.value)}
            className="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={doSignIn}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
