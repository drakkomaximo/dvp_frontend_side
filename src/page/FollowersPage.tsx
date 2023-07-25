import { FolowersCharts, FullScreenLoader } from "../components";
import { useUsers } from "../hooks";
import { useCallback, useContext, useEffect } from "react";
import LocalUserContext from "../context/localUser";
import { ROUTES } from "../utils";
import { useNavigate } from "react-router-dom";

export const FollowersPage = () => {
  const navigate = useNavigate();
  const { userSearchedList } = useContext(LocalUserContext);

  const { githubNumberOfFollowersByUsernamesQuery } = useUsers({
    users: userSearchedList,
  });

  const activeSearch = useCallback(
    () => {
      userSearchedList.length > 0 &&
        githubNumberOfFollowersByUsernamesQuery.refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userSearchedList]
  );

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  useEffect(() => {
    if (userSearchedList.length === 0) {
      navigate(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearchedList]);

  if (
    (githubNumberOfFollowersByUsernamesQuery.data || []).filter(
      (user) => user.username === "No name"
    ).length === userSearchedList.length
  )
    return <FullScreenLoader title={"Server error..."} />;

  return (
    <section className="flex flex-col items-center bg-gray-800 overflow-x-hidden h-full">
      <div className="flex justify-center items-center h-[80%] w-[80%] pt-16">
        <FolowersCharts
          followers={githubNumberOfFollowersByUsernamesQuery.data || []}
          isFetching={githubNumberOfFollowersByUsernamesQuery.isFetching}
        />
      </div>
    </section>
  );
};
