import { useParams } from "react-router-dom";
import { useUsers } from "../hooks";
import { UsersList } from "../components";
import { useCallback, useEffect } from "react";

export const SelectedUsersPage = () => {
  const { id } = useParams()
  /* const [searchValue, setSearchValue] = useState(""); */
  /* const [isActive, setIsActive] = useState(false); */
  const { dbSelectUsersQuery } = useUsers({ id: id || '' });
/*   const findUsersByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setIsActive(true);
  }; */

  /* const activeSearch = useCallback(
    () => {
      searchValue.length > 4 && isActive && githubUsersListQuery.refetch();
      setIsActive(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive, searchValue]
  ); */

  /* useEffect(() => {
    activeSearch();
  }, [activeSearch]); */

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
    <section className="flex flex-col items-center bg-gray-800 overflow-x-hidden pb-40">
      {/* <header className="text-center py-8">
        <h1 className="text-white text-6xl">Github finder app</h1>
        <h2 className="text-white text-3xl py-4">
          find diferrents github users profile and you know about their details
        </h2>
      </header> */}
      {/* <SearchBar onChange={findUsersByName} value={searchValue} /> */}
      <UsersList
        items={dbSelectUsersQuery?.data || []}
        isFetching={dbSelectUsersQuery.isFetching}
      />
    </section>
  );
}