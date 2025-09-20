import { useState } from "react";
import {
  Home,
  ShoppingBag,
  FolderKanban,
  Book,
  User,
  Settings,
  FileText,
  PenTool,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const MENU = [
  {
    title: "Favorites",
    items: [
      { name: "Overview", icon: Home, active: false },
      { name: "Projects", icon: FolderKanban, active: false },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { name: "Default", icon: Home, active: true },
      { name: "eCommerce", icon: ShoppingBag, active: false },
      { name: "Projects", icon: FolderKanban, active: false },
      { name: "Online Courses", icon: Book, active: false },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "User Profile", icon: User, active: false },
      { name: "Account", icon: Settings, active: false },
      { name: "Corporate", icon: FileText, active: false },
      { name: "Blog", icon: PenTool, active: false },
      { name: "Social", icon: MessageCircle, active: false },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 p-4
          flex flex-col justify-between z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div>
          <h1 className="text-lg font-bold mb-6">ByeWind</h1>
          {MENU.map((section, idx) => (
            <nav key={idx} className="mb-6">
              <p className="text-gray-400 uppercase text-xs mb-2">{section.title}</p>
              {section.items.map((item, i) => (
                <button
                  key={i}
                  className={`
                    flex items-center space-x-2 w-full text-left p-2 rounded-md
                    ${item.active ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50"}
                  `}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed  inset-0 bg-black opacity-20 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
