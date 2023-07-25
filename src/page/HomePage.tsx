import { ChangeEvent, useState, useEffect, useCallback } from "react";
import { SearchBar, UsersList } from "../components";
import { useUsers } from "../hooks";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { githubUsersListQuery } = useUsers({ username: searchValue });

  const findUsersByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "doublevpartners") {
      setSearchValue("");
    } else {
      setSearchValue(value);
    }
    setIsActive(true);
  };

  const activeSearch = useCallback(
    () => {
      searchValue.length >= 4 &&
        searchValue !== "doublevpartners" &&
        isActive &&
        githubUsersListQuery.refetch();
      setIsActive(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive, searchValue]
  );

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  return (
    <section className="flex flex-col items-center bg-gray-800 overflow-x-hidden h-full">
      <header className="text-center py-8">
        <h1 className="text-white text-6xl">Github Finder App</h1>
        <h2 className="text-white text-3xl py-4">
          Find different GitHub users' profiles and get to know about their
          details.
        </h2>
      </header>
      <SearchBar onChange={findUsersByName} value={searchValue} />
      {searchValue.length >= 4 && (
        <UsersList
          items={githubUsersListQuery?.data || []}
          isFetching={githubUsersListQuery.isFetching}
        />
      )}
    </section>
  );
};
