import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router_types";
import pagesData from "./pagesData";
import Navbar from "../../shared/components/Navbar";
import NoMobileView from "../components/NoMobileView";
import Carousel from "../../modules/Carousel/pages/page";
import BottomNavbar from "../components/BottomNavbar";
import Notification from "../../modules/Notifications/pages/page";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#8888881A] ">
      <Navbar />
      <main className="flex-grow md:hidden">
        <Carousel />
        <Notification />
        <Routes>{pageRoutes}</Routes>
      </main>
      <BottomNavbar />
      <NoMobileView />
    </div>
  );
};

export default Router;
