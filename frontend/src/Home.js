import React from "react";
import { CardGroup } from "react-bootstrap";
import PostCard from './PostCard';
import { useSelector } from "react-redux";

function Home() {
  const posts = useSelector(st => st.posts);

    return (
      <CardGroup className="Home container">
        {posts.map(p => <PostCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          votes={p.votes}
        />)}
      </CardGroup>
    );
  }

  export default Home;