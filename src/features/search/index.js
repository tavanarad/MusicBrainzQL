import Header from "./header";
import {QUERY_TYPE} from "../../shared/components/constants";
import {makeStyles, Container, CircularProgress} from "@material-ui/core";
import {useQueryParam} from "../../shared/hooks";
import {useQuery, useLazyQuery} from "@apollo/client";
import {MB_SEARCH_ARTIST} from "./ql_queries";
import {Redirect, useHistory} from "react-router-dom";
import { useEffect } from "react";

const generateQuery = (query, type) => {
  switch(type){
    case QUERY_TYPE.ARTIST:
      return `name: "${query}"`;
    case QUERY_TYPE.QUERY_TYPE:
      return `tag: "${query}"`;
    default:
      return query;
  }
}

const useStyles = makeStyles(() => (
  {
    resultContainer: {
      marginTop: 20,
      textAlign: 'center',
    }
  }
));

function SearchPage() {
  const classes = useStyles();
  const queryParameters = useQueryParam();
  const history = useHistory();

  const [search, { loading }] = useLazyQuery(MB_SEARCH_ARTIST);

  useEffect(() => {
    if(queryParameters.get('query')) {
      search(
        {
          variables: {
            query: generateQuery(
              queryParameters.get('query'),
              queryParameters.get('type')
            )
          },
        }
      );
    } else {
      return history.push('/');
    }
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.resultContainer}>
        { loading &&
          <CircularProgress />
        }
      </Container>
    </>
  );
}

export default SearchPage;
