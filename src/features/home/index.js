import logo from '../../assets/logo.svg';
import {Container, makeStyles, Paper, InputBase, InputAdornment, Select, MenuItem, Divider} from '@material-ui/core';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import SearchForm from '../../shared/components/search_form';
import {QUERY_TYPE} from '../../shared/components/constants';


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

  return (
    <Container maxWidth="sm">
      <div id='logoContainer' className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="MusicBrainz QL logo"/>
      </div>
      <SearchForm />
    </Container>
    );
}

export default HomePage;
