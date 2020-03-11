import React, { useState } from 'react';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import PostForm from "./PostForm";
import Home from "./Home";
import PostDetails from "./PostDetails";
import { v4 as uuid } from 'uuid';

function App() {
  const [posts, setPosts] = useState({firstid:{title:"test", description:"testdesc", body: "testbody"}});

  const addPost = newPost => {
    setPosts(prevPosts => ({
      ...prevPosts, [uuid()]: newPost
    }))
  }

  const getPostbyId = id => {
    return posts[id];
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home posts={posts}/></Route>
          <Route exact path="/new"><PostForm handleForm={addPost}/></Route>
          <Route exact path="/:id"><PostDetails getPost={getPostbyId} /></Route>
          {/* <Route> <Redirect to="/" /></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
