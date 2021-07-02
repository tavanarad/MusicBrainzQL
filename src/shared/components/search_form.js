import {
  Divider,
  InputAdornment,
  InputBase,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BootstrapInput from "../../shared/components/bootstrap_input";
import { QUERY_TYPE } from "./constants";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 50,
  },
  searchField: {
    margin: theme.spacing(1),
    flex: 1,
  },
  selectField: {
    margin: theme.spacing(1),
  },
}));

function SearchForm({
  query: queryParam,
  queryType: queryTypeParam,
  onQueryChange,
  onQueryTypeChange,
  onSubmit,
  className,
}) {
  const classes = useStyles();
  className = className || {};

  const history = useHistory();
  const [query, setQuery] = useState(queryParam || "");
  const [queryType, setQueryType] = useState(
    queryTypeParam || QUERY_TYPE.ARTIST
  );

  const handleQueryTypeChange = (e) => {
    setQueryType(e.target.value);
    onQueryTypeChange && onQueryTypeChange();
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    onQueryChange && onQueryChange();
  };

  onSubmit =
    onSubmit ||
    (() => {
      if (query && query !== "") {
        history.push(`/search?query=${query}&type=${queryType}`);
      }
    });

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  };

  return (
    <Paper
      component="form"
      id="searchBox"
      className={classNames(classes.searchBox, className)}
      variant="outlined"
    >
      <InputBase
        id="query"
        className={classes.searchField}
        placeholder="Search Artist"
        inputProps={{ "aria-label": "search artist" }}
        defaultValue={query || ""}
        onChange={handleQueryChange}
        onKeyPress={onKeyPress}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <Divider orientation="vertical" flexItem />
      <Select
        id="queryType"
        className={classes.selectField}
        value={queryType || QUERY_TYPE.ARTIST}
        input={<BootstrapInput />}
        onChange={handleQueryTypeChange}
      >
        <MenuItem value={QUERY_TYPE.ARTIST}>Artist</MenuItem>
        <MenuItem value={QUERY_TYPE.GENRE}>Genre</MenuItem>
      </Select>
    </Paper>
  );
}

SearchForm.propTypes = {
  className: PropTypes.string,
  query: PropTypes.string,
  queryType: PropTypes.string,
  onQueryChange: PropTypes.func,
  onQueryTypeChange: PropTypes.func,
};

export default SearchForm;
