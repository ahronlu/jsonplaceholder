import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Loader, Message } from "semantic-ui-react";
import { getUsers } from "../actions/userListActions";
import User from "../components/User";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users, loading, error } = useSelector((state) => state.userList);

  return (
    <Card.Group stackable itemsPerRow={5}>
      {loading ? (
        <Loader active />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        users.map((user) => <User key={user.id} user={user} />)
      )}
    </Card.Group>
  );
};

export default HomePage;
