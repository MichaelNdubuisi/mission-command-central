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

const Navbar = () => {
  return (
    <header className="w-full border-b border-[#273121] bg-[#0b140d]">
      <div className="mx-auto flex h-[62px] max-w-[1366px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <ShieldLogo className="h-8 w-8 text-[#d4aa11]" />
          <p className="text-[18px] font-extrabold uppercase tracking-[0.02em] text-[#e7e5dd]">
            USA Army Portal
          </p>
        </div>

        <button className="border border-[#d4aa11] bg-[#d4aa11] px-6 py-2 text-[13px] font-extrabold uppercase tracking-[0.06em] text-black transition duration-300 hover:opacity-90">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;