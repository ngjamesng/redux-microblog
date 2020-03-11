import React, { useState } from 'react';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import PostForm from "./PostForm";
import Home from "./Home";
import PostDetails from "./PostDetails";
import { v4 as uuid } from 'uuid';

function App() {
  let history = useHistory();
  const [posts, setPosts] = useState({ firstid: { title: "test", description: "testdesc", body: "testbody", comments: [] } });

  const addPost = newPost => {
    setPosts(prevPosts => ({
      ...prevPosts, [uuid()]: { ...newPost, comments: [] }
    }))
  }

  const editPost = (id, newData) => {
    setPosts(prevPosts => ({
      ...prevPosts,
      [id]: newData
    }))
  }

  const getPostbyId = id => {
    return posts[id];
  }

  const deletePost = (id) => {
    setPosts(prevPosts => {
      let newPosts = { ...prevPosts };
      delete newPosts[id];
      return newPosts;

      // // spreading id, ...newPosts will make newPosts not have the extracted property.
      // const { [id], ...newPosts } = prevPosts;
      // //therefpre, newposts will not have the property based on the ID. 
      // return newPosts;

    })
  }

  const goHome = () => {
    history.push("/");
  }

  const addComment = (postId, text) => {
    setPosts(prevPosts => ({
      ...prevPosts, 
      [postId]:
      {
        ...prevPosts[postId],
        comments: [
          ...prevPosts[postId].comments, 
          { id: uuid(), text }
        ]
      }
    }))
  }

  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/"><Home posts={posts} /></Route>
        <Route exact path="/new"><PostForm handleForm={addPost} handleCancel={goHome} /></Route>
        <Route exact path="/:id"><PostDetails
          getPost={getPostbyId}
          deletePost={deletePost}
          editPost={editPost} 
          addComment={addComment}/>
        </Route>
        {/* <Route> <Redirect to="/" /></Route> */}
      </Switch>
    </div>
  );
}

export default App;
