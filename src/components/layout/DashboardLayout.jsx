import { useAuth } from "../../contexts/AuthContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, toggleSidebar, setToggleSidebar } = useAuth();

  const closeMobileMenu = () => {
    setToggleSidebar(false);
  };

  return (
    <div className="bg-[#071009] text-white min-h-screen">
      <Navbar />
      <div className="flex lg:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0 border-r border-[#283122]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-14 p-4 sm:p-6 lg:p-8 xl:p-10 min-h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Mobile Sidebar Overlay */}
        {toggleSidebar && isAuthenticated && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={closeMobileMenu}
            />
            <div className="fixed left-0 top-0 bottom-0 z-50 w-72 lg:hidden shadow-2xl">
              <Sidebar onClose={closeMobileMenu} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;

