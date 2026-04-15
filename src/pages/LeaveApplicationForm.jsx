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
      <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#f5f2e9]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[36px] w-full border border-[#2b3627] bg-[#0b140c] px-[12px] text-[13px] text-[#efe9d7] outline-none transition placeholder:text-[#8e927f] focus:border-[#4f6147]"
      />
    </div>
  );
};

const SelectField = ({ label, placeholder, options = [], value, onChange }) => {
  return (
    <div>
      <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#f5f2e9]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="h-[36px] w-full appearance-none border border-[#2b3627] bg-[#0b140c] px-[12px] pr-10 text-[13px] text-[#c9c7bc] outline-none transition focus:border-[#4f6147]"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[#757b6a]"
        />
      </div>
    </div>
  );
};

const TextAreaField = ({ label, placeholder, rows = 4 }) => {
  return (
    <div>
      <label className="mb-[8px] block text-[13px] font-semibold leading-none text-[#f5f2e9]">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none border border-[#2b3627] bg-[#0b140c] px-[12px] py-[10px] text-[13px] text-[#efe9d7] outline-none transition placeholder:text-[#8e927f] focus:border-[#4f6147]"
      />
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */ 
const SectionCard = ({ icon: Icon, title, subtitle, children }) => {
  return (
    <section className="rounded-[2px] border border-[#263121] bg-[linear-gradient(90deg,#142116_0%,#101a11_100%)] px-[23px] py-[24px]">
      <div className="mb-[28px]">
        <div className="flex items-center gap-[10px]">
          <Icon size={15} className="text-[#f0c400]" />
          <h3 className="text-[15px] font-extrabold uppercase tracking-[0.04em] text-[#ccb86d]">
            {title}
          </h3>
        </div>

        <p className="mt-[8px] text-[13px] leading-[1.5] text-[#b7b19a]">
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
    <div className="min-h-screen bg-[linear-gradient(90deg,#0c160d_0%,#081108_100%)] text-white">
      <header className="border-b border-[#212b1f]">
        <div className="mx-auto flex h-[80px] max-w-[1366px] items-center px-[228px]">
          <div className="flex items-center gap-[12px]">
            <Shield
              className="h-[30px] w-[30px] text-[#f0c400]"
              strokeWidth={1.8}
            />

            <div>
              <h1 className="text-[15px] font-extrabold uppercase leading-none tracking-[0.04em] text-[#f6f2e8]">
                U.S. Army Portal
              </h1>
              <p className="mt-[4px] text-[12px] leading-none text-[#c5bc98]">
                Leave Application System
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1366px] px-[260px] pb-16 pt-[30px]">
        <div className="flex items-start gap-[16px]">
          <div className="mt-[2px] h-[36px] w-[4px] bg-[#f0c400]" />

          <div>
            <h2 className="text-[33px] font-extrabold uppercase leading-none tracking-[0.04em] text-[#f5f1e8]">
              Leave Application
            </h2>

            <p className="mt-[12px] max-w-[820px] text-[15px] leading-[1.65] text-[#c1b99b]">
              Submit a leave request for a soldier. This form may be completed by
              the soldier or by a family member / loved one on their behalf.
            </p>
          </div>
        </div>

        <div className="mt-[26px] rounded-[2px] border border-[#6a4d08] bg-[#1d1809] px-[18px] py-[16px]">
          <div className="flex items-start gap-[14px]">
            <AlertCircle
              size={18}
              className="mt-[2px] shrink-0 text-[#f0c400]"
            />

            <p className="text-[14px] font-medium leading-[1.55] text-[#f0c400]">
              You must have the soldier&apos;s official Service Number to submit
              this application. All applications are subject to command approval.
              False information may result in legal action under the UCMJ.
            </p>
          </div>
        </div>

        <div className="mt-[24px]">
          <SectionCard
            icon={User}
            title="Applicant Information"
            subtitle="Information about the person submitting this form"
          >
            <div className="grid grid-cols-1 gap-x-[16px] gap-y-[26px] md:grid-cols-2">
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

              <Field
                label="Email Address"
                placeholder="email@example.com"
                type="email"
              />

              <Field
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
          </SectionCard>
        </div>

        <div className="mt-[24px]">
          <SectionCard
            icon={ShieldCheck}
            title="Soldier Information"
            subtitle="Details of the soldier for whom leave is being requested"
          >
            <div className="grid grid-cols-1 gap-x-[16px] gap-y-[26px] md:grid-cols-2">
              <Field label="Soldier Full Name" placeholder="Enter full name" />
              <Field label="Service Number" placeholder="Enter service number" />
              <Field label="Rank" placeholder="Enter rank" />
              <Field label="Unit / Command" placeholder="Enter unit or command" />
              <Field label="Duty Station" placeholder="Enter duty station" />
              <Field
                label="Commanding Officer"
                placeholder="Enter commanding officer name"
              />
            </div>
          </SectionCard>
        </div>

        <div className="mt-[24px]">
          <SectionCard
            icon={CalendarDays}
            title="Leave Details"
            subtitle="Specify the requested leave period and reason"
          >
            <div className="grid grid-cols-1 gap-x-[16px] gap-y-[26px] md:grid-cols-2">
<Field
                label="Number of Leave Days"
                type="number"
                min="1"
                placeholder="e.g. 7"
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

              <Field
                label="Destination / Location"
                placeholder="City, State / Country"
              />
            </div>

            <div className="mt-[20px] rounded-[2px] border border-[#6a4d08] bg-[#1d1809] px-[16px] py-[14px]">
              <p className="text-[13px] uppercase tracking-[0.04em] text-[#ccb86d]">
                Leave Period Charge
              </p>

              <div className="mt-[8px] flex flex-col gap-[4px] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-[#d6cfb8]">
                  Rate: <span className="font-semibold text-[#f0c400]">$40</span> per day
                </p>

                <p className="text-[14px] font-bold text-[#f5f1e8]">
                  Total: ${totalCharge.toLocaleString()}
                </p>
              </div>

              <p className="mt-[6px] text-[12px] text-[#aaa48e]">
                Selected: {totalDays} day{totalDays !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="mt-[26px]">
              <TextAreaField
                label="Reason for Leave Request"
                placeholder="Provide a clear explanation for this leave request..."
                rows={5}
              />
            </div>
          </SectionCard>
        </div>

        <div className="mt-[24px]">
          <SectionCard
            icon={FileText}
            title="Additional Information"
            subtitle="Optional details or documentation notes"
          >
            <TextAreaField
              label="Additional Notes"
              placeholder="Add any extra information that may support this application..."
              rows={4}
            />

            <div className="mt-[20px] flex items-start gap-[10px] rounded-[2px] border border-[#2b3627] bg-[#0b140c] px-[14px] py-[14px]">
              <input
                id="consent"
                type="checkbox"
                className="mt-[2px] h-[15px] w-[15px] accent-[#f0c400]"
              />

              <label
                htmlFor="consent"
                className="text-[13px] leading-[1.6] text-[#cfc8b2]"
              >
                I confirm that the information submitted in this application is
                accurate to the best of my knowledge, and I understand that this
                request is subject to official review and command approval.
              </label>
            </div>
          </SectionCard>
        </div>

        <div className="mt-[28px] flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button className="h-[40px] border border-[#374234] bg-[#121a12] px-[20px] text-[13px] font-bold uppercase tracking-[0.04em] text-[#d5d0c1] transition hover:bg-[#182118]">
            Save Draft
          </button>

          <button className="flex h-[40px] items-center justify-center gap-2 bg-[#f0c400] px-[20px] text-[13px] font-bold uppercase tracking-[0.04em] text-black transition hover:opacity-90">
            <Send size={14} />
            Submit Leave Application
          </button>
        </div>
      </main>
    </div>
  );
};

export default LeaveApplicationForm;