import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useStyles } from "./title";

function TitleSkeleton() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Skeleton
        className={classes.avatar}
        variant="circle"
        width={96}
        height={96}
      />
      <Box className={classes.artistInfoBox}>
        <Skeleton width={100} />
        <Skeleton className={classes.nameTypography} width={50} height={10} />
        <Skeleton
          className={classes.nameTypography}
          variant="rect"
          width={100}
          height={20}
        />
      </Box>
    </Box>
  );
}

export default TitleSkeleton;
