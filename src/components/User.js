import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const User = ({ user }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          {user.email}
          <br />
          {user.phone.split("x")[0]}
          <br />
          {user.website}
        </Card.Meta>
        <Card.Description>
          {user.company.name}
          <br />
          {user.company.catchPhrase}
          <br />
          {user.company.bs}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button fluid as={Link} to={`/user/${user.id}`}>
          Details
        </Button>
      </Card.Content>
    </Card>
  );
};

export default User;
