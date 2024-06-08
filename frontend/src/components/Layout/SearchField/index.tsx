import React, {
  forwardRef,
  Ref,
  useState,
  ReactElement,
  ChangeEvent,
} from "react";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Typography,
  DialogContent,
  Slide,
  CircularProgress,
} from "@mui/material";
import { Search, SearchTwoTone } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import { useLocation, useNavigate } from "react-router-dom";

import {
  DialogTitleWrapper,
  DialogWrapper,
  SearchContainer,
  SearchIconWrapper,
  SearchInputWrapper,
  StyledInputBase,
} from "../style";
import { useSearchBook } from "../../../context";
import { Book } from "../../../types";
import { routes } from "../../../constant";
import { SearchFieldItem } from "./SearchItem";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export const SearchField = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const { data, loading, search, setSearch } = useSearchBook();
  const [open, setOpen] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const books = data?.books || [];

  return (
    <React.Fragment>
      <SearchContainer onClick={handleClickOpen}>
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
        <StyledInputBase
          fullWidth
          readOnly
          placeholder='Search…'
          value={params.get("search") || ""}
          inputProps={{ "aria-label": "search" }}
        />
      </SearchContainer>

      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='md'
        fullWidth
        scroll='paper'
        onClose={handleClose}
      >
        <DialogTitleWrapper>
          <SearchInputWrapper
            value={search}
            autoFocus={true}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchTwoTone />
                </InputAdornment>
              ),
            }}
            placeholder='Search terms here...'
            fullWidth
            label='Search'
          />
        </DialogTitleWrapper>
        <Divider />
        {loading ? (
          <Box
            justifyContent={"center"}
            mt={10}
            mb={10}
            alignItems={"center"}
            display={"flex"}
          >
            <CircularProgress />
          </Box>
        ) : books?.length > 0 ? (
          <DialogContent>
            <Box
              sx={{ pt: 0, pb: 1 }}
              display='flex'
              justifyContent='space-between'
            >
              <Typography variant='body2' component='span'>
                Search results for{" "}
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant='body1'
                  component='span'
                >
                  {search ? search : "Global"}
                </Typography>
              </Typography>
            </Box>
            {books?.map((item: Book, key: number) => {
              return (
                <SearchFieldItem
                  key={key}
                  handleClose={handleClose}
                  author={item?.author}
                  title={item?.title}
                  coverPhotoURL={item?.coverPhotoURL}
                />
              );
            })}

            <Divider sx={{ mt: 1, mb: 2 }} />
            <Box sx={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  navigate(`${routes?.home}?search=${search}`);
                  handleClose();
                }}
                color='primary'
              >
                View all search results
              </Button>
            </Box>
          </DialogContent>
        ) : (
          <Box
            justifyContent={"center"}
            mt={10}
            mb={10}
            alignItems={"center"}
            display={"flex"}
          >
            <Typography>No search result found</Typography>
          </Box>
        )}
      </DialogWrapper>
    </React.Fragment>
  );
};
