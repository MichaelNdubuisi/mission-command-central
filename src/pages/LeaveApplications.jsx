import { CalendarDays, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeaveApplications = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[linear-gradient(90deg,#0c160d_0%,#071009_100%)] px-[50px] pt-[45px] pb-[50px] text-white">
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <div className="h-[56px] w-[6px] bg-[#f0c400]" />
          <h2 className="text-[40px] font-extrabold uppercase tracking-[0.06em] text-[#f3f0e8]">
            LEAVE APPLICATIONS
          </h2>
        </div>

        {/* BUTTON */}
        <button 
          onClick={() => navigate('/leave/apply')}
          className="flex items-center gap-3 bg-[#f0c400] px-[24px] py-[16px] text-[18px] font-bold uppercase text-black hover:opacity-90"
        >
          <CalendarDays size={24} />
          APPLY FOR LEAVE
        </button>
      </div>

      {/* NOTICE BOX */}
      <div className="mt-[40px] rounded-[6px] border border-[#6b5205] bg-[#2a2307] px-[28px] py-[22px]">
        <div className="flex items-start gap-5">
          <Info size={28} className="text-[#f0c400] mt-[4px]" />

          <div>
            <p className="text-[60px] font-semibold text-[#f0c400]">
              Leave Application Notice
            </p>

            <p className="mt-[8px] text-[18px] text-[#d6c77a] leading-[1.5]">
              Loved ones and family members may also submit leave requests on behalf of a soldier using the soldier's service number.{" "}
              <span 
                className="underline cursor-pointer"
                onClick={() => navigate('/leave/apply')}
              >
                Submit a leave request here.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* EMPTY STATE CARD */}
      <div className="mt-[45px] rounded-[8px] border border-[#2a3526] bg-[linear-gradient(90deg,#162317_0%,#111c12_100%)] px-[32px] py-[140px] flex flex-col items-center justify-center text-center">
        
        {/* ICON */}
        <CalendarDays size={72} className="text-[#8e927f]" />

        {/* TEXT */}
        <h3 className="mt-[28px] text-[24px] font-extrabold uppercase tracking-[0.05em] text-[#d7d4c8]">
          NO LEAVE APPLICATIONS
        </h3>

        <p className="mt-[12px] text-[20px] text-[#9ea293]">
          Submit a leave request using the button above.
        </p>
      </div>
    </section>
  );
};

export default LeaveApplications;
