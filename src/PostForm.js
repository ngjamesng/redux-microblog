import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function PostForm({ postInfo = INITIAL_STATE, handleForm, handleCancel }) {
  const history = useHistory();
  const [formData, setFormData] = useState(postInfo);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    handleForm(formData);
    history.push('/');
  }

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter a title"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          placeholder="Enter a description"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          name="body"
          value={formData.body}
          rows="3"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  )
}
export default PostForm;