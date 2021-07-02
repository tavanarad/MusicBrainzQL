import { InputBase, withStyles } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#fffff",
      backgroundColor: "#ffffff",
      boxShadow: "255 255 255 0.2rem rgba(0,0,0,.25)",
    },
  },
}))(InputBase);

export default BootstrapInput;
