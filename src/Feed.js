import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import FeedMessage from "./FeedMessage";
import Post from "./Post";
import db from "./firebase";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestap", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      {/* Stories */}
      <Stories />
      {/* Send Message */}
      <FeedMessage />
      {/* Posts */}
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
