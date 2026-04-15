import { useAuth } from "../../contexts/AuthContext";

const ShieldLogo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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


const Navbar = ({ className = "" }) => {
  const { isAuthenticated, setToggleSidebar } = useAuth();

  const handleMenuClick = () => {
    setToggleSidebar(prev => !prev);
  };

  return (
    <header className={`w-full border-b border-[#273121] bg-[#0b140d] shadow-sm ${className}`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 hover:brightness-105 transition-all duration-200">
          <ShieldLogo className="h-6 w-6 text-[#d4aa11] flex-shrink-0 lg:h-7 lg:w-7" />
          <p className="text-lg font-black uppercase tracking-tight text-[#e7e5dd] lg:text-xl hover:text-[#f0c400] transition-colors duration-200">
            Army Portal
          </p>
        </div>

        {!isAuthenticated && (
          <button className="hidden lg:block h-10 border border-[#d4aa11] bg-[#d4aa11] px-6 py-1.5 text-sm font-black uppercase tracking-wider text-black transition-all duration-200 hover:brightness-105 hover:shadow-md">
            Sign In
          </button>
        )}

        <button 
          onClick={handleMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
