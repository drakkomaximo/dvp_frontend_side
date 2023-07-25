import { useParams } from "react-router-dom";
import { useUsers } from "../hooks";
import { useEffect, useCallback } from "react";
import { FullScreenLoader, UserDeatils } from "../components";

export const UserPage = () => {
  const { userName } = useParams();

  const { githubUserQuery } = useUsers({ username: userName || "" });

  const activeSearch = useCallback(
    () => {
      userName && githubUserQuery.refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userName]
  );

  useEffect(() => {
    activeSearch();
  }, [activeSearch]);

  if (!githubUserQuery.data) return <FullScreenLoader title={'Server error...'}  />;

  const { data } = githubUserQuery;

  return githubUserQuery.isFetching || githubUserQuery.isError ? (
    <FullScreenLoader title={'Loading Users...'}  />
  ) : (
    <UserDeatils {...data} />
  );
};
