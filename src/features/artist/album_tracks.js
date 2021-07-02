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
import TrackTile from "./track_tile";

const useStyles = makeStyles(() => ({
  appBar: {
    color: "#000000",
    background: "#ffffff",
    height: 69,
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
      <Paper elevation={3} className={classes.paper}>
        <GridList className={classes.tracksGridList} cols={3} cellHeight={100}>
          {album.recordings.nodes.map((track) => (
            <TrackTile
              key={track.mbid}
              title={track.title}
              rateValue={track.rating.value}
              voteCount={track.rating.voteCount}
            />
          ))}
        </GridList>
      </Paper>
    </>
  );
}

AlbumTracks.propTypes = {
  album: PropTypes.object,
};

export default AlbumTracks;
