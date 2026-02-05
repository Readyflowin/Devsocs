import React from 'react';
import { Shield, FileText, Lock, Scale } from 'lucide-react';

const LegalSection = () => {
  return (
    <div className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-slate-800 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-slate-500" />
            Legal Disclaimer & Data Transparency
          </h2>
          <p className="text-slate-500 text-xs mt-2 max-w-2xl mx-auto">
            We are committed to full compliance with Indian Cyber Laws. Please read how this data was aggregated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Section 1: Data Collection Method */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-3 text-sm">
              <FileText className="w-4 h-4 text-blue-600" />
              Source & Collection Methodology
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              All data contained in the "DevSocs Verified Database" was <strong>manually curated and aggregated</strong> by our research team. We strictly <strong>DO NOT</strong> use bots, spiders, or automated scrapers to harvest data, ensuring full compliance with the <strong>Information Technology Act, 2000 (Section 43)</strong> regarding unauthorized access. Every entry is a result of manual verification of public advertisements.
            </p>
          </div>

          {/* Section 2: Privacy Law Compliance */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-3 text-sm">
              <Scale className="w-4 h-4 text-green-600" />
              DPDP Act (2023) Compliance
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              This database consists exclusively of <strong>Business Identities</strong> and Commercial Information (e.g., Business Instagram Handles) that have been made publicly available by the entity for advertising purposes. This data falls under the exemption of <strong>Section 3(c)(ii) of the Digital Personal Data Protection Act, 2023</strong>. We do not sell private, non-public personal data of individuals.
            </p>
          </div>

          {/* Section 3: Nature of Data */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-3 text-sm">
              <Lock className="w-4 h-4 text-orange-600" />
              No Private Personal Profiles
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              The "Leads" provided are strictly <strong>Active Advertisers</strong> (Businesses/Creators running ads). We have filtered out private personal accounts to the best of our ability. The intent of this data is solely for B2B (Business-to-Business) market research and professional outreach.
            </p>
          </div>

          {/* Section 4: User Responsibility */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-3 text-sm">
              <Shield className="w-4 h-4 text-red-600" />
              Limitation of Liability
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              DevSocs provides this data as an informational resource ("Swipe File"). We do not guarantee specific conversion rates or responses from these businesses. The user assumes full responsibility for their outreach methods. We strictly condemn spamming and advise all users to adhere to professional communication standards.
            </p>
          </div>

        </div>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            DevSocs © 2026 • Compliant with Indian Laws • India
          </p>
        </div>

      </div>
    </div>
  );
};

export default LegalSection;