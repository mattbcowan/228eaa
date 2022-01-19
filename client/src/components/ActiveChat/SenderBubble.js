import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
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
    fontWeight: "bold"
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    margin: "5px 0",
  },
  singleImageBubble: {
    background: "#F4F6FA",
    borderRadius: "0 0 0 10px",
    width: "200px",
  },
  singleImage: {
    marginBottom: "-6px",
    borderRadius: "10px 10px 0 0",
    overflow: "hidden",
  },
  attachmentsContainer: {
    display: "flex",
  },
  imgContainer: {
    borderRadius: "20px 20px 0 20px",
    overflow: "hidden",
    marginLeft: "1em",
  },
  uploadedImage: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;

  if (attachments !== null && attachments.length > 1) {
    return (
      <Box className={classes.root}>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        <Box className={classes.attachmentsContainer}>
          {attachments !== null &&
            attachments.map((image) => (
              <Box className={classes.imgContainer}>
                <img
                  className={classes.uploadedImage}
                  src={image}
                  alt="user uploaded content"
                />
              </Box>
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
          <Box className={classes.singleImage}>
            <img
              className={classes.uploadedImage}
              src={attachments[0]}
              alt="user uploaded content"
            />
          </Box>
        </Box>
        <Box className={classes.singleImageBubble}>
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
