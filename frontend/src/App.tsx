import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import { routes } from "./constant";
import { Home, NotFound, ReadingList } from "./pages";
import {
  MenuProvider,
  ReadingListProvider,
  SearchBookProvider,
} from "./context";

export const App = () => {
  return (
    <SearchBookProvider>
      <ReadingListProvider>
        <MenuProvider>
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.readinglist} element={<ReadingList />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </MenuProvider>
      </ReadingListProvider>
    </SearchBookProvider>
  );
};
