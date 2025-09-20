import IconSet4 from "../assets/contacts/IconSet.svg"; 
import IconSet3 from "../assets/contacts/IconSet3.svg"; 
import IconSet2 from "../assets/contacts/IconSet2.svg"; 
import IconSet1 from "../assets/contacts/IconSet1.svg";
import cd03 from "../assets/contacts/3D03.svg";
import Female09 from "../assets/contacts/Female09.svg";


export default function Contacts() {
  const contacts = [
    { name: "Natali Craig", img: IconSet1 },
    { name: "Drew Cano", img: IconSet2 },
    { name: "Orlando Diggs", img: IconSet3 },
    { name: "Andi Lane", img: IconSet4 },
    { name: "Kate Morrison", img: cd03 },
    { name: "Koray Okumus", img: Female09 },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-gray-500 text-xs font-semibold uppercase mb-2">
        Contacts
      </h2>
      <ul className="space-y-3">
        {contacts.map((contact, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <img
              src={contact.img}
              alt={contact.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-gray-800">{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
