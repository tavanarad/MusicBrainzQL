import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";
import SearchForm from "../../shared/components/search_form";
import { useQueryParam } from "../../shared/hooks";

const useStyles = makeStyles(() => ({
  appBar: {
    color: "#ba478f",
    background: "#ffffff",
  },
  logo: {
    width: 48,
    height: 48,
  },
  searchForm: {
    width: "80vw",
    maxWidth: 629,
    height: 47,
    margin: "10px 20px",
  },
}));

function Header({ query, queryType, onSearch }) {
  const classes = useStyles();
  const queryParameters = useQueryParam();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={logo} className={classes.logo} alt="Music Brainz QL" />
          <SearchForm
            query={query || queryParameters.get("query")}
            queryType={queryType || queryParameters.get("type")}
            onSubmit={onSearch}
            className={classes.searchForm}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

Header.propTypes = {
  query: PropTypes.string,
  queryType: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Header;
