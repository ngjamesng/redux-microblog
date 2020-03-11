import {
  ADD_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

export function addPost() {
  return {
    type: ADD_POST
  }
}

export function getPost() {
  return {
    type: GET_POST
  }
}

export function editPost() {
  return {
    type: EDIT_POST
  }
}

export function deletePost() {
  return {
    type: DELETE_POST
  }
}

export function addComment() {
  return {
    type: ADD_COMMENT
  }
}

export function deleteComment() {
  return {
    type: DELETE_COMMENT
  }
}

