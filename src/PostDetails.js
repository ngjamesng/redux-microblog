import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import { editPost, deletePost } from "./actions";


function PostDetails({
  addComment,
  removeComment }) {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  
  const { title, description, body, comments } = useSelector(st => st.posts[id]);
  if (!title) return <Redirect to="/" />




  const handleDelete = () => {
    dispatch(deletePost(id));
    history.push("/");
  }

  const toggleEdit = () => setIsEditing(isEditing => !isEditing);

  const handleEdit = (formData) => dispatch(editPost(id, formData));



  return (
    !isEditing
      ? <section>
        <Card className="container">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{description}</Card.Subtitle>
            <Card.Text>{body}</Card.Text>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
        <CommentList
          addComment={addComment}
          postId={id}
          comments={comments}
          removeComment={removeComment}
        />
      </section>
      : <PostForm postInfo={{ title, description, body }} handleForm={handleEdit} handleCancel={toggleEdit} />
  );
}
export default PostDetails;