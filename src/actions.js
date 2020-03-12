import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

export function addPost(newData) {
  return {
    type: ADD_POST,
    payload: { newData }
  }
}

export function editPost(id, newData) {
  return {
    type: EDIT_POST,
    payload: { id, newData }
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: { id }
  }
}

export function addComment(postId, newData) {
  return {
    type: ADD_COMMENT,
    payload: {postId, newData}
  }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: {postId, commentId}
  }
}

