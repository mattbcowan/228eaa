import React, { useState, useRef } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, uploadFiles } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  hidden: {
    display: "none",
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const fileSelect = useRef(null);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: image ? image : null,
    };
    await postMessage(reqBody);
    setText("");
    setImage(null);
  };

  const handlePhoto = () => {
    if (fileSelect) {
      fileSelect.current.click();
    }
  };

  const handleFiles = (files) => {
    let images = [];
    for (let i = 0; i < files.length; i++) {
      uploadFiles(files[i])
        .then((res) => {
          images.push(res.secure_url);
        })
        .then(() => setImage([...images]));
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handlePhoto}>
                <PhotoLibraryIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <input
        type="file"
        name="file"
        multiple="multiple"
        accept="image/*"
        ref={fileSelect}
        className={classes.hidden}
        onChange={(e) => {
          handleFiles(e.target.files);
        }}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
