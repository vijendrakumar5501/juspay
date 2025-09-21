

import { Bell, Search, Sun, RefreshCw } from "lucide-react";

export default function Navbar() {
  return (
 <header
  className="
    flex flex-col sm:flex-row sm:items-center sm:justify-between 
    lg:justify-start lg:gap-[30%] md:gap-[20%]
    p-4 border-b border-gray-200 bg-white w-full
  "
>
      
      <div className="text-gray-500 text-sm mt-9 lg:-mt-0 md:-mt-0">
        Dashboards /{" "}
        <span className="text-black font-semibold">Default</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-1 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Search
            size={16}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <Sun className="cursor-pointer" />
          <RefreshCw className="cursor-pointer" />
          <Bell className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

