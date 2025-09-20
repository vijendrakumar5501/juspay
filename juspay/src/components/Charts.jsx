import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

// --- BarGraph ---

const data = [
  { name: "Jan", blue: 80, lightBlue: 20 },
  { name: "Feb", blue: 90, lightBlue: 10 },
  { name: "Mar", blue: 90, lightBlue: 10 },
  { name: "Apr", blue: 80, lightBlue: 20 },
  { name: "May", blue: 90, lightBlue: 10 },
  { name: "Jun", blue: 75, lightBlue: 25 },
];

export function BarGraph() {
  return (
    <ResponsiveContainer width="100%" height={170}>
      <BarChart data={data} barCategoryGap="30%">
        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />

        {/* X Axis */}
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7280" }} />

        {/* Y Axis */}
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />

        {/* Tooltip */}
        <Tooltip
          cursor={{ fill: "rgba(156, 163, 175, 0.1)" }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />

        {/* Stacked Bars */}
        <Bar
          dataKey="blue"
          stackId="a"
          fill="#9CB7CF" // solid blue
          barSize={30}
        />
        <Bar
          dataKey="lightBlue"
          stackId="a"
          fill="#D9E5F2" // solid light blue
          radius={[5, 5, 0, 0]} // curve only applies to the top bar

          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// --- LineGraph ---
const lineData = [
  { name: "Jan", current: 10, previous: 12 },
  { name: "Feb", current: 14, previous: 10 },
  { name: "Mar", current: 11, previous: 13 },
  { name: "Apr", current: 16, previous: 14 },
  { name: "May", current: 19, previous: 18 },
  { name: "Jun", current: 22, previous: 20 },
];

export function LineGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        {/* X Axis */}
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7280" }} />
        {/* Y Axis */}
        <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        {/* Lines */}
        <Line type="monotone" dataKey="current" stroke="#9CB7CF" strokeWidth={3} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="previous" stroke="#9CA3AF" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}


