import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  imgContainer: {
    borderRadius: (props) => props.borderRadius,
    marginBottom: (props) => props.marginBottom,
    overflow: "hidden",
    marginLeft: "1em",
  },
  uploadedImage: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  },
});

const Image = (props) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.imgContainer}>
      <img
        className={classes.uploadedImage}
        src={props.src}
        alt="user uploaded content"
      />
    </Box>
  );
};

export default Image;
