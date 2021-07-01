import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "../features/home";
import SearchPage from "../features/search";
import ArtistPage from "../features/artist";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id">
          <ArtistPage />
        </Route>
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
