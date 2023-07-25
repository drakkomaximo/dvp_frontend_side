import { useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../hooks";
import { UsersList } from "../components";
import { useCallback, useEffect, useContext } from "react";
import LocalUserContext from "../context/localUser";
import { ROUTES } from "../utils";

export const SelectedUsersPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dbSelectUsersQuery } = useUsers({ id: id || "" });
  const { localAccount } = useContext(LocalUserContext);

  const activeSearch = useCallback(
    () => {
      (id || localAccount) && dbSelectUsersQuery.refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, localAccount]
  );

  useEffect(() => {
    if (localAccount.users.length === 0) {
      navigate(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localAccount]);

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  return (
    <section className="flex flex-col items-center bg-gray-800 overflow-x-hidden h-full">
      <header className="text-center py-8">
        <h1 className="text-white text-6xl">Users selected</h1>
        <h2 className="text-white text-3xl py-4">List of users saved in db</h2>
      </header>
      {/* <SearchBar onChange={findUsersByName} value={searchValue} /> */}
      <UsersList
        items={dbSelectUsersQuery?.data || []}
        isFetching={dbSelectUsersQuery.isFetching}
      />
    </section>
  );
};
