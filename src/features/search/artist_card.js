import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";
import artistIcon from "../../assets/artist.svg";
import { shouldFetchMore } from "../../shared/helpers";

const useStyles = makeStyles(() => ({
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
  caption: {
    maxWidth: "50%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  rating: {
    float: "right",
    marginBottom: 5,
  },
}));

function ArtistCard({ artist, endCursor, onClick, onSeen }) {
  const classes = useStyles();
  const handleOnClick = () => onClick(artist.node.mbid);

  return (
    <Card className={classes.artistCard}>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia className={classes.albumImages} title={artist.node.name}>
          <img
            alt={artist.node.name}
            src={
              artist.node.mediaWikiImages.length
                ? artist.node.mediaWikiImages[0].url
                : artistIcon
            }
            className={classes.artistImage}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {artist.node.name}
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
            gutterBottom
          >
            {artist.node.disambiguation}
          </Typography>
          <Typography
            className={classes.rating}
            variant="caption"
            display="inline"
            gutterBottom
          >
            ({artist.node.rating.voteCount || 0})
          </Typography>
          <Rating
            className={classes.rating}
            size="small"
            value={artist.node.rating?.value}
            readOnly
          />
          {shouldFetchMore(endCursor, artist.cursor) && (
            <Waypoint onEnter={() => onSeen(true)} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ArtistCard.propTypes = {
  endCursor: PropTypes.string,
  artist: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onSeen: PropTypes.func,
};

export default ArtistCard;
