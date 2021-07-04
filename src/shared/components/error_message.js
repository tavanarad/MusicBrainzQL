import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    padding: 10,
    justifyContent: "space-around",
    flexDirection: "column",
    placeItems: "center",
    width: '100%'
  },
  icon: {
    color: "#ba000d",
    margin: "16px 8px",
    height: 24,
    width: 24,
  },
  messageArea: {
    display: "flex",
    justifyContent: "center",
    placeItems: "center",
  },
  message: {
    color: "#b2102f",
    margin: "16px 8px",
  },
}));

function ErrorMessage() {
  const classes = useStyles();
  const handleOnClick = () => window.location.reload();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.messageArea}>
        <ErrorIcon className={classes.icon} />
        <Typography className={classes.message} variant="h6" gutterBottom>
          Some thing went wrong
        </Typography>
      </div>
      <Button variant="outlined" color="secondary" onClick={handleOnClick}>
        Retry
      </Button>
    </Paper>
  );
}

export default ErrorMessage;
