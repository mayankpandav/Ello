import { styled, alpha, Theme } from "@mui/material/styles";
import {
  AppBar,
  Dialog,
  DialogTitle,
  Drawer,
  InputBase,
  ListItem,
  Paper,
  TextField,
} from "@mui/material";

const drawerWidth = 240;

export const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "100%",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
   
  },
}));

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const SideBarDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "openMenu",
})(({ theme, open }: any) => ({
  width: drawerWidth,
  flexShrink: 0,
  position: "relative",
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));

export const MainPanel = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ them?: Theme; open: boolean; isMobile?: boolean }>(
  ({ theme, open, isMobile }: any) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: isMobile ? "0px" : open ? drawerWidth : "65px",

    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

export const AppHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ theme?: Theme; open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

  justifyContent: "center",
  boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
}));

export const SideBarItem = styled(ListItem)<{ theme?: Theme }>(({ theme }) => ({
  "& .active-menu svg": {
    color: theme.palette.primary.main,
  },
  "& .Mui-selected .MuiListItemText-root": {
    color: theme.palette.primary.main,
  },
}));

export const BottomTabContainer = styled(Paper)<{ theme?: Theme }>(
  ({ theme }) => ({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    "& .MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected ": {
      color: theme.palette.secondary.main,
    },
    "& .MuiButtonBase-root.MuiBottomNavigationAction-root": {
      color: theme.palette.primary.main,
      minWidth: "0px",
    },
  })
);

export const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);
export const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
    background: white;
    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`
);
export const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
    background: white;
    padding: ${theme.spacing(3)}
`
);
