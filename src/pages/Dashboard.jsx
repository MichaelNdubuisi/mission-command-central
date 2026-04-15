import {
  LayoutDashboard,
  Box,
  ClipboardList,
  CalendarDays,
  Bell,
  User,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


const ShieldLogo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 6C27.4 10.2 20.7 12.7 12 13.2V31.4C12 43.8 19.5 54.3 32 58C44.5 54.3 52 43.8 52 31.4V13.2C43.3 12.7 36.6 10.2 32 6Z"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SidebarItem = ({ icon: Icon /* eslint-disable-line @typescript-eslint/no-unused-vars */, label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 border px-4 py-[13px] text-left transition ${
        active
          ? "border-[#4e4305] bg-[#2b2705]/80 text-[#f0c400]"
          : "border-transparent bg-transparent text-[#d8d6ca] hover:border-[#293224] hover:bg-[#111c12]"
      }`}
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        className={active ? "text-[#f0c400]" : "text-[#d8d6ca]"}
      />
      <span className="text-[15px] font-medium tracking-[-0.01em]">
        {label}
      </span>
    </button>
  );
};


const StatCard = ({ title, icon: Icon /* eslint-disable-line @typescript-eslint/no-unused-vars */, subtitle, pending, approved }) => {
  return (
    <div className="group h-[152px] w-full max-w-[244px] rounded-lg border border-[#2b3426] bg-gradient-to-r from-[#121d13] to-[#111912] p-6 pt-[22px] pb-[18px] shadow-md hover:shadow-2xl hover:border-[#f0c400] hover:shadow-yellow-500/10 transition-all duration-500 hover:scale-[1.02]">
      <div className="flex items-start justify-between">
        <p className="text-[12px] font-medium uppercase tracking-[0.01em] text-[#dccb78]">
          {title}
        </p>

        <Icon
          size={15}
          strokeWidth={1.9}
          className="mt-[1px] text-[#f0c400]"
        />
      </div>

      <div className="mt-[34px] px-4">
        <h2 className="text-[33px] font-extrabold leading-none text-[#f5f2e9]">
          0
        </h2>

        {subtitle ? (
          <p className="mt-[10px] text-[13px] text-[#d8d5ca]">
            {subtitle}
          </p>
        ) : (
          <div className="mt-[10px] flex items-center gap-[14px] text-[12px]">
            <span className="text-[#e0b400]">◔ {pending} Pending</span>
            <span className="text-[#00df66]">◌ {approved} Approved</span>
          </div>
        )}
      </div>
    </div>
  );
};

import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return <DashboardContent />;
};

export default Dashboard;

