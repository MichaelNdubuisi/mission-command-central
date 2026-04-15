import {
  Shield,
  AlertCircle,
  User,
  ShieldCheck,
  CalendarDays,
  FileText,
  Send,
  ChevronDown,
} from "lucide-react";
import { useMemo, useState } from "react";

const DAILY_RATE = 40;

const Field = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#f5f2e9]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded border border-[#2b3627] bg-[#0b140c] px-3 text-sm text-[#efe9d7] outline-none transition placeholder:text-[#8e927f] focus:border-[#4f6147]"
      />
    </div>
  );
};

const SelectField = ({ label, placeholder, options = [], value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#f5f2e9]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="h-10 w-full appearance-none rounded border border-[#2b3627] bg-[#0b140c] px-3 pr-10 text-sm text-[#efe9d7] outline-none transition focus:border-[#4f6147]"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#757b6a]"
        />
      </div>
    </div>
  );
};

const TextAreaField = ({ label, placeholder, rows = 4 }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#f5f2e9]">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded border border-[#2b3627] bg-[#0b140c] px-3 py-3 text-sm text-[#efe9d7] outline-none transition placeholder:text-[#8e927f] focus:border-[#4f6147]"
      />
    </div>
  );
};

const SectionCard = ({ icon: Icon, title, subtitle, children }) => {
  return (
    <section className="rounded-lg border border-[#263121] bg-gradient-to-r from-[#142116] to-[#101a11] p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-[#f0c400]" />
          <h3 className="text-sm font-black uppercase tracking-wider text-[#ccb86d]">
            {title}
          </h3>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[#b7b19a]">
          {subtitle}
        </p>
      </div>

      {children}
    </section>
  );
};

const LeaveApplicationForm = () => {
  const [totalDaysInput, setTotalDaysInput] = useState("");
  const [relationship, setRelationship] = useState("");
  const [leaveType, setLeaveType] = useState(""); 

  const totalDays = parseInt(totalDaysInput) || 0;
  const totalCharge = useMemo(() => totalDays * DAILY_RATE, [totalDays]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c160d] to-[#081108] text-white">
      <header className="border-b border-[#212b1f]">
        <div className="mx-auto flex h-20 max-w-6xl items-center px-6 sm:px-12">
          <div className="flex items-center gap-3">
            <Shield className="h-7 w-7 text-[#f0c400]" strokeWidth={1.8} />
            <div>
              <h1 className="text-sm font-black uppercase tracking-wider text-[#f6f2e8]">
                U.S. Army Portal
              </h1>
              <p className="mt-1 text-xs text-[#c5bc98]">
                Leave Application System
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-12 lg:px-20">
        <div className="flex items-start gap-4 mb-8">
          <div className="mt-1 h-9 w-1 bg-[#f0c400]" />
          <div>
            <h2 className="text-3xl font-black uppercase tracking-wider text-[#f5f1e8]">
              Leave Application
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c1b99b]">
              Submit a leave request for a soldier. This form may be completed by
              the soldier or by a family member / loved one on their behalf.
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-[#6a4d08] bg-[#1d1809] p-6">
          <div className="flex items-start gap-4">
            <AlertCircle size={20} className="mt-1 text-[#f0c400] flex-shrink-0" />
            <p className="text-sm font-medium leading-relaxed text-[#f0c400]">
              You must have the soldier's official Service Number to submit
              this application. All applications are subject to command approval.
              False information may result in legal action under the UCMJ.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <SectionCard
            icon={User}
            title="Applicant Information"
            subtitle="Information about the person submitting this form"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Full Name" placeholder="First Last" />
              <SelectField
                label="Relationship to Soldier"
                placeholder="Select relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                options={[
                  "Self",
                  "Spouse",
                  "Parent",
                  "Sibling",
                  "Guardian",
                  "Other Family Member",
                ]}
              />
              <Field label="Email Address" placeholder="email@example.com" type="email" />
              <Field label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
          </SectionCard>

          <SectionCard
            icon={ShieldCheck}
            title="Soldier Information"
            subtitle="Details of the soldier for whom leave is being requested"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Soldier Full Name" placeholder="Enter full name" />
              <Field label="Service Number" placeholder="Enter service number" />
              <Field label="Rank" placeholder="Enter rank" />
              <Field label="Unit / Command" placeholder="Enter unit or command" />
              <Field label="Duty Station" placeholder="Enter duty station" />
              <Field label="Commanding Officer" placeholder="Enter commanding officer name" />
            </div>
          </SectionCard>

          <SectionCard
            icon={CalendarDays}
            title="Leave Details"
            subtitle="Specify the requested leave period and reason"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field
                label="Number of Leave Days"
                type="number"
                min="1"
                placeholder="7"
                value={totalDaysInput}
                onChange={(e) => setTotalDaysInput(e.target.value)}
              />
              <SelectField
                label="Leave Type"
                placeholder="Select leave type"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                options={[
                  "Annual Leave",
                  "Emergency Leave",
                  "Medical Leave",
                  "Compassionate Leave",
                  "Administrative Leave",
                ]}
              />
              <Field label="Destination / Location" placeholder="City, State / Country" />
            </div>

            <div className="mt-8 rounded-lg border border-[#6a4d08] bg-[#1d1809] p-4">
              <p className="text-xs uppercase tracking-wider text-[#ccb86d]">
                Leave Period Charge
              </p>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm">
                  Rate: <span className="font-semibold text-[#f0c400]">$40</span> per day
                </p>

                <p className="text-lg font-bold text-[#f5f1e8]">
                  Total: ${totalCharge.toLocaleString()}
                </p>
              </div>

              <p className="mt-2 text-xs text-[#aaa48e]">
                Selected: {totalDays} day{totalDays !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="mt-8">
              <TextAreaField
                label="Reason for Leave Request"
                placeholder="Provide a clear explanation for this leave request..."
                rows={4}
              />
            </div>
          </SectionCard>

          <SectionCard
            icon={FileText}
            title="Additional Information"
            subtitle="Optional details or documentation notes"
          >
            <TextAreaField
              label="Additional Notes"
              placeholder="Add any extra information that may support this application..."
              rows={3}
            />

            <div className="mt-6 rounded-lg border border-[#2b3627] bg-[#0b140c] p-4">
              <label className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#f0c400]"
                />
                <span className="text-sm leading-relaxed text-[#cfc8b2]">
                  I confirm that the information submitted in this application is
                  accurate to the best of my knowledge, and I understand that this
                  request is subject to official review and command approval.
                </span>
              </label>
            </div>
          </SectionCard>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end">
          <button className="h-11 rounded border border-[#374234] bg-[#121a12] px-8 text-sm font-bold uppercase tracking-wide text-[#d5d0c1] transition hover:bg-[#182118]">
            Save Draft
          </button>

          <button className="flex h-11 items-center justify-center gap-2 bg-[#f0c400] px-8 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-105">
            <Send size={16} />
            Submit Leave Application
          </button>
        </div>
      </main>
    </div>
  );
};

export default LeaveApplicationForm;
