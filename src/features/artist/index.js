import { useQuery } from "@apollo/client";
import {
  Container,
  GridList,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import artistIcon from "../../assets/artist.svg";
import ErrorMessage from "../../shared/components/error_message";
import Header from "../../shared/components/header";
import AlbumCard from "./album_card";
import AlbumCardSkeleton from "./album_card_skeleton";
import AlbumTracks from "./album_tracks";
import { preparePhotoList } from "./helpers";
import { MB_LOOKUP_ARTIST } from "./ql_queries";
import Title from "./title";
import TitleSkeleton from "./title_skeleton";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 20,
  },
  paper: {
    display: "flex",
    padding: 10,
  },
  box: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    margin: "10px 8px",
  },
  nameTypography: {
    margin: "0 8px",
  },
  artistInfoBox: {
    display: "flex",
    flexDirection: "column",
  },
  albumTypography: {
    marginTop: 20,
  },
  albumImages: {
    height: 200,
    textAlign: "center",
    background: "lightgrey",
    "& div": {
      width: "auto",
    },
  },
  albumGridList: {
    width: "100%",
    justifyContent: "space-around",
  },
  albumCard: {
    maxWidth: 500,
    minWidth: "300px !important",
    maxHeight: 300,
  },
}));

function ArtistPage() {
  const classes = useStyles();
  const [selectedAlbum, selectAlbum] = useState(null);
  const { id: mbid } = useParams();
  const { loading, error, data } = useQuery(MB_LOOKUP_ARTIST, {
    variables: {
      mbid,
    },
  });

  const getArtist = () => data && data.lookup.artist;
  const handleAlbumOnClick = (album) => () => selectAlbum(album);

  return (
    <>
      <Header />
      <Container className={classes.container}>
        {!selectedAlbum &&
          (error ? (
            <ErrorMessage />
          ) : (
            <>
              <Paper elevation={3} className={classes.paper}>
                {loading && <TitleSkeleton />}
                {data && (
                  <Title
                    title={getArtist()?.name}
                    subtitle={getArtist()?.disambiguation}
                    avatarUri={
                      getArtist()?.mediaWikiImages.length
                        ? getArtist().mediaWikiImages[0].url
                        : artistIcon
                    }
                    rateValue={getArtist()?.rating.value}
                    voteCount={getArtist()?.rating.voteCount}
                  />
                )}
              </Paper>
              <Typography
                className={classes.albumTypography}
                variant="h4"
                gutterBottom
              >
                Albums
              </Typography>
              <Paper elevation={3} className={classes.paper}>
                <GridList
                  className={classes.albumGridList}
                  cols={3}
                  cellHeight={300}
                  spacing={0}
                >
                  {loading &&
                    [...new Array(3).keys()].map((i) => (
                      <AlbumCardSkeleton key={i} />
                    ))}
                  {data &&
                    getArtist()?.releases?.nodes?.map((album) => (
                      <AlbumCard
                        key={album.mbid}
                        id={album.mbid}
                        title={album.title}
                        photos={preparePhotoList(album)}
                        onClick={handleAlbumOnClick(album)}
                      />
                    ))}
                </GridList>
              </Paper>
            </>
          ))}
        {selectedAlbum && (
          <AlbumTracks album={selectedAlbum} onClose={handleAlbumOnClick} />
        )}
      </Container>
    </>
  );
}

export default ArtistPage;
