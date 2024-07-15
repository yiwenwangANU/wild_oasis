import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />

      <main className="bg-gray-50 pt-16 px-20 pb-24">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
