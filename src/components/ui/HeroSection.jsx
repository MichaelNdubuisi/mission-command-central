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

const HeroSection = () => {
  return (
    <section className="relative bg-[#071009]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071009] via-[#0c160d] to-[#071009]" />
      <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          <ShieldLogo className="mx-auto mb-6 h-16 w-16 text-[#d1aa10] sm:h-20 sm:w-20 md:mb-8" />

          <h1 className="mb-6 uppercase leading-tight tracking-tight">
            <span className="block text-5xl font-black text-[#ece8dc] sm:text-6xl lg:text-7xl">
              Mission Command
            </span>
            <span className="block text-5xl font-black text-[#d1aa10] sm:text-6xl lg:text-7xl">
              Central
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl px-4 text-lg font-medium leading-relaxed text-[#9c9d91] sm:text-xl md:px-0">
            Secure internal portal strictly restricted to registered United States Army personnel. Unauthorized access is prohibited.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
            <button className="group flex h-12 min-w-[240px] items-center justify-center gap-2 border border-[#d1aa10] bg-[#d1aa10] px-6 text-base font-black uppercase tracking-wide text-[#111] transition-all duration-200 hover:brightness-105">
              Authorized Sign In
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </button>
            <button className="h-12 min-w-[260px] border border-[#2f392d] bg-transparent px-6 text-base font-semibold uppercase tracking-wide text-[#d8d5cc] transition-all duration-200 hover:border-[#465041] hover:bg-white/5">
              Public Leave Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
