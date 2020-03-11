import React from 'react';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import PostForm from "./PostForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"><h1>HOME</h1></Route>
          <Route exact path="/new"><PostForm /></Route>
          <Route exact path="/:id">blog post</Route>
          {/* <Route> <Redirect to="/" /></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
