import React from "react";
import { Card, Badge } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function PostCard({ id, title, description, votes }) {

  return (
    <Card style={{ maxWidth: '500px' }}>
      <Card.Body>
        <NavLink to={`/${id}`}>
          <Card.Title>{title}</Card.Title>
        </ NavLink>
        <Card.Text>{description}</Card.Text>
        <Card.Footer>
          <Card.Text>
          Votes:{votes}
          <Badge variant="danger">-</Badge>
            <Badge variant="success">+</Badge>
          </Card.Text>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default PostCard;