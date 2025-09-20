export default function Card({ title, value, change, changeType, bg, className }) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${bg} ${className || ""} flex flex-col justify-start gap-3`}
    >
      <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
     <div className="flex gap-4  items-center" > <p className="text-2xl font-semibold">{value}</p>
      <p
        className={`text-sm ${
          changeType === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </p></div>
    </div>
  );
}
