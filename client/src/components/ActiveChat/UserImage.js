import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
});

const UserImage = ({ user }) => {
  const classes = useStyles();
  return (
    <Avatar
      alt={user.username}
      src={user.photoUrl}
      className={classes.avatar}
    ></Avatar>
  );
};

export default UserImage;
