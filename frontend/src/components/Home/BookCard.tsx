import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Book, BookCardComponent } from "../../types";
import { DEFAULT_PLACEHOLDER_IMAGE } from "../../utils";
import { useReadingList } from "../../context";

const BookCardLoading = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}>
        <Skeleton variant='rectangular' sx={{ height: 140 }} />
        <CardContent>
          <Skeleton variant='text' sx={{ fontSize: "1.5rem", width: "80%" }} />
          <Skeleton variant='text' sx={{ width: "60%" }} />
        </CardContent>
        <CardActions>
          <Skeleton variant='rectangular' width={120} height={36} />
        </CardActions>
      </Card>
    </Grid>
  );
};

const BookCard: React.FC<Book> = ({
  author,
  coverPhotoURL,
  title,
  readingLevel,
}) => {
  const { addToReadingList, readingList, removeFromReadingList } =
    useReadingList();

  const isinReading = readingList.some(
    (b) => b.title === title && b.author === author
  );
  const [imgSrc, setImgSrc] = useState(
    coverPhotoURL || DEFAULT_PLACEHOLDER_IMAGE
  );
  const preloadImage = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => setImgSrc(url);
    img.onerror = () => setImgSrc(DEFAULT_PLACEHOLDER_IMAGE);
  };
  useEffect(() => {
    preloadImage(coverPhotoURL);
  }, [coverPhotoURL]);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
        <CardMedia
          sx={{ height: 140, objectFit: "contain" }}
          image={imgSrc}
          title={title || "placeholder"}
        />
        <CardContent>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            }}
            gutterBottom
            variant='body2'
            component='div'
            fontWeight={"700"}
          >
            {title || "-"}
            <Typography
              component={"span"}
              ml={2}
              variant='body2'
              color='text.secondary'
            >
              {readingLevel || "-"}
            </Typography>
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {author || "-"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              if (isinReading) {
                removeFromReadingList(title, author);
              } else {
                addToReadingList({
                  author,
                  coverPhotoURL,
                  title,
                  readingLevel,
                });
              }
            }}
            size='small'
          >
            {isinReading ? "Remove From Reading List" : "Add To Reading List"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const BookCardExtended = BookCard as BookCardComponent;
BookCardExtended.Loading = BookCardLoading;

export { BookCardExtended as BookCard };
