
import databaseImg from "../assets/IconSet.svg";
import bugImg from "../assets/IconSet1.svg";
import uploadImg from "../assets/IconSet2.svg";
import trashImg from "../assets/IconSet3.svg";

export default function Activities() {
  return (
    <div className="mt-6">
      <h2 className="text-gray-500 text-xs font-semibold uppercase mb-2">
        Activities
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start space-x-2">
          <img src={bugImg} alt="Bug" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-gray-800">You have a bug that needs...</p>
            <p className="text-gray-400 text-xs">Just now</p>
          </div>
        </li>

        <li className="flex items-start space-x-2">
          <img src={uploadImg} alt="Upload" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-gray-800">Released a new version</p>
            <p className="text-gray-400 text-xs">59 minutes ago</p>
          </div>
        </li>

        <li className="flex items-start space-x-2">
          <img src={bugImg} alt="Bug" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-gray-800">Submitted a bug</p>
            <p className="text-gray-400 text-xs">12 hours ago</p>
          </div>
        </li>

        <li className="flex items-start space-x-2">
          <img src={databaseImg} alt="Database" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-gray-800">Modified A data in Page X</p>
            <p className="text-gray-400 text-xs">Today, 11:59 AM</p>
          </div>
        </li>

        <li className="flex items-start space-x-2">
          <img src={trashImg} alt="Trash" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-gray-800">Deleted a page in Project X</p>
            <p className="text-gray-400 text-xs">Feb 2, 2023</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
