import { NavLink } from "react-router-dom";
function NavigationLink({ to, text, svg: SvgIcon }) {
  const link_style_base =
    "group flex place-items-center gap-5 font-semibold text-2xl py-5 px-10 transition-all duration-300";
  const link_styles = {
    base: `${link_style_base} text-gray-600 hover:text-gray-800 hover:bg-gray-100 hover:rounded-sm`,
    active: `${link_style_base} text-gray-800 bg-gray-100 rounded-sm`,
  };
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? link_styles.active : link_styles.base
        }
        to={to}
      >
        <SvgIcon className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover:text-[#4f46e5]" />
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

export default NavigationLink;
