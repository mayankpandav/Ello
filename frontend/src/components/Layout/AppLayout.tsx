import { Box, Container } from "@mui/material";
import { Header } from "./Header";
import { HeaderI } from "../../types";
import { MainPanel } from "./style";
import { useMenu } from "../../context";
import { useViewport } from "../../hooks";
import { Tab } from "./Tab";

export const AppLayout: React.FC<HeaderI> = ({ children }) => {
  const { isOpen } = useMenu();
  const { isMobile } = useViewport();
  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <MainPanel isMobile={isMobile} open={isOpen}>
        <Container>
          <Box padding={2} mt={10} mb={isMobile? 10:0}>{children}</Box>
        </Container>
      </MainPanel>
      {isMobile && <Tab />}
    </Box>
  );
};
