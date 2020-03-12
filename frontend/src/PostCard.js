import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function PostCard({ id, title, description }) {

  return (
    <Card style={{ maxWidth: '500px' }}>
      <Card.Body>
        <NavLink to={`/${id}`}>
          <Card.Title>{title}</Card.Title>
        </ NavLink>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default PostCard;