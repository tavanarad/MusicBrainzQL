import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";

export const useStyles = makeStyles(() => ({
  box: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: "10px 8px",
    width: 96,
    height: 96,
  },
  nameTypography: {
    margin: "0 8px",
  },
  artistInfoBox: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Title({ title, subtitle, avatarUri, rateValue, voteCount }) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Avatar className={classes.avatar} alt={title} src={avatarUri} />
      <Box className={classes.artistInfoBox}>
        <Typography
          className={classes.nameTypography}
          variant="h5"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={classes.nameTypography}
          variant="caption"
          gutterBottom
        >
          {subtitle}
        </Typography>
        <Rating size="large" value={rateValue} precision={0.5} readOnly />
        <Typography
          className={classes.nameTypography}
          display="inline"
          variant="caption"
          gutterBottom
        >
          ({voteCount})
        </Typography>
      </Box>
    </Box>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatar: PropTypes.string,
  rateValue: PropTypes.number,
  voteCount: PropTypes.number,
};

export default Title;
