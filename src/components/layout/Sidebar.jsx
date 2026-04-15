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

const SidebarItem = ({ icon: Icon, label, to, active = false, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = active || location.pathname === to;

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
        isActive
          ? "border-[#4e4305] bg-[#2b2705]/80 text-[#f0c400]"
          : "border-transparent text-[#d8d6ca] hover:border-[#293224] hover:bg-[#111c12]"
      } border-l-4`}
    >
      <Icon size={19} strokeWidth={1.9} className={isActive ? "text-[#f0c400]" : "text-[#d8d6ca]"} />
      <span className="text-sm font-semibold tracking-tight">
        {label}
      </span>
    </button>
  );
};

const Sidebar = ({ onClose }) => {
  // Close mobile menu on any navigation click
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    navigate(to);
    onClose?.();
  };

  return (
    <aside className="flex h-full w-full flex-col border-r border-[#283122] bg-[#041006] shadow-2xl lg:w-64">
      {/* Mobile close button */}
      <div className="lg:hidden flex items-center p-4 border-b border-[#283122]">
        <button 
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex h-20 items-center gap-3 px-5">
        <ShieldLogo className="h-9 w-9 text-[#f0c400]" />
        <h1 className="text-base font-black uppercase tracking-wide text-[#f5f2ea]">
          Army Portal
        </h1>
      </div>

      <div className="border-t border-[#283122] px-4 py-4">
        <div className="flex items-center gap-3 rounded-lg border border-[#283122] bg-[linear-gradient(90deg,#0f180f_0%,#111c11_100%)] p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5b5207]/50 text-sm font-black uppercase text-[#f0c400]">
            US
          </div>
          <div>
            <p className="text-sm font-semibold text-white">SPC John Doe</p>
            <p className="text-xs text-[#c5c5ba]">123-45-6789</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <SidebarItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          to="/dashboard"
          onClick={() => handleNavClick('/dashboard')}
        />
        <SidebarItem 
          icon={Box} 
          label="Equipment Catalog" 
          to="/equipment"
          onClick={() => handleNavClick('/equipment')}
        />
        <SidebarItem 
          icon={ClipboardList} 
          label="My Orders" 
          to="/orders"
          onClick={() => handleNavClick('/orders')}
        />
        <SidebarItem 
          icon={CalendarDays} 
          label="Leave Applications" 
          to="/leave"
          onClick={() => handleNavClick('/leave')}
        />
        <SidebarItem 
          icon={Bell} 
          label="Announcements" 
          to="/announcements"
          onClick={() => handleNavClick('/announcements')}
        />
        <SidebarItem 
          icon={User} 
          label="My Profile" 
          to="/profile"
          onClick={() => handleNavClick('/profile')}
        />
      </nav>

      <div className="p-5">
        <button 
          onClick={() => handleNavClick('/login')}
          className="flex w-full items-center gap-3 rounded-lg border border-[#2f392d] px-3 py-2.5 text-sm font-semibold text-[#d8d6ca] transition-all duration-200 hover:border-[#465041] hover:bg-white/5 hover:text-white"
        >
          <LogOut size={18} strokeWidth={1.9} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
