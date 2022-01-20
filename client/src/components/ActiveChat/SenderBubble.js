import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Image from "./Image";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    margin: "5px 0",
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: (props) => props.borderRadius,
    margin: "5px 0",
    width: (props) => props.width,
  },
  attachmentsContainer: {
    display: "flex",
  },
});

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;

  if (attachments !== null && attachments.length > 1) {
    return (
      <Box className={classes.root}>
        <Box className={classes.bubble} borderRadius="10px 10px 0 10px">
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        <Box className={classes.attachmentsContainer}>
          {attachments !== null &&
            attachments.map((image) => (
              <Image src={image} borderRadius="20px 20px 0 20px" />
            ))}
        </Box>
        <Typography className={classes.date}>{time}</Typography>
      </Box>
    );
  } else if (attachments.length === 1) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.attachmentsContainer}>
          <Image
            src={attachments[0]}
            borderRadius="10px 10px 0 0"
            marginBottom="-6px"
          />
        </Box>
        <Box className={classes.bubble} borderRadius="0 0 0 10px" width="200px">
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  }
};

export default SenderBubble;
