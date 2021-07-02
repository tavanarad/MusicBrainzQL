import { GridListTile, GridListTileBar, makeStyles } from "@material-ui/core";
import AudioTrackIcon from "@material-ui/icons/Audiotrack";
import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  tile: {
    background: "lightgrey",
    width: 200,
    height: 200,
    minHeight: 50,
    minWidth: 50,
    margin: 4,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
}));
function TrackTile({ title, rateValue, voteCount }) {
  const classes = useStyles();
  return (
    <GridListTile className={classes.tile}>
      <AudioTrackIcon className={classes.icon} />
      <GridListTileBar
        title={title}
        subtitle={
          <>
            <Rating value={rateValue} size="small" precision={0.5} readOnly />
            {voteCount && `(${voteCount})`}
          </>
        }
      />
    </GridListTile>
  );
}

TrackTile.propTypes = {
  title: PropTypes.string,
  rateValue: PropTypes.number,
  voteCount: PropTypes.number,
};

export default TrackTile;
