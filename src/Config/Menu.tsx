import type { ReactNode } from "react"; 
import Home from "../Pages/Home";
import Onboarding from "../Pages/Onboarding";
import Account from "../Pages/Account";
import Auth from "../Pages/Auth";
import Profile from "../Pages/Profile";

export type MenuItem = {
  path: string;
  name: string;
  element: ReactNode;
  index?: boolean;
};

const Menu: MenuItem[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    index: true,
  },
  {
    path: "/onboarding",
    name: "Onboarding",
    element: <Onboarding />
  },
  {
    path: "/account/:pathname",
    name: "Account",
    element: <Account />
  },
  {
    path: "/auth/:pathname",
    name: "Auth",
    element: <Auth />
  },
  {
    path: "/profile",
    name: "Profile",
    element: <Profile />
  }
];

export default Menu;