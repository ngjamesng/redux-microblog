import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory } from 'react-router-dom';
import PostForm from "./PostForm";


function PostDetails({ getPost, deletePost, editPost }) {
  const history = useHistory();
  const { id } = useParams();
  const { title, description, body } = getPost(id);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deletePost(id);
    history.push("/");
  }

  const toggleEdit = () => setIsEditing(isEditing=> !isEditing);

  const handleEdit = (formData) => {
    editPost(id, formData);
  }



  return (
    !isEditing
      ? <Card className="container">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{description}</Card.Subtitle>
          <Card.Text>{body}</Card.Text>
          <Button onClick={toggleEdit}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
      : <PostForm postInfo={{ title, description, body }} handleForm={handleEdit} handleCancel={toggleEdit} />
  );
}
export default PostDetails;