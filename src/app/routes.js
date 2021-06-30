import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "../features/home";
import SearchPage from "../features/search";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
