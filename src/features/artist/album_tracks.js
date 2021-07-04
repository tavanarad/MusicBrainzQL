import { useQuery } from "@apollo/client";
import {
  AppBar,
  GridList,
  IconButton,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { PropTypes } from "prop-types";
import ErrorMessage from "../../shared/components/error_message";
import { MB_LOOKUP_RELEASE } from "./ql_queries";
import TrackTile from "./track_tile";
import TrackTileSkeleton from "./track_tile_skeleton";

const useStyles = makeStyles(() => ({
  appBar: {
    color: "#000000",
    background: "#ffffff",
    height: 69,
  },
  paper: {
    display: "flex",
    padding: 10,
  },
  trackTypography: {
    marginTop: 20,
  },
  tracksGridList: {
    width: "100%",
    justifyContent: "space-around",
  },
}));

function AlbumTracks({ album, onClose }) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(MB_LOOKUP_RELEASE, {
    variables: {
      mbid: album.mbid,
    },
  });

  const getTracks = () => data?.lookup?.release?.recordings?.nodes || [];

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose && onClose()}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            className={classes.titleTypography}
            variant="h4"
            gutterBottom
          >
            {album.title} - Tracks
          </Typography>
        </Toolbar>
      </AppBar>
      {error && <ErrorMessage />}
      {!error && (
        <Paper elevation={3} className={classes.paper}>
          <GridList
            className={classes.tracksGridList}
            cols={3}
            cellHeight={100}
          >
            {loading &&
              [...new Array(8).keys()].map((i) => <TrackTileSkeleton key={i + 1} />)}
            {data &&
              getTracks().map((track) => (
                <TrackTile
                  key={track.mbid}
                  title={track.title}
                  rateValue={track.rating.value}
                  voteCount={track.rating.voteCount}
                />
              ))}
          </GridList>
        </Paper>
      )}
    </>
  );
}

AlbumTracks.propTypes = {
  album: PropTypes.object,
};

export default AlbumTracks;
