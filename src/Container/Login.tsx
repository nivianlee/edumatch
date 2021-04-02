import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import {
  addUser,
  deleteUser,
  addSelectedUser,
  clearSelectedUser,
} from "../redux/users/actions";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as ApiManager from "../api/api";
import TextInput from "../Component/TextInput";
import SocialMediaSignIn from "../Component/SocialMediaSignIn";

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
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { width: 450, height: 40 },
  borderColor: "#757575",
  border: 1,
  borderRadius: "borderRadius",
};

const Login = (props: Props) => {
  const classes = useStyles();
  const [isRedirect, setIsRedirect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    ApiManager.login(loginDetails)
      .then((response: any) => {
        ApiManager.loginAuth(response.auth_token).then((response: any) => {
          props.addUser(response);
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  const handleTextInputChange = (event: any) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid container direction="row">
      <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container direction="row" justify="center">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Link to="/">
                  <Typography variant="body1">EduMatch</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="body2" color="secondary">
                          Sign In
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h5">Join our community</Typography>
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
                          autoFocus={true}
                          multiline={false}
                          rows={0}
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput
                          type="password"
                          placeholder="Enter your password"
                          isError={isError}
                          name="password"
                          autoFocus={false}
                          multiline={false}
                          rows={0}
                          onChange={handleTextInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container direction="row">
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleLogin()}
                          fullWidth={true}
                        >
                          Sign In
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography
                          variant="body2"
                          color="secondary"
                          style={{ margin: 12 }}
                        >
                          or continue with
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SocialMediaSignIn />
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
      <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
