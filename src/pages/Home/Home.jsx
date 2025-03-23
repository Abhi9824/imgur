import React from "react";
import ExploreTags from "../../components/ExploreTags/ExploreTags";
import PostCard from "../../components/PostCard/PostCard";
const Home = () => {
  return (
    <>
      <div style={{ paddingTop: "70px" }}>
        <ExploreTags />
        <PostCard />
      </div>
    </>
  );
};

export default Home;
