import { ChangeEvent, useState, useEffect, useCallback } from "react";
import { SearchBar, UsersList } from "../components";
import { useUsers } from "../hooks";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { githubUsersListQuery } = useUsers({ username: searchValue });

  const findUsersByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setIsActive(true);
  };

  const activeSearch = useCallback(
    () => {
      searchValue.length > 4 && isActive && githubUsersListQuery.refetch();
      setIsActive(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive, searchValue]
  );

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  /* if(!githubUsersListQuery.data) return <div>...Error</div> */

  return (
    <section className="flex flex-col justify-center items-center bg-gray-800">
      <header className="text-center py-8">
        <h1 className="text-white text-6xl">Github finder app</h1>
        <h2 className="text-white text-3xl py-4">
          find diferrents github users profile and you know about their details
        </h2>
      </header>
      <SearchBar onChange={findUsersByName} value={searchValue} />
      <UsersList
        items={githubUsersListQuery?.data?.data?.items}
        isFetching={githubUsersListQuery.isFetching}
      />
    </section>
  );
};
