import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = ({ children }) => (
  <main className="bg-gray-50 pt-16 px-20 pb-24 flex flex-col gap-[3.2rem] overflow-auto">
    {children}
  </main>
);

const Container = ({ children }) => (
  <div className="max-w-[120rem] mx-auto my-0 flex flex-col gap-[3.2rem] ">
    {children}
  </div>
);

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr] ">
      <Sidebar />
      <Header />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
