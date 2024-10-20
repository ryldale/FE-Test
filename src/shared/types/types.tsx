import CashierIcon from "../../core/assets/Bottom Navbar/CashierIcon";
import CasinoLiveIcon from "../../core/assets/Bottom Navbar/CasinoLiveIcon";
import InviteIcon from "../../core/assets/Bottom Navbar/InviteIcon";
import SportsIcon from "../../core/assets/Bottom Navbar/SportsIcon";
import StarIcon from "../../core/assets/Bottom Navbar/StarIcon";

export const sharedLinks = [
  {
    name: "Sports",
    icon: <SportsIcon />,
    activeIcon: <SportsIcon fillColor={"#00A6FF"} />,
    path: "/",
  },
  {
    name: "Favorites",
    icon: <StarIcon />,
    activeIcon: <StarIcon fillColor={"#00A6FF"} />,
    path: "/favorites",
  },
  {
    name: "Invite",
    icon: <InviteIcon />,
    activeIcon: <InviteIcon fillColor={"#00A6FF"} />,
    path: "/invite",
  },
  {
    name: "Casino Live",
    icon: <CasinoLiveIcon />,
    activeIcon: <CasinoLiveIcon fillColor={"#00A6FF"} />,
    path: "/casino-live",
  },
  {
    name: "Cashier",
    icon: <CashierIcon />,
    activeIcon: <CashierIcon fillColor={"#00A6FF"} />,
    path: "/cashier",
  },
];
