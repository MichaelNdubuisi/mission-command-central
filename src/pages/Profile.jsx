import { User, Shield, Mail, Phone, MapPin, Edit3, Save, Camera } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="min-h-screen p-6 sm:p-8 lg:p-10 text-white">
      <div className="flex items-start gap-4 mb-12">
        <div className="mt-1 h-10 w-1 bg-[#f0c400]" />
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-[#f3f0e8]">
            My Profile
          </h2>
          <p className="mt-2 text-sm text-[#9ea293]">
            Manage your account information and preferences.
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        {/* AVATAR & BASIC INFO */}
        <div className="mb-10 p-8 rounded-xl border border-[#2a3526] bg-gradient-to-r from-[#162317] to-[#111c12]">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="relative mb-6 md:mb-0 md:flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#5b5207] to-[#f0c400]/20 flex items-center justify-center text-3xl font-black uppercase text-[#f0c400]">
                JD
              </div>
              <button className="absolute bottom-2 right-2 p-2 rounded-full bg-[#f0c400]/20 hover:bg-[#f0c400]/30 transition-all duration-200">
                <Camera size={16} className="text-[#f0c400]" />
              </button>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black text-[#f5f2e9]">SPC Johnathan Doe</h1>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#2b2705] text-[#f0c400]">
                  Verified
                </span>
              </div>
              <p className="text-sm text-[#9ea293]">123-45-6789</p>
              <div className="flex flex-wrap gap-4 text-sm text-[#d8d5ca]">
                <span>1st Platoon, Alpha Company</span>
                <span>Fort Liberty, NC</span>
              </div>
            </div>
          </div>
        </div>

        {/* EDIT TOGGLES */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 h-12 rounded-lg border border-[#2f392d] bg-transparent text-sm font-bold uppercase tracking-wide text-[#d8d5cc] hover:border-[#465041] hover:bg-white/5 transition-all duration-200">
            <Edit3 size={18} className="mr-2 inline" />
            Edit Profile
          </button>
          <button className="h-12 px-8 rounded-lg border border-[#d4aa11] bg-[#d4aa11] text-sm font-black uppercase tracking-wide text-black hover:brightness-105 transition-all duration-200">
            <Save size={18} className="mr-2 inline" />
            Save Changes
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-[#263121] bg-gradient-to-r from-[#142116] to-[#101a11]">
              <h3 className="flex items-center gap-2 mb-6 text-lg font-black uppercase tracking-wider text-[#f5f2e9]">
                <Mail size={20} className="text-[#f0c400]" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#9ea293] mb-1">Email</label>
                  <div className="flex items-center gap-3 p-3 rounded border border-[#2b3627] bg-[#0b140c]">
                    <Mail size={16} className="text-[#9ea293] flex-shrink-0" />
                    <span className="text-sm text-[#efe9d7]">john.doe.army.mil@example.com</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#9ea293] mb-1">Phone</label>
                  <div className="flex items-center gap-3 p-3 rounded border border-[#2b3627] bg-[#0b140c]">
                    <Phone size={16} className="text-[#9ea293] flex-shrink-0" />
                    <span className="text-sm text-[#efe9d7]">(910) 555-0123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-[#263121] bg-gradient-to-r from-[#142116] to-[#101a11]">
              <h3 className="flex items-center gap-2 mb-6 text-lg font-black uppercase tracking-wider text-[#f5f2e9]">
                <Shield size={20} className="text-[#f0c400]" />
                Assignment Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#9ea293] mb-1">Unit</label>
                  <div className="p-3 rounded border border-[#2b3627] bg-[#0b140c]">
                    <span className="text-sm text-[#efe9d7]">1st Platoon, Alpha Company, 1-501 IN</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#9ea293] mb-1">Duty Station</label>
                  <div className="flex items-center gap-3 p-3 rounded border border-[#2b3627] bg-[#0b140c]">
                    <MapPin size={16} className="text-[#9ea293] flex-shrink-0" />
                    <span className="text-sm text-[#efe9d7]">Fort Liberty, NC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREFERENCES */}
        <div className="p-6 rounded-xl border border-[#263121] bg-gradient-to-r from-[#142116] to-[#101a11]">
          <h3 className="flex items-center gap-2 mb-8 text-xl font-black uppercase tracking-wider text-[#f5f2e9]">
            <User size={24} className="text-[#f0c400]" />
            Account Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input type="checkbox" className="h-4 w-4 accent-[#f0c400]" />
                <span className="text-sm text-[#d8d5ca] group-hover:text-[#f0c400] transition-colors">Email notifications for order updates</span>
              </label>
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input type="checkbox" className="h-4 w-4 accent-[#f0c400]" checked />
                <span className="text-sm text-[#d8d5ca] group-hover:text-[#f0c400] transition-colors">Receive training announcements</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input type="checkbox" className="h-4 w-4 accent-[#f0c400]" />
                <span className="text-sm text-[#d8d5ca] group-hover:text-[#f0c400] transition-colors">SMS alerts for leave approval</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="h-4 w-4 accent-[#f0c400]" checked />
                <span className="text-sm text-[#d8d5ca] group-hover:text-[#f0c400] transition-colors">Dark mode preference</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

