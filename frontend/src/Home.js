import React from "react";
import { CardGroup } from "react-bootstrap";
import PostCard from './PostCard';
import { useSelector } from "react-redux";

function Home() {
  const posts = useSelector(st => st.posts);

  // const postList = [];

  // for (let id of posts) {
    //   const { title, description } = posts[id];
    //   postList.push(<PostCard 
    //     key={id} 
    //     id={id} 
    //     title={title} 
    //     description={description}
    //   />);
    // }



    return (
      <CardGroup className="Home container">
        {posts.map(p => <PostCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
        />)}
      </CardGroup>
    );
  }

  export default Home;