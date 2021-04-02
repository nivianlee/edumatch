import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    marginTop: 0,
    color: "#166FFD",
    fontSize: 20,
    fontWeight: "bold",
  },
}));

const Footer = (props: any) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography className={classes.homeTitle}>EduMatch</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Typography variant="h6">Shop</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">About</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Blog</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Pricing</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={12} md={11} lg={11}>
            <Typography variant="body2">© 2021. All rights reserved</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <FacebookIcon
                  style={{
                    color: "#4267B2",
                  }}
                />
              </Grid>
              <Grid item>
                <TwitterIcon
                  style={{
                    color: "#4267B2",
                  }}
                />
              </Grid>
              <Grid item>
                <InstagramIcon
                  style={{
                    color: "#4267B2",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
