import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentList from "./CommentList";


function PostDetails({ getPost, deletePost, editPost, addComment }) {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  
  const { id } = useParams();
  if (!getPost(id)) {
    return <Redirect to="/" />
  }
  
  const { title, description, body } = getPost(id);
  
  
  const handleDelete = () => {
    deletePost(id);
    history.push("/");
  }
  
  const toggleEdit = () => setIsEditing(isEditing => !isEditing);
  
  const handleEdit = (formData) => {
    editPost(id, formData);
  }
  


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
        <CommentList addComment={addComment} postId={id}/>
      </section>
      : <PostForm postInfo={{ title, description, body }} handleForm={handleEdit} handleCancel={toggleEdit} />
  );
}
export default PostDetails;