import { useLocation, useNavigate } from "react-router-dom";
import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { SidebarmenuI } from "../../types";
import { sidebarmenu } from "../../constant";
import { BottomTabContainer } from "./style";
import { useReadingList } from "../../context";

export const Tab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { readingList } = useReadingList();

  return (
    <BottomTabContainer elevation={3}>
      <BottomNavigation showLabels>
        {sidebarmenu.map((item: SidebarmenuI, key: number) => {
          const Icon = item?.icon;
          return (
            <BottomNavigationAction
              key={key}
              onClick={() => {
                navigate(item?.path);
              }}
              value={item?.title}
              label={item?.title}
              onChange={() => {}}
              icon={
                <Badge
                  badgeContent={
                    item?.title === "Reading List" ? readingList?.length : 0
                  }
                  color='primary'
                >
                  <Icon />
                </Badge>
              }
              sx={{
                backgroundColor:
                  location?.pathname === item?.path ? "#CFFAFA" : "unset",
              }}
            />
          );
        })}
      </BottomNavigation>
    </BottomTabContainer>
  );
};
