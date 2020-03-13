import { v4 as uuid } from 'uuid';
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POSTS,
  GET_POST_DETAILS,
} from "./actionTypes";


/**
 * 
 * posts = [{id, title, description, body}]
 * postDetails= {
 *  [id]: {
 *        title, 
 *        description, 
 *        body, 
 *        comments: 
 *          [
              {id, text}, ...
            ]
          }, ...
  }
 */
const INITIAL_STATE = {
  posts: [],
  postDetails: {},
}

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts, action.payload.newData
        ]
      }
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.payload.id
          ? action.payload
          : p
        ),
        postDetails: {
          ...state.postDetails,
          [action.payload.id]: 
          {
            //destructure postData to preserve any data not in formData ie comments
            ...state.postDetails[action.payload.id], 
            //action.payload only overrides everything except the comments
            ...action.payload
          }
        }
      };
    case DELETE_POST:
      // // spreading id, ...newPosts will make newPosts not have the extracted property.
      // const { [action.payload.id]: _id, ...newPosts } = state.posts;
      // //therefore, newposts will not have the property based on the ID. 
      const { [action.payload.id]: _id, ...newPostDetails } = state.postDetails;
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== +action.payload.id),
        postDetails: newPostDetails
      };
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
    case GET_POST_DETAILS:
      let { id, ...newDetail } = action.payload.postDetails;
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          [id]: newDetail
        }
      }
    default:
      return state;
  }
}

export default rootReducer;