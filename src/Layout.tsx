import ScrollToHashElement from "./components/ScrollToHashElement";
import SidebarNavigation from "./SidebarNavigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
  <>
      <header></header>
      <div className="flex overflow-hidden max-h-[100vh] w-full">
        <aside>
          <SidebarNavigation />
        </aside>
        <ScrollToHashElement />

        <main className="p-1 md:p-4 overflow-auto w-full relative">
          <div
            onClick={onMenuToggle}
            className="md:hidden fixed z-10 top-4 right-4 cursor-pointer"
          ></div>
          {<Outlet />}
        </main>
      </div>
  </>
  );
}
