import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <Router>
      <Container fluid style={{ padding: 20 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserDetailsPage} />
          <Route path="/user/:userId/:postId" component={PostDetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
