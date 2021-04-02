import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { addUser } from "../redux/users/actions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextInput from "../Component/TextInput";
import Typography from "@material-ui/core/Typography";
import * as ApiManager from "../api/api";
import Footer from "../Component/Footer";
import SocialMediaSignIn from "../Component/SocialMediaSignIn";

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  addUser,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Login = (props: Props) => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (Object.keys(props.user.user).length !== 0) {
      setIsRedirect(true);
    }
  }, [props.user.user]);

  const handleLogin = () => {
    ApiManager.login(loginDetails).then((response: any) => {
      if (response.status === 400) {
        setErrorMsg(response.data.non_field_errors[0]);
        setIsError(true);
      } else {
        ApiManager.loginAuth(response.auth_token).then((response: any) => {
          setIsError(false);
          if (response.status === 401) {
            setErrorMsg("Invalid token. Kindly contact us at +65 6544-3030.");
          } else {
            props.addUser(response);
          }
        });
      }
    });
  };

  const handleTextInputChange = (event: any) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={4}
    >
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
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="body1" color="error">
                          {errorMsg}
                        </Typography>
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
                          helperText=""
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
                          helperText=""
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
              <Typography variant="body1">
                Privacy Policy and Terms of Use
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={11} lg={11}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
