"use client";

import { Check, UploadCloud, X } from "lucide-react";
import { useState } from "react";
import type { Role } from "../data";

export default function ApplicationModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full rounded-2xl border border-violet-500/30 bg-[#0f131c] p-6 sm:p-8 text-[#dfe2ee] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Application Received</h3>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              Your application for <span className="text-white font-semibold">{role.title}</span> has been queued for direct review by our founding engineering team.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-xl bg-violet-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-violet-500 transition-all"
            >
              Return to Openings
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest">{role.team} · {role.reqId}</span>
              <h2 className="text-xl font-bold text-white mt-1">Apply for {role.title}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{role.location} · {role.compensation}</p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Full Legal Name</label>
                <input
                  required
                  defaultValue="Linus Torvalds"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors"
                  placeholder="Ada Lovelace"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Email or GitHub / Personal URL</label>
                <input
                  required
                  defaultValue="github.com/torvalds"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors"
                  placeholder="ada@domain.io"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Resume / CV (PDF, DOCX max 15MB)</label>
                <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-5 text-center cursor-pointer hover:bg-white/10 transition-colors">
                  <UploadCloud className="h-6 w-6 text-violet-400 mb-2" />
                  <span className="text-xs font-medium text-gray-200">
                    {fileName ? fileName : "Drag & drop your PDF / CV or click to browse"}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1">Supported formats: PDF, DOCX (Max 15MB)</span>
                  <input required type="file" accept=".pdf,.docx" onChange={handleFileChange} className="sr-only" />
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 py-3 text-xs font-semibold text-white transition-all shadow-lg shadow-violet-600/20"
              >
                Submit Application 🚀
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
