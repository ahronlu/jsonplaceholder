import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Loader, Icon } from "semantic-ui-react";
import { getComments } from "../actions/postDetailsActions";
import AddCommentModal from "../components/AddCommentModal";
import Comments from "../components/Comments";

const PostDetailsPage = ({ match }) => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const { userId, postId } = match.params;

  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const { comments, loading } = useSelector((state) => state.postDetails);
  const { users } = useSelector((state) => state.userList);
  const { posts } = useSelector((state) => state.userDetails);

  useEffect(() => {
    users && setUser(users.find((user) => user.id.toString() === userId));
    posts && setPost(posts.find((post) => post.id.toString() === postId));
  }, [users, posts, postId, userId]);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, match, postId]);

  return (
    <>
      {loading ? (
        <Loader active />
      ) : (
        post && (
          <>
            <div className="d-flex justify-between align-center">
              <Link to={`/user/${post.userId}`} title="Back">
                <Icon name="arrow left" size="huge" />
              </Link>
              <h1>{user && user.name}</h1>
              <Icon name="plus" size="huge" style={{ opacity: "0" }} />
            </div>
            {post && (
              <>
                <Segment textAlign="center">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </Segment>
                <div className="d-flex justify-between">
                  <span
                    className="pointer"
                    onClick={() => setShowComments(!showComments)}
                  >
                    {showComments ? "Hide" : "Show"} Comments
                  </span>
                  <span className="pointer" onClick={() => setOpen(true)}>
                    Add Comment
                  </span>
                </div>
                <AddCommentModal
                  postId={postId}
                  open={open}
                  setOpen={setOpen}
                />
                {showComments && <Comments comments={comments} />}
              </>
            )}
          </>
        )
      )}
    </>
  );
};

export default PostDetailsPage;
