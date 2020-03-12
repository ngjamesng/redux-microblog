import React, { useState } from "react";
import { Form, Button, Card, Badge } from "react-bootstrap";
import { addComment, deleteComment } from './actions';
import { useDispatch} from 'react-redux';

function CommentList({ comments, postId }) {
  const INITIAL_STATE = { text: "" }
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addComment(postId, formData));
    setFormData(INITIAL_STATE);
  }

  const handleDelete = (commentId) => {
    dispatch(deleteComment(postId, commentId));
  }

  const cardJSX =
    comments.map(comment =>
      <Card key={comment.id}>
        <Card.Body>
          <Card.Text>
            <Badge onClick={() => handleDelete(comment.id)} variant="danger">X</Badge>{comment.text}
          </Card.Text>
        </Card.Body>
      </Card>);

  const formJSX = <Form onSubmit={handleSubmit}>
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

  return (
    <section>
      <h1>CommentList</h1>
      {cardJSX}
      {formJSX}
    </section>
  )
}

export default CommentList;
