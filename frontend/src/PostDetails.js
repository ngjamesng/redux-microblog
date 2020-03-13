import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import { MicroblogAPI } from "./actions";


function PostDetails() {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const postDetails = useSelector(st => st.postDetails[id]);

  useEffect(() => {
    !postDetails && dispatch(MicroblogAPI.getPostDetails(id));
  }, [dispatch, postDetails, id])


  if (!postDetails) return <h1>...Loading</h1>

  const { title, description, body, comments, votes } = postDetails;
  // if (!title) return <Redirect to="/" />


  const handleDelete = () => {
    dispatch(MicroblogAPI.deletePost(id));
    history.push("/");
  }

  const toggleEdit = () => setIsEditing(isEditing => !isEditing);

  const handleEdit = (formData) => {
    dispatch(MicroblogAPI.editPost(id, formData));
  }

  const cardJSX =
    <Card className="container">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Button onClick={toggleEdit}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
        <Card.Footer>
          <Card.Text>
          Votes:{votes}
          <Badge variant="danger">-</Badge>
            <Badge variant="success">+</Badge>
          </Card.Text>
        </Card.Footer>
      </Card.Body>
    </Card>

  return (
    !isEditing
      ? <section>
        {cardJSX}
        <CommentList postId={id} comments={comments} />
      </section>
      :
      <PostForm
        postInfo={{ title, description, body }}
        handleForm={handleEdit}
        handleCancel={toggleEdit}
      />
  );
}
export default PostDetails;