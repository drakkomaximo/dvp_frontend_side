import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SelectedUsersPage, UserPage } from "../page";
import { ROUTES } from "../utils";
import { Navbar } from "../components";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start w-screen h-screen bg-gray-800">
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={`${ROUTES.USER}/:userName`} element={<UserPage />} />
          <Route path={`${ROUTES.USERSLIST}/:id`} element={<SelectedUsersPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
