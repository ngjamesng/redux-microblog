import axios from "axios";
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POSTS,
  GET_POST_DETAILS,
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
    payload: { postId, newData }
  }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  }
}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    payload: { posts }
  }
}

function getPostDetails(postDetails) {
  return {
    type: GET_POST_DETAILS,
    payload: { postDetails }
  }
}



export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/"

export class MicroblogAPI {
  static getPosts() {
    return async function (dispatch) {
      let res = await axios.get(`${BASE_URL}api/posts`);
      dispatch(getPosts(res.data));
    }
  }

  static getPostDetails(postId) {
    return async function (dispatch) {
      let res = await axios.get(`${BASE_URL}api/posts/${postId}`);
      dispatch(getPostDetails(res.data));
    }
  }

  static createPost(newPost) {
    //new post should come in as {title:"", descrption:"", body:""}
    return async function (dispatch) {
      let res = await axios.post(`${BASE_URL}api/posts`, newPost)
      dispatch(addPost(res.data));
    }
  }

  static editPost(id, newData){
    return async function (dispatch){
      let res = await axios.put(`${BASE_URL}api/posts/${id}`, newData)
      dispatch(editPost(res.data));
    }
  }
}
