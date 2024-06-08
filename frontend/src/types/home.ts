import { Book } from "./bookTypes";

export interface BookCardComponent extends React.FC<Book> {
    Loading: React.FC;
  }
  