import { v4 as uuid } from 'uuid';
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";
const INITIAL_STATE = {
  posts: {
    firstid: {
      title: "test",
      description: "testdesc",
      body: "testbody",
      comments: []
    },
    secondid: {
      title: "test2",
      description: "testdesc",
      body: "testbody",
      comments: []
    },
    thirdid: {
      title: "test3",
      description: "testdesc",
      body: "testbody",
      comments: []
    },
  }
}

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state, posts:
        {
          ...state.posts,
          [uuid()]: { ...action.payload.newData, comments: [] }
        }
      }
    case EDIT_POST:
      return {
        ...state, posts: {
          ...state.posts,
          [action.payload.id]: action.payload.newData
        }
      };
    case DELETE_POST:
      // // spreading id, ...newPosts will make newPosts not have the extracted property.
      // const { [id], ...newPosts } = prevPosts;
      // //therefpre, newposts will not have the property based on the ID. 
      // return newPosts;
      let newPosts = { ...state.posts };
      delete newPosts[action.payload.id];
      return {
        ...state, posts: newPosts
      };
    case ADD_COMMENT:
      return;
    case DELETE_COMMENT:
      return;
    default:
      console.warn("no changes made!!!!!");
      return state;
  }
}

export default rootReducer;