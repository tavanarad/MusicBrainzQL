import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../features/home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
