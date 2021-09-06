import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Segment, Icon } from "semantic-ui-react";
import { deletePost } from "../actions/userDetailsActions";

const Post = ({ post, userId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deletePost(post.id));
    setLoading(false);
  };

  return (
    <Segment key={post.id} loading={loading}>
      <Icon link name="trash" onClick={handleDelete} />
      {post.title}
      <Link to={`/user/${userId}/${post.id}`} className="floatright">
        <Icon name="chevron right" />
      </Link>
    </Segment>
  );
};

export default Post;
