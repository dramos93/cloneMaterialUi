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
    zIndex: 99,
    position: "sticky",
    left: 0,
  },
  info: {
    height: "100%",
  },
  userGrade: {
    height: "100%",
    width: "auto",
  },
  user: {
    backgroundColor: "white",
    width: theme.spacing(17.5),
    height: theme.spacing(21.25),
    position: "sticky",
    top: 0,
    zIndex: 9,

  },
  userInfo: {
    border: "1px solid #BBC2CC",
    height: theme.spacing(15),
    padding: `${theme.spacing(2)}px ${theme.spacing(0)}px`,
  },
  userIcon: {
    border: "1px solid #BBC2CC",
    height: theme.spacing(6.25),
    fontSize: 25,
    color: "#ff6a12",
  },
  userImage: {
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    borderRadius: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    margin: "auto",
  },
  grade: {
    width: theme.spacing(17.5),
    height: theme.spacing(7.5),
    backgroundColor: "white",
    border: "1px solid #BBC2CC",
    display: "flex",
    "& :last-child": {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: "#FFECBA",
      textAlign: "center",
      margin: "auto",
      borderRadius: "100%",
      padding: 0,
      fontSize: 15,
    },
  },
  legend: {
    width: "100%",
    height: theme.spacing(15),
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    border: "1px solid #BBC2CC",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  competence: {
    width: "100%",
    height: theme.spacing(6.25),
    backgroundColor: "white",
    position: "sticky",
    top: theme.spacing(15),
    border: "1px solid #BBC2CC",
    color: "#FF6A12",
  },
  textCompetence: {
    fontSize: 18,
    fontWeight: "bold",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  level: {
    marginLeft: theme.spacing(3),
    borderRadius: "100%",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    fontSize: 14,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  levelCompetence: {
    fontSize: 15,
    fontWeight: "bold",
  },
  colorLevel1: {
    backgroundColor: "#FFB9AE",
  },
  colorLevel2: {
    backgroundColor: "#FFECBA",
  },
  colorLevel3: {
    backgroundColor: "#E6F8B3",
  },
  colorLevel4: {
    backgroundColor: "#BFE7FF ",
  },
  colorLevel5: {
    backgroundColor: "#F0BFFF ",
  },
  categories: {
    backgroundColor: "#ffffff",
    border: "1px solid #BBC2CC",
    width: theme.spacing(3.5),
  },
  textCategory: {
    color: "#FF6A12",
    width: 8,
    wordWrap: "break-word",
    whiteSpace: "break-spaces",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subcategories: {
    backgroundColor: "#f8f8f8",
    width: theme.spacing(19),
    border: "1px solid #BBC2CC",
    fontSize: 16,
    fontWeight: "bold",
  },
  skill: {
    backgroundColor: "#F1F1F1",
    width: theme.spacing(27.5),
    border: "1px solid #BBC2CC",
    height: theme.spacing(7.5),
    fontSize: 15,
    fontWeight: "bold",
  },
}));
export default useStyles;
