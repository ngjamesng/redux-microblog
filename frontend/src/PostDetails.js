import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentList from "./CommentList";
import { useSelector, useDispatch } from "react-redux";
import { editPost, deletePost, MicroblogAPI } from "./actions";


function PostDetails() {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [postDetails, setPostDetails] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const postDetails = useSelector(st => st.postDetails[id])
  
  useEffect(() => {
    dispatch(MicroblogAPI.getPostDetails(id));
    setIsLoading(false);
  }, [dispatch])
  
  if (isLoading) return <h1>...Loading</h1>
  
  console.log({postDetails})
  const { title, description, body, comments } = postDetails;

  if (!title) return <Redirect to="/" />

  const handleDelete = () => {
    dispatch(deletePost(id));
    history.push("/");
  }

  const toggleEdit = () => setIsEditing(isEditing => !isEditing);

  const handleEdit = (formData) => dispatch(editPost(id, formData));

  const cardJSX =
    <Card className="container">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Button onClick={toggleEdit}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>

  const postFormJSX =
    <PostForm
      postInfo={{ title, description, body }}
      handleForm={handleEdit}
      handleCancel={toggleEdit}
    />
    

  return (
    !isEditing
      ? <section>
        {cardJSX}
        <CommentList postId={id} comments={comments} />
      </section>
      : { postFormJSX }
  );
}
export default PostDetails;