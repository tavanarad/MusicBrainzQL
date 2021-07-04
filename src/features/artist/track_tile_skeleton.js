import { makeStyles } from "@material-ui/core";
import AudioTrackIcon from "@material-ui/icons/Audiotrack";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  tile: {
    background: "lightgrey",
    width: 200,
    height: 200,
    minHeight: 50,
    minWidth: 50,
    margin: 4,
  },
  subtitle: {
    height: 68,
    width: 200,
    background: "rgba(0, 0, 0, 0.5)",
    marginTop: -70,
    "& span": {
      marginLeft: 16,
      marginRight: 16,
    },
  },
  icon: {
    width: "100%",
    height: "100%",
    color: "rgba(0,0,0, 0.50)",
  },
}));

function TrackTileSkeleton({ title, rateValue, voteCount }) {
  const classes = useStyles();
  return (
    <div className={classes.tile}>
      <AudioTrackIcon className={classes.icon} />
      <div className={classes.subtitle}>
        <Skeleton width={75} />
        <Skeleton width={80} height={50} />
      </div>
    </div>
  );
}

export default TrackTileSkeleton;
