import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FollowersPage, HomePage, SelectedUsersPage, UserPage } from "../page";
import { ROUTES } from "../utils";
import { Navbar } from "../components";
import { Footer } from "../components/Footer";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start w-screen h-screen bg-gray-800">
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={`${ROUTES.USER}/:userName`} element={<UserPage />} />
          <Route path={`${ROUTES.USERSLIST}/:id`} element={<SelectedUsersPage />} />
          <Route path={ROUTES.FOLLOWERSLIST} element={<FollowersPage />} />
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  );
};
