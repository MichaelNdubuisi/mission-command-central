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
    <section className="relative  overflow-hidden bg-[#071009]">
      {/* base background */}
      <div className="absolute inset-0 bg-[#071009]" />

      {/* center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,38,23,0.34)_0%,rgba(10,18,11,0.94)_55%,rgba(6,12,8,1)_100%)]" />

      {/* left/right soft vertical glow */}
      <div className="absolute inset-y-0 left-0 w-[16%] bg-[linear-gradient(90deg,rgba(18,36,22,0.28)_0%,rgba(18,36,22,0.12)_35%,rgba(18,36,22,0)_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[16%] bg-[linear-gradient(270deg,rgba(18,36,22,0.22)_0%,rgba(18,36,22,0.08)_35%,rgba(18,36,22,0)_100%)]" />

      {/* subtle top fade */}
      <div className="absolute inset-x-0 top-0 h-[120px] bg-[linear-gradient(180deg,rgba(13,22,14,0.28)_0%,rgba(13,22,14,0)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-62px)] items-center justify-center px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center pb-[78px] pt-[28px] text-center">
          <ShieldLogo className="mb-[34px] h-[78px] w-[78px] text-[#d1aa10] sm:h-[84px] sm:w-[84px] md:mb-[40px] md:h-[90px] md:w-[90px]" />

          <h1 className="uppercase leading-[0.94]">
            <span className="block text-[64px] font-extrabold tracking-[-0.03em] text-[#ece8dc] sm:text-[78px] md:text-[99px] lg:text-[104px] xl:text-[108px]">
              Mission Command
            </span>
            <span className="mt-[2px] block text-[64px] font-extrabold tracking-[-0.03em] text-[#d1aa10] sm:text-[78px] md:text-[99px] lg:text-[104px] xl:text-[108px]">
              Central
            </span>
          </h1>

          <p className="mt-[30px] max-w-[820px] px-2 text-[23px] font-medium leading-[1.35] text-[#9c9d91] sm:text-[24px] md:mt-[32px] md:text-[26px]">
            Secure internal portal strictly restricted to registered United
            States Army personnel. Unauthorized access is prohibited.
          </p>

          <div className="mt-[56px] flex flex-col items-center gap-3.5 sm:flex-row sm:gap-4">
            <button className="group flex h-[56px] min-w-[252px] items-center justify-center gap-3 border border-[#d1aa10] bg-[#d1aa10] px-7 text-[20px] font-extrabold uppercase tracking-[0.02em] text-[#111] transition duration-200 hover:brightness-110">
              Authorized Sign In
              <span className="text-[28px] leading-none transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </button>

            <button className="flex h-[56px] min-w-[286px] items-center justify-center border border-[#2f392d] bg-transparent px-7 text-[20px] font-semibold uppercase tracking-[0.01em] text-[#d8d5cc] transition duration-200 hover:border-[#465041] hover:bg-white/[0.03]">
              Public Leave Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
