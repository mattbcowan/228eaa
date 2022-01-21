import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { theme } from "../../themes/theme";

const useStyles = makeStyles({
  text: {
    fontSize: theme.typography.fontSize,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
});

const Bubble = ({ children, bubbleClass }) => {
  const classes = useStyles();
  return (
    <Box className={bubbleClass}>
      <Typography className={classes.text}>{children}</Typography>
    </Box>
  );
};

export default Bubble;
