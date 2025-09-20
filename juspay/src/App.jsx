import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { BarGraph, LineGraph } from "./components/Charts";
import Location from "./components/Location";
import TopSellingProducts from "./components/TopSellingProducts";
import TotalSales from "./components/TotalSales";
import Aside from "./components/Aside";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col overflow-auto">
        {/* Navbar */}
      <div className="flex ">
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex justify-center items-center pl-6 "><h2 className="text-gray-500 text-xs font-bold uppercase mb-2 ">
        Notifications
      </h2></div>
      </div>
          

        {/* Page Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* Main Column */}
          <div className=" p-6 space-y-6 ">
            {/* Cards + BarGraph */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div className="grid grid-cols-2 gap-4">
                <Card title="Customers" value="3,781" change="+11.01%" changeType="up" bg="bg-blue-100" />
                <Card title="Orders" value="1,219" change="-0.03%" changeType="down" bg="bg-gray-100" />
                <Card title="Revenue" value="$695" change="+15.03%" changeType="up" bg="bg-gray-100" />
                <Card title="Growth" value="30.1%" change="+6.08%" changeType="up" bg="bg-gray-100" />
              </div>

              <div className="bg-white p-4 rounded-lg shadow w-full lg:w-[90%]">
                <h3 className="mb-4 font-semibold text-sm">Projections vs Actuals</h3>
                <BarGraph />
              </div>
            </div>

            {/* Revenue LineGraph + Location */}
            <div className="flex flex-col lg:flex-row lg:w-[95%] gap-6">
              <div className="bg-white p-4 rounded-lg shadow flex-1">
                <h3 className="mb-4 font-semibold text-sm">Revenue</h3>
                <LineGraph />
              </div>

              <div className="w-full lg:w-[25%]">
                <Location />
              </div>
            </div>

            {/* Sells Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:w-[95%]">
              <div className="bg-white p-4 rounded-lg shadow flex-1">
                <TopSellingProducts />
              </div>

              <div className="w-full lg:w-[25%]">
                <TotalSales />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          
          <aside className="hidden lg:block border-l border-gray-200 lg:pl-6">
            
            <Aside />
          </aside>
        </div>
      </main>
    </div>
  );
}
