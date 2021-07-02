import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  albumImages: {
    height: 200,
    textAlign: "center",
    background: "lightgrey",
  },
  albumCard: {
    maxWidth: 500,
    minWidth: "300px !important",
    maxHeight: 300,
    margin: 5,
  },
}));

function AlbumCardSkeleton() {
  const classes = useStyles();
  return (
    <Card className={classes.albumCard}>
      <CardMedia className={classes.albumImages}>
        <Skeleton animation="wave" variant="rect" width="300" height="100%" />
      </CardMedia>
      <CardContent>
        <Skeleton width={100} />
      </CardContent>
    </Card>
  );
}

export default AlbumCardSkeleton;
