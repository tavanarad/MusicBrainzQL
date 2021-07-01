import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function ArtistCardSkeleton({key}) {
  return(
    <Box key={key} width={300} height={200}>
      <Skeleton variant="rect" width="100%" height={118}/>
      <Skeleton variant="text"/>
      <Skeleton variant="text" width="60%"/>
    </Box>
  );
}

ArtistCardSkeleton.propTypes = {
  key: PropTypes.string,
};

export default ArtistCardSkeleton;
