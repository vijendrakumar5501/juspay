import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import OrderList from "./components/OrderList";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50 overflow-hidden ">
      
      
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-20 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        
        <main className="flex-1 relative flex flex-col overflow-auto">
        
          <div className="flex">
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          </div>

          {/* Routes */}
          <Routes>
            
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ecommerce" element={<OrderList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
