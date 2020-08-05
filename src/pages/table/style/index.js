import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  cellGrade: {
    width: 144,
    position: "static",
    "& .MuiInputBase-input": {
      width: 32,
      textAlign: "center",
      margin: "auto",
      borderRadius: "100%",
    },
  },
  grade1: {
    "& .MuiInputBase-input": {
      backgroundColor: "#ffb9ae",
    },
  },
  grade2: {
    "& .MuiInputBase-input": {
      backgroundColor: "#FFECBA",
    },
  },
  grade3: {
    "& .MuiInputBase-input": {
      backgroundColor: "#E6F8B3",
    },
  },
  grade4: {
    "& .MuiInputBase-input": {
      backgroundColor: "#BFE7FF ",
    },
  },
  grade5: {
    "& .MuiInputBase-input": {
      backgroundColor: "#f0bfff",
    },
  },
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  paperInfoSquad: {
    // height: theme.spacing(11),
  },
  //Aqui foi eu que fiz
  typographyBold: {
    fontWeight: "bold",
  },
  gridInfoSquad: {
    height: theme.spacing(11),
  },
  radio: {
    "& .Mui-checked": {
      backgroundColor: "#b11f24",
    },
  },
}));

export default useStyles;
