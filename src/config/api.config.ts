export const getApiConfig = () => ({
  API_ENDPOINT: import.meta.env.VITE_DB_URL_PROD || import.meta.env.VITE_DB_URL_DEV,
});
