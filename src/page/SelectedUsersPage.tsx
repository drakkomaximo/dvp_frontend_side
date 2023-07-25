import { useParams } from "react-router-dom";
import { useUsers } from "../hooks";
import { UsersList } from "../components";
import { useCallback, useEffect } from "react";

export const SelectedUsersPage = () => {
  const { id } = useParams()

  const { dbSelectUsersQuery } = useUsers({ id: id || '' });

  const activeSearch = useCallback(
    () => {
      id && dbSelectUsersQuery.refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  return (
    <section className="flex flex-col items-center bg-gray-800 overflow-x-hidden">
      <header className="text-center py-8">
        <h1 className="text-white text-6xl">Users selected</h1>
        <h2 className="text-white text-3xl py-4">
          List of users saved in db
        </h2>
      </header>
      {/* <SearchBar onChange={findUsersByName} value={searchValue} /> */}
      <UsersList
        items={dbSelectUsersQuery?.data || []}
        isFetching={dbSelectUsersQuery.isFetching}
      />
    </section>
  );
}