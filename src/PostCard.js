import React from "react";
import { Card } from "react-bootstrap";

function PostCard({ id, title, description }) {

  return (
    <Card style={{maxWidth:'500px'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default PostCard;