import React from 'react'
import Card from "./Card";
import { BarGraph, LineGraph } from "./Charts";
import Location from "./Location";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import Aside from "./Aside";

const Dashboard = () => {
  return (
<div>
     {/* Page Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* Main Column */}
          <div className=" p-6 space-y-6 ">
            {/* Cards + BarGraph */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div className="grid grid-cols-2 gap-4">
                <Card title="Customers" value="3,781" change="+11.01%" changeType="up" bg="#E3F5FF" />
                <Card title="Orders" value="1,219" change="-0.03%" changeType="down" bg="#F7F9FB" />
                <Card title="Revenue" value="$695" change="+15.03%" changeType="up" bg="#F7F9FB" />
                <Card title="Growth" value="30.1%" change="+6.08%" changeType="up" bg="#E5ECF6" />
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
</div>
  )
}

export default Dashboard