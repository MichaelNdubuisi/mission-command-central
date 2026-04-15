import {
  Box,
  CalendarDays,
  Bell,
} from "lucide-react";

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

      <div className="mt-[34px]">
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

const DashboardContent = () => {
  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 mt-8 sm:mt-[22px] pt-4">
        <div className="h-10 w-1 bg-gradient-to-b from-[#f0c400] to-[#d8a000] sm:ml-[24px]" />
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-black uppercase tracking-widest bg-gradient-to-r from-[#f0c400] to-[#d8a000] bg-clip-text text-transparent drop-shadow-lg">
          COMMAND DASHBOARD
        </h2>
      </div>
      <br />

      {/* CARDS */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto px-4">
        <div className="w-[244px] flex-none">
          <StatCard
            title="TOTAL ORDERS"
            icon={Box}
            pending={0}
            approved={0}
          />
        </div>

        <div className="w-[244px] flex-none">
          <StatCard
            title="LEAVE APPS"
            icon={CalendarDays}
            pending={0}
            approved={0}
          />
        </div>

        <div className="w-[244px] flex-none">
          <StatCard
            title="ANNOUNCEMENTS"
            icon={Bell}
            subtitle="View all comms"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;

