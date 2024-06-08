import React from "react";
import {
  Avatar,
  Link,
  Box,
  Divider,
  lighten,
  List,
  ListItem,
  ListItemAvatar,
  Theme,
  Typography,
} from "@mui/material";
import { FindInPageTwoTone, ChevronRightTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { routes } from "../../../constant";
import { Book } from "../../../types";

export interface SearchFieldItemI extends Book {
  handleClose: () => void;
}

export const SearchFieldItem: React.FC<SearchFieldItemI> = ({
  title,
  coverPhotoURL,
  author,
  handleClose,
}) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Divider sx={{ my: 1 }} />
      <List disablePadding>
        <ListItem
          onClick={() => {
            navigate(`${routes?.home}?search=${title}`);
            handleClose();
          }}
          button
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: (theme: Theme) => theme.palette.secondary.main,
              }}
              src={coverPhotoURL}
              alt={title}
            >
              <FindInPageTwoTone />
            </Avatar>
          </ListItemAvatar>

          <Box flex='1'>
            <Box display='flex' justifyContent='space-between'>
              <Link
                href='#'
                underline='hover'
                sx={{ fontWeight: "bold" }}
                variant='body2'
              >
                {title}
              </Link>
            </Box>
            <Typography
              component='span'
              variant='body2'
              sx={{
                color: (theme: Theme) =>
                  lighten(theme.palette.primary.main, 0.5),
              }}
            >
              {author}
            </Typography>
          </Box>
          <ChevronRightTwoTone />
        </ListItem>
      </List>
    </React.Fragment>
  );
};
