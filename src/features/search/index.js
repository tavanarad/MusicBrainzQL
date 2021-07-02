import { useLazyQuery } from "@apollo/client";
import {
  Container,
  GridList,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import { useEffect, useState } from "react";
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
    padding: 0,
  },
  gridList: {
    height: "80vh",
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
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [search, { loading, data, fetchMore }] = useLazyQuery(
    MB_SEARCH_ARTIST,
    { errorPolicy: "ignore" }
  );

  const navigateToArtist = (id) => history.push(`/artist/${id}`);
  const searchQuery = (shouldFetchMore) => {
    const variables = {
      query: generateQuery(
        queryParameters.get("query"),
        queryParameters.get("type")
      ),
    };
    if (!shouldFetchMore) {
      search({
        variables,
      });
    } else if (data.search.artists.pageInfo.hasNextPage) {
      setIsFetchingMore(true);
      fetchMore({
        variables: {
          ...variables,
          endCursor: data.search.artists.pageInfo.endCursor,
        },
      });
    }
  };

  useEffect(() => {
    if (queryParameters.get("query")) {
      searchQuery();
    } else {
      return history.push("/");
    }
  }, [queryParameters.get("query"), queryParameters.get("type")]);

  useEffect(() => {
    setIsFetchingMore(false);
  }, [data]);

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
            [...new Array(50).keys()].map((i) => (
              <ArtistCardSkeleton key={i} />
            ))}
          {data &&
            data.search.artists.edges.map(
              (artist, i) =>
              // There is a null value in the response of the query it happens always at record 162.
              // TODO: I need to investigate more to find the reason in the BE code.
                artist.node && (
                  <ArtistCard
                    key={i}
                    artist={artist}
                    endCursor={data.search.artists.pageInfo.endCursor}
                    onClick={navigateToArtist}
                    onSeen={searchQuery}
                  />
                )
            )}
          {isFetchingMore &&
            [...new Array(5).keys()].map((i) => <ArtistCardSkeleton key={i} />)}
        </GridList>
      </Container>
    </>
  );
}

export default SearchPage;
