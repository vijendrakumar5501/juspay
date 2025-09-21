import { useState, useMemo } from "react";
import {
  Calendar,
  MoreHorizontal,
  Filter,
  Plus,
  ArrowUpDown,
  Search,
} from "lucide-react";
import IconSet1 from "../assets/contacts/IconSet1.svg";
import IconSet2 from "../assets/contacts/IconSet2.svg";
import IconSet3 from "../assets/contacts/IconSet3.svg";
import IconSet4 from "../assets/contacts/IconSet.svg";
import cd03 from "../assets/contacts/3D03.svg";
import Female09 from "../assets/contacts/Female09.svg";

// Sample orders data
const ordersData = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: IconSet1 },
    project: "Landing Page",
    address: "Meadow Lane, Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: IconSet2 },
    project: "CRM Admin Pages",
    address: "Larry Street, San Francisco",
    date: "5 minutes ago",
    status: "Complete",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Drew Cano", avatar: IconSet4 },
    project: "Client Project",
    address: "Bagwell Avenue, Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Orlando Diggs", avatar: IconSet3 },
    project: "Admin Dashboard",
    address: "Washburn Road, Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Andi Lane", avatar: Female09 },
    project: "App Landing Page",
    address: "Nest Lane, Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Andy Ortan", avatar: cd03 },
    project: "Marketing Website",
    address: "Maple Street, Denver",
    date: "Feb 10, 2023",
    status: "In Progress",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Maya Patel", avatar: IconSet1 },
    project: "E-commerce App",
    address: "Sunset Boulevard, Los Angeles",
    date: "3 hours ago",
    status: "Pending",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Liam Johnson", avatar: IconSet2 },
    project: "Portfolio Site",
    address: "Elm Street, Chicago",
    date: "2 days ago",
    status: "Complete",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Sophie Turner", avatar: IconSet3 },
    project: "Landing Page Redesign",
    address: "Pine Avenue, Seattle",
    date: "Today",
    status: "Approved",
  },
  {
    id: `#CM${Math.floor(1000 + Math.random() * 9000)}`,
    user: { name: "Ethan Brown", avatar: IconSet4 },
    project: "CRM Integration",
    address: "Oak Road, Austin",
    date: "1 week ago",
    status: "Rejected",
  },
];

// Status colors
const statusColors = {
  "In Progress": "text-purple-500",
  Complete: "text-green-500",
  Pending: "text-blue-500",
  Approved: "text-yellow-500",
  Rejected: "text-gray-400",
};

export default function OrderList() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilterInput, setStatusFilterInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const itemsPerPage = 6;

  // Filter + Search + Sort
  const filteredOrders = useMemo(() => {
    let data = [...ordersData];

    // Apply status filter
    if (statusFilter) {
      data = data.filter((o) => o.status === statusFilter);
    }

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (o) =>
          o.id.toLowerCase().includes(term) ||
          o.user.name.toLowerCase().includes(term) ||
          o.project.toLowerCase().includes(term) ||
          o.address.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    if (sortField) {
      data.sort((a, b) => {
        let aField = a[sortField];
        let bField = b[sortField];

        // Special handling for user
        if (sortField === "user") {
          aField = a.user.name;
          bField = b.user.name;
        }

        if (typeof aField === "string") {
          return sortDirection === "asc"
            ? aField.localeCompare(bField)
            : bField.localeCompare(aField);
        }
        return 0;
      });
    }

    return data;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Sorting handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Order List</h2>

        {/* Actions + Search + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-sky-50 w-full p-2 rounded">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Plus size={18} />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => {
                setStatusFilter(statusFilterInput);
                setPage(1);

                setSortField("user");
                setSortDirection("asc");
              }}
            >
              <Filter size={18} />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => {
                setStatusFilter(statusFilterInput);
                setPage(1);

                setSortField("user");
                setSortDirection("asc");
              }}
            >
              <ArrowUpDown size={18} />
            </button>
          </div>

          <div className="flex gap-2 items-center w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                className="border border-gray-300 rounded pl-8 pr-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <Search
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <select
              className="border border-gray-300 rounded p-1 text-sm"
              value={statusFilterInput}
              onChange={(e) => setStatusFilterInput(e.target.value)}
            >
              <option value="">All Status</option>
              {Object.keys(statusColors).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-medium border-b border-gray-400">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("id")}
              >
                Order ID
              </th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("user")}
              >
                User
              </th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("project")}
              >
                Project
              </th>
              <th className="p-3">Address</th>
              <th className="p-3">Date</th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status
              </th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedOrders.map((order, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 font-medium text-gray-700">{order.id}</td>
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={order.user.avatar}
                    alt={order.user.name}
                    className="w-8 h-8"
                  />
                  <span>{order.user.name}</span>
                </td>
                <td className="p-3">{order.project}</td>
                <td className="p-3">{order.address}</td>
                <td className="p-3 flex items-center gap-1 text-gray-600">
                  <Calendar size={16} /> {order.date}
                </td>
                <td className={`p-3 font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </td>
                <td className="p-3 text-right">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-3 md:hidden">
        {paginatedOrders.map((order, idx) => (
          <div key={idx} className="border rounded-lg p-3 shadow-sm bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="font-medium text-gray-700">{order.id}</span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={order.user.avatar}
                alt={order.user.name}
                className="w-8 h-8"
              />
              <span>{order.user.name}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">Project:</span> {order.project}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Address:</span> {order.address}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <Calendar size={14} /> {order.date}
            </p>
            <p
              className={`text-sm font-medium mt-1 ${
                statusColors[order.status]
              }`}
            >
              {order.status}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center md:justify-end items-center gap-2 mt-4 text-sm text-gray-600">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-2 py-1 disabled:opacity-50"
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 rounded ${
              page === num ? "bg-gray-100 font-medium" : ""
            }`}
          >
            {num}
          </button>
        ))}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-2 py-1 disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
