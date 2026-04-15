import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#071009] text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gradient-to-r from-[#0c160d] to-[#071009] p-6 sm:p-10 lg:pl-[30px] lg:pr-[24px] lg:pt-[28px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

