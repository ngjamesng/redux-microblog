import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import PostForm from "./PostForm";
import Home from "./Home";
import PostDetails from "./PostDetails";
import { useDispatch } from "react-redux";
import { MicroblogAPI } from "./actions";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(MicroblogAPI.getPosts());
  },[dispatch]);

  const goHome = () => {
    history.push("/");
  }

  const handleAddPost = (data) => dispatch(MicroblogAPI.createPost(data));
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/new"><PostForm handleForm={handleAddPost} handleCancel={goHome} /></Route>
        <Route exact path="/:id"><PostDetails /></Route>
      </Switch>
    </div>
  );
}

export default App;
