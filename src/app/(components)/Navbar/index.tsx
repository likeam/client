"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className=" flex justify-between items-center w-full mb-7">
      <div className=" flex justify-between items-center gap-5">
        {/* Left Side  */}
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className=" h-8 w-8 " />
        </button>
      </div>
      <div className=" relative">
        <input
          type="search"
          placeholder="Start to search groups & produts"
          className=" pl-10 pr-4 py-2 w-40 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Bell className=" text-gray-500 size={20}" />
        </div>
      </div>
      {/* Right Side  */}
      <div className=" flex justify-between items-center gap-5">
        <div className=" flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode} className="">
              {isDarkMode ? (
                <Sun className=" cursor-pointer text-gray-500 size={24}" />
              ) : (
                <Moon className=" cursor-pointer text-gray-500 size={24}" />
              )}
            </button>
          </div>
          <div className=" hidden md:block relative">
            <Bell className=" cursor-pointer text-gray-500 size={24}" />
            <span className=" absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              4
            </span>
          </div>
          <hr className=" hidden md:block w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex  items-center gap-3 cursor-pointer">
            <div className=" w-9 h-9">Image</div>
            <span className="hidden md:block font-semibold">Hania G</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="  cursor-pointer text-gray-500 " size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
