import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';

function PostDetails({ getPost }) {
  const { id } = useParams();
  const { title, description, body } = getPost(id);

  return (
    <Card className="container">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default PostDetails;