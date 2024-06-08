import { IResolvers } from "@graphql-tools/utils";
import { booksData } from "../data/books";
import { Book, BooksArgs } from "./types";

export const resolvers: IResolvers = {
  Query: {
    books: (_parent, args: BooksArgs): Book[] => {
      const { search } = args;
      if (!search) return booksData;
      const lowerCaseSearch = search.toLowerCase();
      return booksData.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerCaseSearch)
      );
    },
  },
};
