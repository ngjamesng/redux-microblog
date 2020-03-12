import { v4 as uuid } from 'uuid';
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POSTS,
} from "./actionTypes";

const INITIAL_STATE = {
  posts:[]
}

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [uuid()]: {
            ...action.payload.newData, comments: []
          }
        }
      }
    case EDIT_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.id]: action.payload.newData
        }
      };
    case DELETE_POST:
      // spreading id, ...newPosts will make newPosts not have the extracted property.
      const { [action.payload.id]: _id, ...newPosts } = state.posts;
      //therefore, newposts will not have the property based on the ID. 
      return { ...state, posts: newPosts };
    case ADD_COMMENT:
      //LoDash has library for deep copying that can simplify this
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            ...state.posts[action.payload.postId],
            comments: [
              ...state.posts[action.payload.postId].comments,
              { ...action.payload.newData, id: uuid() }
            ]
          }
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            ...state.posts[action.payload.postId],
            comments: [
              ...state.posts[action.payload.postId].comments
                .filter(c => c.id !== action.payload.commentId)
            ]
          }
        }
      };
    case GET_POSTS:
      return { ...state, posts: action.payload.posts }
    default:
      return state;
  }
}

export default rootReducer;