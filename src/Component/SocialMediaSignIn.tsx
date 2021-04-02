import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    height: "1.5rem",
    marginLeft: 16,
    marginTop: 8,
  },
  iconRoot: {
    textAlign: "center",
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { height: 40 },
  borderColor: "#757575",
  border: 1,
  borderRadius: "borderRadius",
};

const SocialMediaSignIn = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box {...defaultProps}>
          <Grid container direction="row" spacing={1} justify="flex-start">
            <Grid item>
              <FacebookIcon
                style={{
                  marginLeft: 16,
                  marginTop: 8,
                  color: "#4267B2",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="div"
                color="secondary"
                style={{ margin: 8 }}
              >
                Sign in with Facebook
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box {...defaultProps}>
          <Grid container direction="row" spacing={1} justify="flex-start">
            <Grid item>
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="/google-logo.png"
                  alt="Login with Google"
                />
              </Icon>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="div"
                color="secondary"
                style={{ margin: 8 }}
              >
                Sign in with Google
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SocialMediaSignIn;
