import { AutoStories, Home } from "@mui/icons-material";
import { routes } from "./routes";

export const sidebarmenu = [
  {
    key: "1",
    title: "Home",
    icon: Home,
    path: routes.home,
  },
  {
    key: "2",
    title: "Reading List",
    icon: AutoStories,
    path: routes.readinglist,
  },
];
