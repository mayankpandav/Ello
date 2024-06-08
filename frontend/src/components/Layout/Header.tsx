import { Box, IconButton, Toolbar } from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { AppHeader } from "./style";
import SideBar from "./SideBar";
import { useMenu } from "../../context";
import { useViewport } from "../../hooks";
import { SearchField } from "./SearchField";

export const Header = () => {
  const { isOpen, toggleMenu } = useMenu();
  const { isMobile } = useViewport();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isMobile && <SideBar />}
      <AppHeader open={isOpen} position='fixed'>
        <Toolbar>
          {isMobile ? (
            <Box mr={2} component={"img"} src={"/logo.svg"} alt='logo' />
          ) : (
            <IconButton onClick={toggleMenu}>
              {isOpen ? <ChevronLeft /> : <Menu />}
            </IconButton>
          )}
          <SearchField />
        </Toolbar>
      </AppHeader>
    </Box>
  );
};
