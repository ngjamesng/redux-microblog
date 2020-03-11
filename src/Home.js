import React from "react";
import { CardGroup } from "react-bootstrap";
import PostCard from './PostCard';

function Home({ posts }) {

  const postList = [];
  for (let id in posts) {
    const { title, description } = posts[id];
    postList.push(<PostCard 
      key={id} 
      id={id} 
      title={title} 
      description={description}
    />);
  }

  return (
    <CardGroup className="Home container">
      {postList}
    </CardGroup>
  );
}
export default Home;