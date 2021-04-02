import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import {
  addUser,
  deleteUser,
  addSelectedUser,
  clearSelectedUser,
} from "../redux/users/actions";
import { Redirect, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as ApiManager from "../api/api";
import TextInput from "../Component/TextInput";
import Footer from "../Component/Footer";

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  addUser,
  deleteUser,
  addSelectedUser,
  clearSelectedUser,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    marginTop: 0,
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
  },
  signup1: {
    width: "100%",
  },
}));

const Signup = (props: Props) => {
  const classes = useStyles();
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (Object.keys(props.user.user).length !== 0) {
      setIsRedirect(true);
    }
  }, [props.user.user]);

  if (isRedirect) {
    return <Redirect to="/login" />;
  }

  const handleSignup = () => {
    ApiManager.createUser(newUser).then((response: any) => {
      if (response.status === 400) {
        setHelperText(response.data.email[0]);
        setIsError(true);
      } else {
        setIsRedirect(true);
      }
    });
  };

  const handleTextInputChange = (event: any) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={4}
    >
      <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Grid container direction="column" spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Link to="/">
                  <Typography variant="body1">EduMatch</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  to="/login"
                  component={Link}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="body2" color="secondary">
                      Sign up
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h5">Create an account</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justify="space-between"
                    >
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput
                          type="string"
                          placeholder="First Name"
                          isError={false}
                          name="first_name"
                          autoFocus={false}
                          multiline={false}
                          rows={0}
                          helperText=""
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput
                          type="string"
                          placeholder="Last Name"
                          isError={false}
                          name="last_name"
                          autoFocus={false}
                          multiline={false}
                          rows={0}
                          helperText=""
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput
                          type="string"
                          placeholder="name@email.com"
                          isError={isError}
                          name="email"
                          autoFocus={false}
                          multiline={false}
                          rows={0}
                          helperText={helperText}
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput
                          type="password"
                          placeholder="Enter your password"
                          isError={false}
                          name="password"
                          autoFocus={false}
                          multiline={false}
                          rows={0}
                          helperText=""
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => handleSignup()}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container direction="row">
              <Link to="/">
                <Typography variant="body1">Privacy Policy</Typography>
              </Link>
              <Typography variant="body1">and</Typography>
              <Link to="/">
                <Typography variant="body1">Terms of Use</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <img
          className={classes.signup1}
          src="/signup1.png"
          alt="Illustration"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={11} lg={11}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
