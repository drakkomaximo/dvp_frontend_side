export enum DB_API_ROUTES {
  DB_VERSION = "/api/v1",
}

export enum DB_API_QUERY_ROUTES {
  SEARCH_USERS_BY_NAME = "/search",
  GET_USER_BY_NAME = "/user",
  GET_SELECTED_USERS_BY_ID = "/selected-users",
}

export enum DB_API_MUTATION_ROUTES {
  SELECT_USER_BY_NAME = "/select",
  DELETE_USER_BY_NAME = "/delete-user",
}
