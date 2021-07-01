import {Box, Card, CardContent, CardMedia, Typography, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import artistIcon from "../../assets/artist.svg";

const useStyles = makeStyles(() => (
  {
    artistCard: {
      width: 300,
      minWidth: 200,
      maxHeight: '208px !important',
      margin: 5,
    },
    albumImages: {
      height: 118,
      textAlign: 'center',
      background: 'lightgrey',
    },
    artistImage: {
      width: 'auto',
      height: '100%',
    },
  }
));

function ArtistCard({ artist }) {
  const classes = useStyles();
  return (
      <Card className={classes.artistCard}>
        <CardMedia className={classes.albumImages} title="Paella dish">
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
          <Typography gutterBottom variant="h6">
            {artist.node.name}
          </Typography>
        </CardContent>
      </Card>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistCard;

