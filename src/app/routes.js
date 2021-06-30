import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "../features/home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
