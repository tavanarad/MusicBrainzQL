import { Container, makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import SearchForm from "../../shared/components/search_form";

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
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div id="logoContainer" className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="MusicBrainz QL logo" />
      </div>
      <SearchForm />
    </Container>
  );
}

export default HomePage;
