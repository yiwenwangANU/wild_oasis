import { HiOutlineHome } from "react-icons/hi";
import NavigationLink from "./NavigationLink";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <NavigationLink to="/dashboard" text="Home" svg={HiOutlineHome} />
        <NavigationLink
          to="/bookings"
          text="Bookings"
          svg={HiOutlineCalendarDays}
        />
        <NavigationLink to="/cabins" text="Cabins" svg={HiOutlineHomeModern} />
        <NavigationLink to="/users" text="Users" svg={HiOutlineUsers} />
        <NavigationLink
          to="/settings"
          text="Settings"
          svg={HiOutlineCog6Tooth}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
