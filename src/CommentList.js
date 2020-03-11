import React, { useState } from "react";
import { Form, Button, Card, Badge } from "react-bootstrap";

function CommentList({ comments=[], addComment, postId, removeComment }) {
  const INITIAL_STATE = {text: ""}
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addComment(postId, formData.text);
    setFormData(INITIAL_STATE);
  }
  const handleDelete = (commentId) =>{
    removeComment(postId, commentId);
  }

  return (
    <section>
      <h1>CommentList</h1>
      {comments.map(comment =>
        <Card key={comment.id}>
          <Card.Body>
            <Card.Text>
              <Badge onClick={()=>handleDelete(comment.id)} variant="danger">X</Badge>{comment.text}
            </Card.Text>
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
        <Button type="submit">Add</Button>
      </Form>
    </section>

  )
}

export default CommentList;
