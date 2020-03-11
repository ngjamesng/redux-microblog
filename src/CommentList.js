import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function CommentList({ comments=[], addComment, postId }) {
  const [formData, setFormData] = useState({text: ""});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addComment(postId, formData);
  }

  return (
    <section>
      <h1>CommentList</h1>
      {comments.map(comment =>
        <Card key={comment.id}>
          <Card.Body>
            <Card.Text><Button variant="danger">X</Button>{comment.text}</Card.Text>
          </Card.Body>
        </Card>)}
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Control
            type="text"
            name="text"
            value={formData.text}
            placeholder="New Comment"
            onChange={handleChange}
          />
        </Form.Group>
        <Button>Add</Button>
      </Form>
    </section>

  )
}

export default CommentList;
