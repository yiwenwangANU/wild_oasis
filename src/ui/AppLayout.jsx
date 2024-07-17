import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = ({ children }) => (
  <main className="bg-gray-50 pt-16 px-20 pb-24 max-w-[120rem] mx-auto flex flex-col gap-[3.2rem]">
    {children}
  </main>
);

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr] ">
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
