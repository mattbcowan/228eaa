import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import UserImage from "./UserImage";
import Attachments from "./Attachments";
import Bubble from "./Bubble";

const useStyles = makeStyles({
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    margin: "5px 0",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    margin: "5px 0",
  },
  singleImageBubble: {
    marginTop: "-6px",
    background: "#F4F6FA",
    borderRadius: "0 0 0 10px",
    width: "200px",
  },
});

const SenderBubble = (props) => {
  const { date, bubble, singleImageBubble } = useStyles();
  const { time, text, attachments, user } = props;

  if (attachments && attachments.length > 1) {
    return (
      <Grid container direction="column" alignItems="flex-end">
        <Bubble bubbleClass={bubble}>{text}</Bubble>
        <Attachments
          attachments={attachments}
          borderRadius="20px 20px 0 20px"
        />
        <Typography className={date}>{time}</Typography>
        <UserImage user={user} />
      </Grid>
    );
  } else if (attachments && attachments.length === 1) {
    return (
      <Grid container direction="column" alignItems="flex-end">
        <Typography className={date}>{time}</Typography>
        <Attachments attachments={attachments} borderRadius="10px 10px 0 0" />
        <Bubble bubbleClass={singleImageBubble}>{text}</Bubble>
        <UserImage user={user} />
      </Grid>
    );
  } else {
    return (
      <Grid container direction="column" alignItems="flex-end">
        <Typography className={date}>{time}</Typography>
        <Bubble bubbleClass={bubble}>{text}</Bubble>
        <UserImage user={user} />
      </Grid>
    );
  }
};

export default SenderBubble;
