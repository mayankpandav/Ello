import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

import { Book, BooksQueryResponse } from "../../types";
import { GET_BOOKS } from "../../graphql/queries";
import { BookCard } from "../../components";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { loading, error, data } = useQuery<BooksQueryResponse>(GET_BOOKS, {
    variables: { search: params.get("search") || "" },
  });

  const books = data?.books || [];
  if (error) {
    return <Typography>{error?.message}</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {loading
          ? Array.from(new Array(7)).map((_, index) => (
              <BookCard.Loading key={`skeleton-${index}`} />
            ))
          : books.map((book: Book, index: number) => (
              <BookCard
                author={book.author}
                title={book.title}
                coverPhotoURL={book.coverPhotoURL}
                readingLevel={book.readingLevel}
                key={index}
              />
            ))}
      </Grid>
    </Box>
  );
};
