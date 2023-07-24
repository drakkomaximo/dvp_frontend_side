import { useParams } from "react-router-dom";
import { useUsers } from "../hooks";
import { useEffect, useCallback } from "react";
import { FullScreenLoader, UserDeatils } from "../components";

export const UserPage = () => {
  const { userName } = useParams();

  const { githubUserQuery } = useUsers({ username: userName || "hola" });

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

  if (!githubUserQuery.data) return null;

  const { data } = githubUserQuery;

  return githubUserQuery.isFetching ? (
    <FullScreenLoader />
  ) : (
    <UserDeatils {...data} />
  );
};
