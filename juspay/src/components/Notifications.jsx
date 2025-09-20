import User from "../assets/noti/User.svg";
import Broadcast from "../assets/noti/Broadcast.svg";
import BugBeetle from "../assets/noti/BugBeetle.svg";
import BugBeetle1 from "../assets/noti/BugBeetle1.svg";

export default function Notifications() {
  const notifications = [
    {
      text: "You have a bug that needs...",
      time: "Just now",
      img: BugBeetle,
    },
    {
      text: "New user registered",
      time: "59 minutes ago",
      img: User,
    },
    {
      text: "You have a bug that needs...",
      time: "12 hours ago",
      img: BugBeetle1,
    },
    {
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      img: Broadcast,
    },
  ];

  return (
    <div>
      {/* <h2 className="text-gray-500 text-xs font-semibold uppercase mb-2">
        Notifications
      </h2> */}
      <ul className="space-y-3">
        {notifications.map((item, idx) => (
          <li key={idx} className="flex items-start space-x-2">
            <img
              src={item.img}
              alt="icon"
              className="w-5 h-5 mt-1"
            />
            <div>
              <p className="text-gray-800">{item.text}</p>
              <p className="text-gray-400 text-xs">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
