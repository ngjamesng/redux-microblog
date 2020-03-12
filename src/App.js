import React, { useState } from 'react';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import PostForm from "./PostForm";
import Home from "./Home";
import PostDetails from "./PostDetails";
import { useDispatch } from "react-redux";
import { addPost } from "./actions";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();


  const goHome = () => {
    history.push("/");
  }

  // const addComment = (postId, text) => {
  //   setPosts(prevPosts => ({
  //     ...prevPosts,
  //     [postId]:
  //     {
  //       ...prevPosts[postId],
  //       comments: [
  //         ...prevPosts[postId].comments,
  //         { id: uuid(), text }
  //       ]
  //     }
  //   }))
  // }

  // const removeComment = (postId, commentId) => {
  //   setPosts(prevPosts => ({
  //     ...prevPosts,
  //     [postId]:
  //     {
  //       ...prevPosts[postId],
  //       comments: prevPosts[postId].comments.filter(comment => comment.id !== commentId)
  //     }
  //   }))
  // }

  const handleAddPost = (data) => dispatch(addPost(data));

  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/new"><PostForm handleForm={handleAddPost} handleCancel={goHome} /></Route>
        <Route exact path="/:id"><PostDetails
        // addComment={addComment}
        // removeComment={removeComment}
        />
        </Route>
        {/* <Route> <Redirect to="/" /></Route> */}
      </Switch>
    </div>
  );
}

export default App;
