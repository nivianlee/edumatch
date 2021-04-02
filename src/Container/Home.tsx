import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import {
  addUser,
  deleteUser,
  addSelectedUser,
  clearSelectedUser,
  clearUser,
} from "../redux/users/actions";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import keyfeatures from "../data/keyfeatures.json";
import KeyFeatures from "../Component/KeyFeatures";
import Radio from "@material-ui/core/Radio";
import TextInput from "../Component/TextInput";
import Checkbox from "@material-ui/core/Checkbox";
import Footer from "../Component/Footer";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  addUser,
  deleteUser,
  addSelectedUser,
  clearSelectedUser,
  clearUser,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    marginTop: 0,
    color: "#166FFD",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconText: {
    background: "#166FFD",
    width: 100,
  },
  home1: {
    width: "100%",
  },
}));

const defaultProps = {
  width: 100,
  border: 1,
  borderRadius: "borderRadius",
};

const Home = (props: Props) => {
  const classes = useStyles();
  const [isError, setIsError] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    department: "",
    subject: "",
    name: "",
    contactEmail: "",
    message: "",
  });

  const handleTextInputChange = (event: any) => {
    setFeedbackForm({
      ...feedbackForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogout = () => {
    props.clearUser();
  };

  const topBarButtons = () => {
    if (Object.keys(props.user.user).length !== 0) {
      return (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="body1">Welcome back!</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              to="/login"
              component={Link}
            >
              Log In
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              to="/signup"
              component={Link}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Grid container direction="row" spacing={4} justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Typography className={classes.homeTitle}>EduMatch</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            {topBarButtons()}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={11} lg={11}>
        <Grid container direction="row">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container direction="row" alignItems="center" spacing={4}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <img
                  className={classes.home1}
                  src="/home1.png"
                  alt="Architecture"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Box {...defaultProps}>Lorem Ipsum</Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">Key Features</Typography>
                  </Grid>
                  {keyfeatures.data.map((data: any, index: number) => (
                    <KeyFeatures
                      key={index}
                      index={index}
                      title={data.title}
                      description={data.description}
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={11} lg={11}>
        <Grid container direction="row">
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  We will be glad to hear from you!
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Phone
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">+65 6544-3030</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  E-mail
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">info@example.com</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Address
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">3 Shenton Way</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Singapore, 068805</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="body1">Department:</Typography>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" checked={true} />}
                      label="Support"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" />}
                      label="Sales"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextInput
                  type="string"
                  placeholder="Subject"
                  isError={isError}
                  name="subject"
                  autoFocus={false}
                  multiline={false}
                  rows={0}
                  helperText=""
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextInput
                  type="string"
                  placeholder="Name"
                  isError={isError}
                  name="name"
                  autoFocus={false}
                  multiline={false}
                  rows={0}
                  helperText=""
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextInput
                  type="string"
                  placeholder="name@email.com"
                  isError={isError}
                  name="contactEmail"
                  autoFocus={false}
                  multiline={false}
                  rows={0}
                  helperText=""
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextInput
                  type="string"
                  placeholder="Message..."
                  isError={isError}
                  name="message"
                  autoFocus={false}
                  multiline={true}
                  rows={2}
                  helperText=""
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container direction="row" justify="flex-start">
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Button variant="contained" fullWidth disabled>
                      Choose file
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7} lg={7}>
                    <TextInput
                      type="string"
                      placeholder="No file choosen"
                      isError={isError}
                      name="message"
                      autoFocus={false}
                      multiline={false}
                      rows={0}
                      helperText=""
                      onChange={handleTextInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Button variant="contained" fullWidth>
                      Browse
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox checked={false} name="checkedA" />}
                      label="I agree to terms and conditions"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
