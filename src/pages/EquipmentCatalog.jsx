import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

import m4a1Img from "../assets/images/M4A1 Carbine.png";
import pistolImg from "../assets/images/M9A3 Pistol.png";
import m249Img from "../assets/images/M249 Squad Automatic Weapon.png";
import m240bImg from "../assets/images/M240B Machine Gun.png";
import handgunImg from "../assets/images/M17 Modular Handgun.png";
import armorImg from "../assets/images/Interceptor Body Armor.png";
import helmetImg from "../assets/images/ACH Combat Helmet.png";
import nightVisionImg from "../assets/images/Night Vision Monocular.png";

const equipmentItems = [
  {
    id: 1,
    category: "Weapons",
    name: "M4A1 CARBINE",
    image: m4a1Img,
    badge: "STANDARD",
    badgeType: "standard",
    rank: "Private",
    stock: 45,
  },
  {
    id: 2,
    category: "Weapons",
    name: "M9A3 PISTOL",
    image: pistolImg,
    badge: "STANDARD",
    badgeType: "standard",
    rank: "Private",
    stock: 120,
  },
  {
    id: 3,
    category: "Weapons",
    name: "M249 SQUAD AUTOMATIC WEAPON",
    image: m249Img,
    badge: "RESTRICTED",
    badgeType: "restricted",
    rank: "Specialist",
    stock: 18,
  },
  {
    id: 4,
    category: "Weapons",
    name: "M240B MACHINE GUN",
    image: m240bImg,
    badge: "RESTRICTED",
    badgeType: "restricted",
    rank: "Sergeant",
    stock: 8,
  },
  {
    id: 5,
    category: "Weapons",
    name: "M17 MODULAR HANDGUN",
    image: handgunImg,
    badge: "STANDARD",
    badgeType: "standard",
    rank: "Private",
    stock: 85,
  },
  {
    id: 6,
    category: "Protective Gear",
    name: "INTERCEPTOR BODY ARMOR (IBA)",
    image: armorImg,
    badge: "STANDARD",
    badgeType: "standard",
    rank: "Private",
    stock: 200,
  },
  {
    id: 7,
    category: "Protective Gear",
    name: "ACH COMBAT HELMET",
    image: helmetImg,
    badge: "STANDARD",
    badgeType: "standard",
    rank: "Private",
    stock: 180,
  },
  {
    id: 8,
    category: "Optics",
    name: "AN/PVS-14 NIGHT VISION MONOCULAR",
    image: nightVisionImg,
    badge: "RESTRICTED",
    badgeType: " Asc",
    rank: "Corporal",
    stock: 32,
  },
];

const badgeClasses = {
  standard: "border border-[#1f6f43] bg-[#0d4d2b] text-[#25de73]",
  restricted: "border border-[#8b730d] bg-[#4b3f08] text-[#f0c400]",
};

const EquipmentCard = ({ item }) => {
  return (
    <article className="group overflow-hidden rounded border border-[#2a3526] bg-[#101910] hover:shadow-lg transition-all duration-200">
      <div className="relative h-44 border-b border-[#243020] bg-gradient-to-r from-[#223522] to-[#1d2d1d]">
        <span className={`absolute right-2.5 top-3 inline-flex h-5 items-center px-2 text-xs font-black uppercase ${badgeClasses[item.badgeType]}`}>
          {item.badge}
        </span>
        <div className="flex h-full w-full items-center justify-center p-2">
          <img src={item.image} alt={item.name} className="max-h-28 max-w-full flex-shrink-0 object-contain" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-[#9ea293] uppercase tracking-wide">{item.category}</p>
        <h3 className="mt-1.5 line-clamp-2 text-lg font-black uppercase tracking-tight text-[#f2efe7]">
          {item.name}
        </h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#9ea293]">Rank:</span>
            <span className="font-semibold text-[#f0c400]">{item.rank}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#9ea293]">Stock:</span>
            <span className="font-semibold text-[#00eb77]">{item.stock}</span>
          </div>
        </div>
        <button className="mt-5 h-10 w-full rounded border border-[#47653d] bg-[#294126] text-sm font-black uppercase tracking-wide text-[#f1eee7] transition hover:bg-[#32502 Asc ]">
          View Specs
        </button>
      </div>
    </article>
  );
};

const EquipmentCatalogSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d170e] to-[#071009] p-6 sm:p-8 lg:p-10 text-white">
      <div className="flex items-start gap-4 mb-8">
        <div className="mt-0.5 h-9 w-1 bg-[#f0c400]" />
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-[#f3f0e8]">
            Equipment Catalog
          </h2>
          <p className="mt-2 text-sm text-[#9ea293]">
            Requisition gear and weapons. Subject to clearance.
          </p>
        </div>
      </div>

      <div className="border border-[#2a3526] bg-gradient-to-r from-[#162317] to-[#121c12] rounded-lg p-4 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex h-11 flex-1 items-center gap-2 border border-[#33402d] bg-[#121a12] px-4">
            <Search size={16} strokeWidth={2} className="text-[#a1a496]" />
            <input
              type="text"
              placeholder="Search equipment..."
              className="flex-1 bg-transparent text-sm text-[#f2efe7] outline-none placeholder:text-[#8f9385]"
            />
          </div>

          <button className="flex h-11 min-w-[160px] items-center justify-between border border-[#33402d] bg-[#121a12] px-4 text-sm">
            <span className="flex items-center gap-2">
              <SlidersHorizontal size={14} strokeWidth={2} className="text-[#b8bbb0]" />
              All Categories
            </span>
            <ChevronDown size={15} strokeWidth={2} className="text-[#b8bbb0]" />
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {equipmentItems.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EquipmentCatalogSection;

