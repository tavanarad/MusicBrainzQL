import logo from '../../assets/logo.svg';
import {Container, makeStyles, Paper, InputBase, InputAdornment, Select, MenuItem, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BootstrapInput from '../../shared/components/bootstrap_input';
import {QUERY_TYPE} from './constants'
import {useState} from 'react';


const useStyles = makeStyles((theme) => ({
  logoContainer: {
  textAlign: "center",
  marginTop: 50,
  },
  logo: {
    width: 256,
  },
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
  }
})
);

function HomePage() {
  const classes = useStyles();
  const [ query, setQuery ] = useState('');
  const [ queryType, setQueryType ] = useState(QUERY_TYPE.ARTIST);

  const handleQueryTypeChange = e => setQueryType(e.target.value);
  const handleQueryChange = e => setQuery(e.target.value);

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (query && query !== '') {
      console.log(query, queryType);
    }
  }


  return (
    <Container maxWidth="sm">
      <div id='logoContainer' className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="MusicBrainz QL logo"/>
      </div>
        <Paper
          component="form"
          id='searchBox'
          className={classes.searchBox}
          variant="outlined"
        >
          <InputBase
            id="query"
            className={classes.searchField}
            placeholder="Search Artist"
            inputProps={{ 'aria-label': 'search artist' }}
            defaultValue={query}
            onChange={handleQueryChange}
            onKeyPress={onKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            }
          />
          <Divider orientation="vertical" flexItem />
          <Select
            id="queryType"
            className={classes.selectField}
            value={queryType}
            input={<BootstrapInput />}
            onChange={handleQueryTypeChange}
            >
              <MenuItem value={QUERY_TYPE.ARTIST}>Artist</MenuItem>
              <MenuItem value={QUERY_TYPE.GENRE}>Genre</MenuItem>
          </Select>
        </Paper>
    </Container>
    );
}

export default HomePage;
