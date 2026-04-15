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
    name: "M249 SQUAD AUTOMATIC\nWEAPON",
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
    title: "M17 MODULAR HANDGUN",
    rank: "Private",
    stock: 85,
    badge: "STANDARD",
    badgeType: "standard",
    image: handgunImg,
  },
  {
    id: 6,
    category: "Protective Gear",
    title: "INTERCEPTOR BODY ARMOR (IBA)",
    rank: "Private",
    stock: 200,
    badge: "STANDARD",
    badgeType: "standard",
    image: armorImg,
  },
  {
    id: 7,
    category: "Protective Gear",
    title: "ACH COMBAT HELMET",
    rank: "Private",
    stock: 180,
    badge: "STANDARD",
    badgeType: "standard",
    image: helmetImg,
  },
  {
    id: 4,
    category: "Optics",
    title: "AN/PVS-14 NIGHT VISION MONOCULAR",
    rank: "Corporal",
    stock: 32,
    badge: "RESTRICTED",
    badgeType: "restricted",
    image: nightVisionImg,
  },
];

const badgeClasses = {
  standard:
    "border border-[#1f6f43] bg-[#0d4d2b] text-[#25de73]",
  restricted:
    "border border-[#8b730d] bg-[#4b3f08] text-[#f0c400]",
};

const EquipmentCard = ({ item }) => {
  return (
    <article className="overflow-hidden rounded-[2px] border border-[#2a3526] bg-[#101910]">
      <div className="relative h-[178px] border-b border-[#243020] bg-[linear-gradient(90deg,#223522_0%,#1d2d1d_100%)]">
        <span
          className={`absolute right-[10px] top-[13px] inline-flex h-[18px] items-center px-[8px] text-[10px] font-extrabold uppercase leading-none tracking-[0.03em] ${badgeClasses[item.badgeType]}`}
        >
          {item.badge}
        </span>

        <div className="flex h-full w-full items-center justify-center px-3">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-[124px] w-auto max-w-full object-contain opacity-90"
          />
        </div>
      </div>

      <div className="px-[13px] pb-[12px] pt-[12px]">
        <p className="text-[12px] leading-none text-[#9ea293]">{item.category}</p>

        <h3 className="mt-[8px] whitespace-pre-line text-[18px] font-extrabold uppercase leading-[1.05] tracking-[-0.015em] text-[#f2efe7]">
          {item.name}
        </h3>

        <div className="mt-[12px] space-y-[7px] text-[13px]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[#9ea293]">Rank:</span>
            <span className="font-medium text-[#f0c400]">{item.rank}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-[#9ea293]">Stock:</span>
            <span className="font-medium text-[#00eb77]">{item.stock}</span>
          </div>
        </div>

        <button className="mt-[22px] flex h-[42px] w-full items-center justify-center border border-[#47653d] bg-[#294126] text-[15px] font-extrabold uppercase tracking-[-0.01em] text-[#f1eee7] transition hover:bg-[#32502f]">
          View Specs
        </button>
      </div>
    </article>
  );
};

const EquipmentCatalogSection = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(90deg,#0d170e_0%,#071009_100%)] px-[33px] pt-[31px] pb-[28px] text-white">
      {/* header */}
      <div className="flex items-start gap-[16px]">
        <div className="mt-[1px] h-[36px] w-[4px] bg-[#f0c400]" />
        <div>
          <h2 className="text-[28px] font-extrabold uppercase leading-none tracking-[0.035em] text-[#f3f0e8]">
            EQUIPMENT CATALOG
          </h2>
          <p className="mt-[13px] text-[15px] leading-none text-[#9ea293]">
            Requisition gear and weapons. Subject to clearance.
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="mt-[24px] h-px w-full bg-[#2a3526]" />

      {/* toolbar */}
      <div className="mt-[32px] border border-[#2a3526] bg-[linear-gradient(90deg,#162317_0%,#121c12_100%)] px-[15px] py-[16px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex h-[38px] flex-1 items-center gap-3 border border-[#33402d] bg-[#121a12] px-[12px]">
            <Search size={16} strokeWidth={1.9} className="text-[#a1a496]" />
            <input
              type="text"
              placeholder="Search equipment..."
              className="w-full bg-transparent text-[14px] text-[#f2efe7] outline-none placeholder:text-[#8f9385]"
            />
          </div>

          <button className="flex h-[38px] min-w-[180px] items-center justify-between border border-[#33402d] bg-[#121a12] px-[12px]">
            <span className="flex items-center gap-3">
              <SlidersHorizontal
                size={15}
                strokeWidth={1.9}
                className="text-[#b8bbb0]"
              />
              <span className="text-[14px] text-[#f2efe7]">All Categories</span>
            </span>

            <ChevronDown
              size={16}
              strokeWidth={1.9}
              className="text-[#b8bbb0]"
            />
          </button>
        </div>
      </div>

      {/* cards */}
      <div className="mt-[32px] grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-2 xl:grid-cols-4">
        {equipmentItems.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

import DashboardLayout from "../components/layout/DashboardLayout";

const EquipmentCatalog = () => {
  return <DashboardLayout>
    <EquipmentCatalogSection />
  </DashboardLayout>;
};

export default EquipmentCatalog;
