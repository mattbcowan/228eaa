import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    photoBackground: {
      height: "100vh",
      width: "100%",
      background:
        "url(/assets/bg-img.png), linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "soft-light",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      opacity: "0.85",

      [theme.breakpoints.down("sm")]: {
        height: "30vh",
        justifyContent: "center",
      },
    },
    photoText: {
      color: "#ffffff",
      fontSize: "2em",
      textAlign: "center",
      marginTop: "1em",
      maxWidth: "20ch",
    },
    bubble: {
      marginTop: "40%",
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
    },
  })
);

const LoginFormImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.photoBackground}>
      <img src="/assets/bubble.svg" alt="" className={classes.bubble} />
      <Typography className={classes.photoText}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default LoginFormImage;
