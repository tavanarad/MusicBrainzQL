import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { ReactPhotoCollage } from "react-photo-collage";

const useStyles = makeStyles((theme) => ({
  albumImages: {
    height: 200,
    textAlign: "center",
    background: "lightgrey",
  },
  albumCard: {
    maxWidth: 500,
    minWidth: "300px !important",
    width: 350,
    maxHeight: 300,
    margin: 5,
  },
  CardContent: {
    height: "100%",
  },
  titleTypography: {
    maxWidth: "50%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
}));

function AlbumCard({ id, title, photos, onClick }) {
  const classes = useStyles();
  console.log(photos);
  return (
    <Card className={classes.albumCard}>
      <CardMedia className={classes.albumImages}>
        <ReactPhotoCollage
          width="100%"
          height={["150px", "50px"]}
          layout={[1, 4]}
          showNumOfRemainingPhotos
          photos={photos}
        />
      </CardMedia>
      <CardActionArea>
        <CardContent>
          <Typography
            classes={classes.titleTypography}
            variant="h5"
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AlbumCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default AlbumCard;
