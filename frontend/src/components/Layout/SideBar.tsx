import {
  Badge,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { SideBarDrawer, SideBarItem } from "./style";
import { useMenu, useReadingList } from "../../context";
import { sidebarmenu } from "../../constant";
import { SidebarmenuI } from "../../types";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { readingList } = useReadingList();

  const { isOpen } = useMenu();
  return (
    <SideBarDrawer variant='permanent' open={isOpen}>
      <Toolbar>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          width={"100%"}
        >
          <img src={"/logo.svg"} alt='logo' />
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {sidebarmenu.map((item: SidebarmenuI, key: number) => {
          const Icon = item?.icon;
          return (
            <Tooltip
              key={key}
              title={isOpen ? "" : item?.title}
              arrow
              placement='right'
            >
              <SideBarItem
                disablePadding
                onClick={() => {
                  navigate(item?.path);
                }}
              >
                <ListItemButton
                  selected={location?.pathname === item?.path}
                  sx={{ pl: "19px" }}
                >
                  <ListItemIcon
                    className={
                      location?.pathname === item?.path
                        ? "active-menu"
                        : "unactive-menu"
                    }
                  >
                    <Badge
                      badgeContent={
                        item?.title === "Reading List" ? readingList?.length : 0
                      }
                      color='primary'
                    >
                      <Icon />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontWeight: 500, fontSize: 15 }}
                    primary={item?.title}
                  />
                </ListItemButton>
              </SideBarItem>
            </Tooltip>
          );
        })}
      </List>
    </SideBarDrawer>
  );
};

export default SideBar;
