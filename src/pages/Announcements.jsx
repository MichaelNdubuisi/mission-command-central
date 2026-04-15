import { Megaphone, Calendar, Eye, ChevronRight } from "lucide-react";

const mockAnnouncements = [
  {
    id: 1,
    title: "Unit Training Exercise - FTX Thunderstrike",
    date: "2024-02-15",
    category: "Training",
    views: 247,
    excerpt: "All personnel assigned to 1st Battalion are required to attend...",
  },
  {
    id: 2,
    title: "Range Qualification Schedule Updated",
    date: "2024-02-12",
    category: "Training",
    views: 189,
    excerpt: "New qualification dates posted. Sign up required by COB Friday...",
  },
  {
    id: 3,
    title: "Family Day Event - March 10th",
    date: "2024-02-08",
    category: "Events",
    views: 456,
    excerpt: "Post-wide family day at the Warrior Zone. All welcome...",
  },
  {
    id: 4,
    title: "New Equipment SOP Issued",
    date: "2024-02-05",
    category: "Policy",
    views: 312,
    excerpt: "Standard Operating Procedure for M4A1 Carbine maintenance...",
  },
];

const AnnouncementsSection = () => {
  return (
    <section className="min-h-screen p-6 sm:p-8 lg:p-10 text-white">
      <div className="flex items-start gap-4 mb-10">
        <div className="mt-1 h-10 w-1 bg-[#f0c400]" />
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-[#f3f0e8]">
            Announcements
          </h2>
          <p className="mt-2 text-sm text-[#9ea293]">
            Latest command updates, training schedules, and unit news.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {mockAnnouncements.map((announcement) => (
          <article key={announcement.id} className="group rounded-lg border border-[#2a3526] bg-gradient-to-b from-[#162317] to-[#111c12] p-6 hover:border-[#f0c400] hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <Megaphone size={20} className="text-[#f0c400]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#2b2705]/50 text-[#f0c400]">
                    {announcement.category}
                  </span>
                  <Calendar size={14} className="text-[#9ea293]" />
                  <span className="text-xs text-[#9ea293]">{announcement.date}</span>
                </div>
                <h3 className="text-xl font-black leading-tight line-clamp-2 text-[#f5f2e9] group-hover:text-[#f0c400] transition-colors">
                  {announcement.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#d8d5ca] line-clamp-3 mb-4">
              {announcement.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#9ea293]">
                <Eye size={14} />
                <span>{announcement.views.toLocaleString()} views</span>
              </div>
              <ChevronRight size={18} className="text-[#9ea293] group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {mockAnnouncements.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-64 text-center p-12">
          <Megaphone size={64} className="text-[#8e927f] mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-[#d7d4c8]">
            No Announcements
          </h3>
          <p className="text-lg text-[#9ea293] max-w-md">
            Latest command updates will appear here when posted.
          </p>
        </div>
      )}
    </section>
  );
};

export default AnnouncementsSection;

