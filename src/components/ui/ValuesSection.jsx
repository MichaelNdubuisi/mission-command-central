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
    text: "Treat people as they should be treated. In the Soldier's Code, we pledge to \"treat others with dignity and respect while expecting others to do the same.\"",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-[#0b140d] py-20 px-6 md:py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {values.map((item, index) => (
            <div key={index} className="text-center hover:brightness-105 transition-all duration-200">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#6b5b09]/50 bg-[#312b09]/10">
                <ShieldIcon className="h-7 w-7 text-[#d1aa10]" />
              </div>
              <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#f0eee6]">
                {item.title}
              </h3>
              <p className="max-w-md text-base font-medium leading-relaxed text-[#a4a597]">
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
