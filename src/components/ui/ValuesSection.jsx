const ShieldIcon = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 8C27.8 11.6 21.9 13.8 15 14.2V29.2C15 39.5 21.2 48.2 32 51.4C42.8 48.2 49 39.5 49 29.2V14.2C42.1 13.8 36.2 11.6 32 8Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const values = [
  {
    title: "LOYALTY",
    text: "Bear true faith and allegiance to the U.S. Constitution, the Army, your unit and other Soldiers.",
  },
  {
    title: "DUTY",
    text: "Fulfill your obligations. Accomplish tasks as part of a team.",
  },
  {
    title: "RESPECT",
    text: `Treat people as they should be treated. In the Soldier's Code, we pledge to "treat others with dignity and respect while expecting others to do the same."`,
  },
];

const ValuesSection = () => {
  return (
    <section className="w-full bg-[#0b140d] px-6 py-[120px] md:px-10 md:py-[160px]">
      <div className="mx-auto max-w-[1366px]">
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-10 lg:gap-x-16">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* ICON */}
              <div className="mb-12 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#6b5b09]/60 bg-[#312b09]/20 shadow-[0_0_0_1px_rgba(209,170,16,0.05)]">
                <ShieldIcon className="h-[28px] w-[28px] text-[#d1aa10]" />
              </div>

              {/* TITLE */}
              <h3 className="mb-6 text-[28px] font-extrabold uppercase leading-none tracking-[-0.02em] text-[#f0eee6]">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="max-w-[360px] text-[18px] font-medium leading-[1.7] text-[#a4a597]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;