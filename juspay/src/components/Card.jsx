export default function Card({ title, value, change, changeType, bg, className }) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${className || ""} flex flex-col justify-start gap-3`}
       style={{ backgroundColor: bg }}
    >
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
        {title}
      </h3>

      {/* Value + Change */}
      <div className="flex gap-4 items-center">
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {value}
        </p>
        <p
          className={`text-sm ${
            changeType === "up"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}
