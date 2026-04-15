import { CalendarDays, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeaveApplications = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0c160d] to-[#071009] p-8 sm:p-10 lg:p-12 text-white">
      
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-6">
          <div className="h-14 w-1 bg-[#f0c400]" />
          <h2 className="text-4xl font-black uppercase tracking-wider text-[#f3f0e8]">
            Leave Applications
          </h2>
        </div>

        <button 
          onClick={() => navigate('/leave/apply')}
          className="flex items-center gap-2 h-12 px-8 bg-[#f0c400] text-black font-bold uppercase text-sm tracking-wide hover:brightness-105 transition-all duration-200 rounded"
        >
          <CalendarDays size={20} />
          Apply for Leave
        </button>
      </div>

      <div className="mb-12 p-6 rounded-lg border border-[#6b5205] bg-[#2a2307]">
        <div className="flex items-start gap-4">
          <Info size={24} className="text-[#f0c400] mt-1 flex-shrink-0" />

          <div>
            <h3 className="text-2xl font-semibold text-[#f0c400]">
              Leave Application Notice
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-[#d6c77a]">
              Loved ones and family members may also submit leave requests on behalf of a soldier using the soldier's service number.{" "}
              <span 
                className="underline hover:no-underline cursor-pointer transition"
                onClick={() => navigate('/leave/apply')}
              >
                Submit a leave request here.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-64 rounded-lg border border-[#2a3526] bg-gradient-to-r from-[#162317] to-[#111c12] p-12 text-center">
        <div>
          <CalendarDays size={64} className="mx-auto mb-6 text-[#8e927f]" />

          <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-[#d7d4c8]">
            No Leave Applications
          </h3>

          <p className="text-lg text-[#9ea293]">
            Submit a leave request using the button above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeaveApplications;
