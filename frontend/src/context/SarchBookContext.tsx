import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useQuery, ApolloError } from "@apollo/client";
import { debounce } from "lodash";

import { GET_BOOKS } from "../graphql/queries";
import { BooksQueryResponse } from "../types";

interface SearchBookContextType {
  search: string | null;
  setSearch: (search: string | null) => void;
  loading: boolean;
  error: ApolloError | undefined;
  data: BooksQueryResponse | undefined;
}

const SearchBookContext = createContext<SearchBookContextType | undefined>(
  undefined
);

export const SearchBookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState<string | null>(null);

  const debouncedSetSearch = debounce((value: string | null) => {
    setDebouncedSearch(value);
  }, 1500);

  useEffect(() => {
    debouncedSetSearch(search);
  }, [search]);

  const { loading, error, data } = useQuery<BooksQueryResponse>(GET_BOOKS, {
    variables: { search: debouncedSearch ? debouncedSearch : "" },
    
  });

  return (
    <SearchBookContext.Provider
      value={{ search, setSearch, loading, error, data }}
    >
      {children}
    </SearchBookContext.Provider>
  );
};

export const useSearchBook = (): SearchBookContextType => {
  const context = useContext(SearchBookContext);
  if (context === undefined) {
    throw new Error("useGlobalSearch must be used within a SearchBookProvider");
  }
  return context;
};
