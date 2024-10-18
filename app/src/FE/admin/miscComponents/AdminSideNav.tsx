"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/app/images/admin/nav/xentroNameWlogo.svg";
import OverviewIcon from "../auth/components/Overview/OverviewIcon";
import DataIcon from "../auth/components/Data/DataIcon";
import TaskIcon from "../auth/components/Task/TaskIcon";
import TaskOverviewIcon from "../auth/components/TaskOverview/TaskOverviewIcon";
import MintsIcon from "../auth/components/Mints/MintsIcon";
import { Sidebar } from "lucide-react";
import admincss from "@/app/css/admin.module.css";
import { usePathname } from "next/navigation";

const AdminSideNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSideBarOpened, setSideBarOpenState] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const name = window.location.pathname.split("/");
    setActiveLink(name[3].toLowerCase());
    if (window.innerWidth >= 768) {
      setSideBarOpenState(true);
    }
  }, [pathname]);
  const toggleSideBar = () => {
    const innerPage = document.getElementById("innerAdminPage_id") as HTMLDivElement;

    if (isSideBarOpened) {
      const sidebar = document.getElementById(
        "adminSideBar_id"
      ) as HTMLDivElement;
      sidebar.style.left = "-300px";
      sidebar.style.width = "0px";
      innerPage.style.filter = "blur(0px)"
    } else {
      const sidebar = document.getElementById(
        "adminSideBar_id"
      ) as HTMLDivElement;
      sidebar.style.left = "0px";
      sidebar.style.width = "300px";
      if (window.innerWidth <= 768) {
        
          innerPage.style.filter = "blur(5px)"
        
    }
    }
    setSideBarOpenState((prev) => !prev);
  };
  return (
    <div className="relative">
      <Sidebar
        onClick={toggleSideBar}
        className="absolute z-[10] top-0 cursor-pointer left-full bg-white p-1 rounded-r-lg"
        size={45}
      />
      <aside
        className={
          admincss.sideBar +
          " h-[100vh] border-r border-[#cccccc] absolute md:relative z-[6]  left-[-300px] w-[0] md:left-0 md:w-[300px] pt-8 bg-white text-[#525252] font-semibold"
        }
        id="adminSideBar_id"
      >
        <Image src={logo} alt="xentro" className="block mb-20 mx-auto " />

        <section className="flex justify-end ">
          <div className="w-[90%] space-y-4">
            <Link
              href="/admin/app/overview"
              className={`${
                activeLink == "overview" ? "activeAdminSideNavLink" : ""
              } block border-transparent border-r-[7px] rounded-l-xl pl-6  py-4 `}
            >
              <div className="flex items-center text-lg">
                <OverviewIcon className="mx-2" color="#525252" />
                <p>Overview</p>{" "}
              </div>
            </Link>
            <Link
              href="/admin/app/data"
              className={`${
                activeLink == "data" ? "activeAdminSideNavLink" : ""
              } block border-transparent border-r-[7px] rounded-l-xl pl-6  py-4 `}
            >
              <div className="flex items-center text-lg">
                <DataIcon className="mx-2" color="#525252" />
                <p>Data</p>{" "}
              </div>
            </Link>
            <Link
              href="/admin/app/task"
              className={`${
                activeLink == "task" ? "activeAdminSideNavLink" : ""
              } block border-transparent border-r-[7px] rounded-l-xl pl-6  py-4 `}
            >
              <div className="flex items-center text-lg">
                <TaskIcon className="mx-2" color="#525252" />
                <p>Task</p>{" "}
              </div>
            </Link>
            <Link
              href="/admin/app/task-overview"
              className={`${
                activeLink == "task-overview" ? "activeAdminSideNavLink" : ""
              } block border-transparent border-r-[7px] rounded-l-xl pl-6  py-4 `}
            >
              <div className="flex items-center text-lg">
                <TaskOverviewIcon className="mx-2" color="#525252" />
                <p>Task Overview</p>{" "}
              </div>
            </Link>
            <Link
              href="/admin/app/mints"
              className={`${
                activeLink == "mints" ? "activeAdminSideNavLink" : ""
              } block border-transparent border-r-[7px] rounded-l-xl pl-6  py-4 `}
            >
              <div className="flex items-center text-lg">
                <MintsIcon className="mx-2" color="#525252" />
                <p>Mints</p>{" "}
              </div>
            </Link>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default AdminSideNav;
