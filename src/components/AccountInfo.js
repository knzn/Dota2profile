import React from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    display: "flex",
    justifyContent: "center",
  },
  depositContext: {
    flex: 1,
  },
  cardSize: {
    maxWidth: 300,
    maxHeight: 50,
  },
}));

const AccountInfo = (props) => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Avatar src={props.dotaAvatar} className={classes.large} />
      </Box>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Card p={1} className={classes.cardSize}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {props.dotaId}
            </Typography>
          </Card>
          <Card p={1} className={classes.cardSize}>
            <Typography component="h2" variant="h6" color="danger" gutterBottom>
              {props.dotaName}
            </Typography>
          </Card>
          <Box p={1}>
            <h1>{props.dotaMMR}</h1>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AccountInfo;
