import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import { editPost, deletePost } from "./actions";


function PostDetails() {
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

  const cardJSX =
    <Card className="container">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Button onClick={toggleEdit}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>

  const postFormJSX =
    <PostForm
      postInfo={{ title, description, body }}
      handleForm={handleEdit}
      handleCancel={toggleEdit}
    />



  return (
    !isEditing
      ? <section>
        {cardJSX}
        <CommentList postId={id} comments={comments} />
      </section>
      : {postFormJSX}
  );
}
export default PostDetails;