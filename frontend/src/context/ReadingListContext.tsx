import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Book } from "../types";

interface ReadingListContextType {
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (title: string, author: string) => void;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
);

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within a ReadingListProvider");
  }
  return context;
};

export const ReadingListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  useEffect(() => {
    const storedReadingList = localStorage.getItem("readingList");
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
  }, []);

  const addToReadingList = (book: Book) => {
    if (
      !readingList.some(
        (b) => b.title === book.title && b.author === book.author
      )
    ) {
      const updatedbooks = [...readingList, book];
      setReadingList(updatedbooks);
      localStorage.setItem("readingList", JSON.stringify(updatedbooks));
    } else {
      console.log("Book already exists in reading list");
    }
  };
  const removeFromReadingList = (title: string, author: string) => {
    const updatedbooks = readingList.filter(
      (book) => book.title !== title || book.author !== author
    );
    setReadingList(updatedbooks);
    localStorage.setItem("readingList", JSON.stringify(updatedbooks));
  };

  return (
    <ReadingListContext.Provider
      value={{ readingList, addToReadingList, removeFromReadingList }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
