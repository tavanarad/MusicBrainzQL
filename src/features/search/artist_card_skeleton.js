import PropTypes from 'prop-types';
import { Box, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  box: {
    width: 300,
    minWidth: 200,
    maxHeight: "208px !important",
    margin: 5,
  }
}))

function ArtistCardSkeleton() {
  const classes = useStyles();

  return(
    <Box className={classes.box}>
      <Skeleton variant="rect" width="100%" height={118}/>
      <Skeleton variant="text"/>
      <Skeleton variant="text" width="60%"/>
    </Box>
  );
}

export default ArtistCardSkeleton;
