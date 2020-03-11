import { 
    ADD_POST, 
    GET_POST,
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
    }
  }
}

function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type){
    case ADD_POST:
      return;
    case GET_POST:
      return;
    case EDIT_POST:
      return;
    case DELETE_POST:
      return;
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