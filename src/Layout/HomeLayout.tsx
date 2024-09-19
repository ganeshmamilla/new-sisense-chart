import { useEffect } from "react";
import Content from "../Layout/Content";
import SidebarNavigation from "../SidebarNavigation";

const HomeLayout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SidebarNavigation />
      <div className="" style={{ paddingTop: "20px" }}>
        <Content />
      </div>
    </div>
  );
};

export default HomeLayout;
