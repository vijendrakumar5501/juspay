
import Activities from "./Activities";
import Contacts from "./Contacts";
import Notifications from "./Notifications";

export default function Aside() {
  return (
    <aside className=" h-screen bg-white border-r border-gray-200  text-sm">
          {/* <h2 className="text-gray-500 text-xs font-semibold uppercase mb-2">
        Notifications
      </h2> */}
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
}
