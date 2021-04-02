import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const KeyFeatures = (props: any) => {
  const { index, title, description } = props;

  let icon = null;

  switch (title) {
    case "Easy to Customise":
      icon = (
        <>
          <CodeIcon color="primary" />
        </>
      );
      break;
    case "Flexible Software":
      icon = (
        <>
          <DesktopWindowsIcon color="primary" />
        </>
      );
      break;
    case "Best access for all of the resources":
      icon = (
        <>
          <VpnKeyIcon color="primary" />
        </>
      );
      break;
  }

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid
        container
        direction="row"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item xs={1} sm={1} md={1} lg={1}>
          {icon}
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <Grid container direction="column">
            <Grid item xs={10} sm={10} md={8} lg={8}>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={8}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KeyFeatures;
