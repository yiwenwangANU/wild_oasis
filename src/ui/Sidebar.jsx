import Logo from "./Logo";
import MainNav from "./MainNav";
function Sidebar() {
  return (
    <aside className="bg-[#fff] py-[3.2rem] px-10 border-r-[1px] border-gray-100 border-solid row-span-full flex flex-col gap-12">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
