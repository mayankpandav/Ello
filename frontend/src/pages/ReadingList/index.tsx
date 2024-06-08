import { Box, Grid, Typography } from "@mui/material";
import { useReadingList } from "../../context";
import { BookCard } from "../../components";
import { Book } from "../../types";

export const ReadingList = () => {
  const { readingList } = useReadingList();

  if (readingList?.length === 0) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={300}
      >
        <Typography variant='h5'>No Reading List Found </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {readingList?.map((book: Book, index: number) => (
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
