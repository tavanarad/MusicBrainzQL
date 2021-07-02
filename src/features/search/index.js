import { useLazyQuery } from "@apollo/client";
import {
  Container,
  GridList,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { QUERY_TYPE } from "../../shared/components/constants";
import Header from "../../shared/components/header";
import { useQueryParam } from "../../shared/hooks";
import ArtistCard from "./artist_card";
import ArtistCardSkeleton from "./artist_card_skeleton";
import { MB_SEARCH_ARTIST } from "./ql_queries";

const generateQuery = (query, type) => {
  switch (type) {
    case QUERY_TYPE.ARTIST:
      return `name: "${query}"`;
    case QUERY_TYPE.GENRE:
      return `tag: "${query}"`;
    default:
      return query;
  }
};

const useStyles = makeStyles(() => ({
  resultContainer: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "space-around",
    marginTop: 20,
  },
  gridList: {
    height: "100%",
    width: "100vw",
    justifyContent: "space-around",
  },
  artistCard: {
    width: 300,
    minWidth: 200,
    maxHeight: "208px !important",
    margin: 5,
  },
  albumImages: {
    height: 118,
    textAlign: "center",
    background: "lightgrey",
  },
  artistImage: {
    width: "auto",
    height: "100%",
  },
}));

function SearchPage() {
  const classes = useStyles();
  const queryParameters = useQueryParam();
  const history = useHistory();

  const theme = useTheme();
  const mediaQueryMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const [search, { loading, data }] = useLazyQuery(MB_SEARCH_ARTIST);
  const navigateToArtist = (id) => history.push(`/artist/${id}`);
  const searchQuery = () =>
    search({
      variables: {
        query: generateQuery(
          queryParameters.get("query"),
          queryParameters.get("type")
        ),
      },
    });

  useEffect(() => {
    if (queryParameters.get("query")) {
      searchQuery();
    } else {
      return history.push("/");
    }
  }, [queryParameters.get("query"), queryParameters.get("type")]);

  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.resultContainer}>
        <GridList
          cellHeight={208}
          className={classes.gridList}
          spacing={0}
          cols={mediaQueryMatch ? 5 : 2}
        >
          {loading &&
            [...new Array(50).keys()].map((i) => <ArtistCardSkeleton  key={i}/>)}
          {data &&
            data.search.artists.edges.map((artist, i) => (
              <ArtistCard key={i} artist={artist} onClick={navigateToArtist} />
            ))}
        </GridList>
      </Container>
    </>
  );
}

export default SearchPage;
