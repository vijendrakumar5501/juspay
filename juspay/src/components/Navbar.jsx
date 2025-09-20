import { Bell, Search, Sun, RefreshCw } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-r border-gray-200 bg-white lg:w-[75.45%]">
      <div className="text-gray-500">Dashboards / <span className="text-black font-semibold">Default</span></div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-1 rounded-md border"
          />
          <Search size={16} className="absolute left-2 top-2 text-gray-400" />
        </div>
        <Sun className="cursor-pointer" />
        <RefreshCw className="cursor-pointer" />
        <Bell className="cursor-pointer" />
      </div>
    </header>
  );
}
