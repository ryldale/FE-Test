import { routerType } from "../types/router_types";
import Favorites from "../../modules/Favorites/pages/page";
import Sports from "../../modules/Sports/pages/page";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Sports />,
    title: "Sports",
  },
  {
    path: "favorites",
    element: <Favorites />,
    title: "Favorites",
  },
];

export default pagesData;
