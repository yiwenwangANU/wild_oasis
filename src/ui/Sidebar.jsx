import Logo from "./Logo";
import MainNav from "./MainNav";
function Sidebar() {
  return (
    <aside className=" bg-white py-[3.2rem] px-10 border-r border-gray-100 row-span-full flex flex-col gap-12">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
