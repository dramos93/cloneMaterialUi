import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  canvas: {
    height: theme.spacing(100), //Relativo: Altura da tela - papers
    width: theme.spacing(225),
    overflowY: "auto",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 2px #FF6A12",
      marginLeft: theme.spacing(50),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#FF6A12",
      outline: "1px solid slategrey",
      borderRadius: "15px",
    },
  },
  menu: {
    maxWidth: theme.spacing(50),
    height: "100%",
    backgroundColor: "#484848",
    zIndex: 9,
    position: "sticky",
    left: 0,
  },
  info: {
    height: "100%",
    backgroundColor: "#b11f24",
  },
  userInfo: {
    height: "100%",
    width: "auto",
    backgroundColor: "yellow",
    border: "1px solid",
  },
  user: {
    backgroundColor: "white",
    width: theme.spacing(17.5),
    height: theme.spacing(21.25),
    position: "sticky",
    border: "1px solid #BBC2CC",
    top: 0,
  },
  grade: {
    width: theme.spacing(17.5),
    height: theme.spacing(7.5),
    backgroundColor: "white",
    border: "1px solid #BBC2CC",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  legend: {
    width: "100%",
    height: theme.spacing(15),
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    border: "1px solid #BBC2CC",
  },
  competence: {
    width: "100%",
    height: theme.spacing(6.25),
    backgroundColor: "white",
    position: "sticky",
    top: theme.spacing(15),
    border: "1px solid #BBC2CC",
  },
  noob: {
    
  }
}));
export default useStyles;
