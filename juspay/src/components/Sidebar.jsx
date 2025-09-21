import { Link, useLocation } from "react-router-dom";
import byeWind from "../assets/ByeWind.svg"
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
      { name: "Overview", icon: Home, path: "/overview" },
      { name: "Projects", icon: FolderKanban, path: "/projects" },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { name: "Dashboard", icon: Home, path: "/dashboard" },
      { name: "eCommerce", icon: ShoppingBag, path: "/ecommerce" },
      { name: "Projects", icon: FolderKanban, path: "/dashboard-projects" },
      { name: "Online Courses", icon: Book, path: "/courses" },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "User Profile", icon: User, path: "/profile" },
      { name: "Account", icon: Settings, path: "/account" },
      { name: "Corporate", icon: FileText, path: "/corporate" },
      { name: "Blog", icon: PenTool, path: "/blog" },
      { name: "Social", icon: MessageCircle, path: "/social" },
    ],
  },
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile toggle button */}
      <div className="mb-6 mr-10">
        <button
        className="md:hidden fixed top-4 left-4 z-50  p-2 rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20}  />}
      </button>
      </div>

      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 p-4
          flex flex-col justify-between z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div>
          
          <div className="flex items-center space-x-3 mb-6">
  <img
    src={byeWind}
    alt="Logo"
    className="w-6 h-6 object-contain"
  />

  <h1 className="text-lg font-bold mb-0">ByeWind</h1>
</div>
          {MENU.map((section, idx) => (
            <nav key={idx} className="mb-6">
              <p className="text-gray-400 uppercase text-xs mb-2">
                {section.title}
              </p>
              {section.items.map((item, i) => (
                <Link
                  key={i}
                  to={item.path=='/dashboard'?"/dashboard":item.path=='/ecommerce'?'/ecommerce':""}
                  onClick={() => setOpen(false)} // close sidebar on mobile
                  className={`
                    flex items-center space-x-2 w-full text-left p-2 rounded-md
                    ${
                      location.pathname === item.path
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-20 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
