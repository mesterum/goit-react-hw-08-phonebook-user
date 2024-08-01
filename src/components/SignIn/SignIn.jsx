import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {NavLink } from "react-router-dom";
import style from './SignIn.module.css'
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/DanielaBadea/goit-react-hw-08-phonebook-user.git">
        GitHub Daniela Badea
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
const dispatch = useDispatch();
// const {user} = useAuth();
const [errorMessage, setErrorMessage] = React.useState("")

const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    console.log("Email-ul sau parola sunt goale.");
    setErrorMessage("Email and password cannot be empty.")
    return;
  }
  /* const isValidEmail = email === user.email;
  const isValidPassword = password === user.password;

  if (!isValidEmail || !isValidPassword) {
    console.log("Email-ul sau parola sunt incorecte.");
    // alert("Email-ul sau parola sunt incorecte.");
    setErrorMessage("The email or password is incorrect.")
    return;
  }

  console.log("Form values:", {
    email: email,
    password: password,
  }); */

  dispatch(
    logIn({
      email: email,
      password: password,
    })
  );

  form.reset();
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={style.btn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/password" variant="body2" className={style.link}>
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to='/register' variant="body2" className={style.link}>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
