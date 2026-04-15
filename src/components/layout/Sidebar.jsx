import { 
  LayoutDashboard,
  Box,
  ClipboardList,
  CalendarDays,
  Bell,
  User,
  LogOut 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

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

const SidebarItem = ({ icon: Icon /* eslint-disable-line @typescript-eslint/no-unused-vars */, label, to, active = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = active || location.pathname === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex w-full items-center gap-4 border px-4 py-[13px] text-left transition ${
        isActive
          ? "border-[#4e4305] bg-[#2b2705]/80 text-[#f0c400]"
          : "border-transparent bg-transparent text-[#d8d6ca] hover:border-[#293224] hover:bg-[#111c12]"
      }`}
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        className={isActive ? "text-[#f0c400]" : "text-[#d8d6ca]"}
      />
      <span className="text-[15px] font-medium tracking-[-0.01em]">
        {label}
      </span>
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="flex w-[252px] flex-col justify-between border-r border-[#283122] bg-[#041006]">
      <div>
        <div className="flex h-[82px] items-center gap-3 px-6">
          <ShieldLogo className="h-[34px] w-[34px] text-[#f0c400]" />
          <h1 className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#f5f2ea]">
            Army Portal
          </h1>
        </div>

        <div className="border-t border-[#283122]" />

        <div className="px-4 pt-4">
          <div className="border border-[#283122] bg-[linear-gradient(90deg,#0f180f_0%,#111c11_100%)] px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#5b5207]/70 text-[22px] font-extrabold uppercase text-[#f0c400]">
                us
              </div>

              <div className="leading-tight">
                <p className="text-[16px] font-semibold text-white">
                  Loading...
                </p>
                <p className="mt-1 text-[14px] text-[#c5c5ba]">--</p>
              </div>
            </div>
          </div>
        </div>
        <br /> 
        <nav className="mt-8">
          <div className="space-y-[2px] gap-23">
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              to="/dashboard"
            /> <br />
            <SidebarItem 
              icon={Box} 
              label="Equipment Catalog" 
              to="/equipment" 
            /> <br />
            <SidebarItem 
              icon={ClipboardList} 
              label="My Orders" 
              to="/orders" 
            /> <br /> 
            <SidebarItem 
              icon={CalendarDays} 
              label="Leave Applications" 
              to="/leave" 
            /> <br />
            <SidebarItem 
              icon={Bell} 
              label="Announcements" 
              to="/announcements" 
            /> <br />
            <SidebarItem 
              icon={User} 
              label="My Profile" 
              to="/profile" 
            /> <br />
          </div>
        </nav>
      </div>

      <div className="px-6 pb-7">
        <button className="flex items-center gap-4 text-[#d8d6ca] transition hover:text-white">
          <LogOut size={19} strokeWidth={1.8} />
          <span className="text-[15px] font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

