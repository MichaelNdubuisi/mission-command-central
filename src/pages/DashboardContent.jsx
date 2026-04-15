import { Box, CalendarDays, Bell } from "lucide-react";

const StatCard = ({
  title,
  icon: Icon,
  subtitle,
  pending,
  approved,
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-[4px] border border-[#2b3426] bg-gradient-to-r from-[#0d170f] to-[#101b12] px-3 py-4 shadow-sm transition-all duration-300 ${className}`}
    >
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-medium uppercase tracking-wide text-[#dccb78]">
          {title}
        </p>

        <Icon size={15} strokeWidth={1.8} className="text-[#f0c400]" />
      </div>

      <div className="mt-8">
        <h2 className="text-[20px] font-extrabold leading-none text-[#f5f2e9]">
          0
        </h2>

        {subtitle ? (
          <p className="mt-3 text-[12px] text-[#f5f2e9]">{subtitle}</p>
        ) : (
          <div className="mt-3 space-y-1 text-[12px]">
            <div className="text-[#f0c400]">◌ {pending} Pending</div>
            <div className="text-[#00df66]">◌ {approved} Approved</div>
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="w-full px-3 pt-4 pb-8">
      {/* HEADER */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-[4px] bg-[#f0c400]" />
        <h2 className="text-[22px] font-extrabold uppercase tracking-[2px] text-[#f5f2e9]">
          COMMAND DASHBOARD
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          title="TOTAL ORDERS"
          icon={Box}
          pending={0}
          approved={0}
          className="min-h-[132px]"
        />

        <StatCard
          title="LEAVE APPS"
          icon={CalendarDays}
          pending={0}
          approved={0}
          className="min-h-[132px]"
        />

        <StatCard
          title="ANNOUNCEMENTS"
          icon={Bell}
          subtitle="View all comms"
          className="col-span-2 min-h-[110px]"
        />
      </div>
    </div>
  );
};

export default DashboardContent;