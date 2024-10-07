"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/sidebar";
// import Dashboard from "@/components/test";

const DashboardLayout= ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar container */}
      <div
        className={`
          fixed md:relative
          h-screen
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          transition-transform duration-300 ease-in-out
          
          z-30 md:z-0
        `}
      >
        <Sidebar />
      </div>

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top navbar */}
        <div className="flex items-center w-full">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-gray-800 ml-2 md:ml-0"></h1>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="min-h-full">
            <div className="p-6">
{children}            </div>
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
