
import Activities from "./Activities";
import Contacts from "./Contacts";
import Notifications from "./Notifications";

export default function Aside() {
  return (
    <aside className=" h-screen bg-white border-r border-gray-200  text-sm">
      <div className="absolute top-0 border border-gray-200 h-17 right-[24.5%]"></div>
          <h2 className="text-gray-500 text-xs font-semibold uppercase mb-2 absolute top-6 ">
        Notifications
      </h2>
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
}
