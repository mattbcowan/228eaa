import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  imgContainer: {
    borderRadius: (props) => props.borderRadius,
    overflow: "hidden",
    marginLeft: "1em",
  },
  uploadedImage: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  },
});

const Attachments = ({ attachments, ...props }) => {
  const { imgContainer, uploadedImage } = useStyles(props);
  return (
    <Grid container justifyContent="flex-end">
      {attachments.map((image, index) => (
        <Box className={imgContainer} key={index}>
          <img
            className={uploadedImage}
            src={image}
            alt="user uploaded content"
          />
        </Box>
      ))}
    </Grid>
  );
};

export default Attachments;
