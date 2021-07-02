import { useQuery } from "@apollo/client";
import {
  Container,
  GridList,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import artistIcon from "../../assets/artist.svg";
import Header from "../../shared/components/header";
import AlbumCardSkeleton from "./album_card_skeleton";
import AlbumCard from "./album_card";
import { preparePhotoList } from "./helpers";
import { MB_LOOKUP_ARTIST } from "./ql_queries";
import Title from "./title";
import TitleSkeleton from "./title_skeleton";

const useStyles = makeStyles((theme) => ({
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
  const { id: mbid } = useParams();
  const { loading, data } = useQuery(MB_LOOKUP_ARTIST, {
    variables: {
      mbid,
    },
  });

  const getArtist = () => data && data.lookup.artist;

  return (
    <>
      <Header />
      <Container className={classes.container}>
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
              [...new Array(3).keys()].map(() => <AlbumCardSkeleton />)}
            {data &&
              getArtist()?.releases?.nodes?.map((album) => (
                <AlbumCard
                  id={album.mbid}
                  title={album.title}
                  photos={preparePhotoList(album)}
                />
              ))}
          </GridList>
        </Paper>
      </Container>
    </>
  );
}

export default ArtistPage;
