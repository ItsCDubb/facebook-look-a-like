import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import "./FeedMessage.css";

function FeedMessage() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
  };
  return (
    <div className="feedMessage">
      <div className="feedMessage__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="feedMessage__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="feedMessage__input"
            placeholder={"Image URL (Optional)"}
          />
          <button onClick={handleSubmit} type="Submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="feedMessage__bottom">
        <div className="feedMessage__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="feedMessage__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="feedMessage__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default FeedMessage;
