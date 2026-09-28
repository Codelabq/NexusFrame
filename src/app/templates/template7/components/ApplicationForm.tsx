"use client";
import { useState } from "react";
import { Check, FileUp, Send } from "lucide-react";
import FormField from "./FormField";

interface ApplicationField {
  applicationFieldLabel: string;
  applicationFieldPlaceholder: string;
  applicationFieldName: string;
  applicationFieldType: string;
}

interface ApplicationFormProps {
  fields: ApplicationField[];
  uploadLabel: string;
  errorType: string;
  errorSize: string;
  submitLabel: string;
  successMessage: string;
}

export default function ApplicationForm({ fields, uploadLabel, errorType, errorSize, submitLabel, successMessage }: ApplicationFormProps) { const [submitted, setSubmitted] = useState(false); const [fileError, setFileError] = useState(""); const validateFile = (event: React.ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (!file) return; if (file.type !== "application/pdf") { setFileError(errorType); event.target.value = ""; return; } if (file.size > 8 * 1024 * 1024) { setFileError(errorSize); event.target.value = ""; return; } setFileError(""); }; if (submitted) return <div className="mt-5 border border-[#c8c5ca] bg-white p-4 text-[13px] leading-5"><Check className="mb-2 h-5 w-5" />{successMessage}</div>; return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-4 space-y-3">{fields.map((field) => <FormField label={field.applicationFieldLabel} key={field.applicationFieldName}><input required name={field.applicationFieldName} type={field.applicationFieldType} placeholder={field.applicationFieldPlaceholder} className="w-full rounded border border-[#e5e5e5] bg-white px-3 py-2 text-[13px] outline-none transition-colors placeholder:font-['JetBrains_Mono'] placeholder:text-[#78767b] focus:border-black" /></FormField>)}<FormField label={uploadLabel}><label className="flex cursor-pointer items-center justify-center gap-2 rounded border border-dashed border-[#c8c5ca] bg-white px-3 py-4 text-center text-[12px] text-[#47464a] transition-colors hover:bg-[#e8e8e8]"><FileUp className="h-4 w-4" /><span>{fileError || "Click to upload PDF (max 8MB)"}</span><input required type="file" accept="application/pdf" onChange={validateFile} className="sr-only" /></label></FormField><button type="submit" className="flex w-full items-center justify-center gap-2 rounded bg-black py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#27272a]"><Send className="h-4 w-4" />{submitLabel}</button></form>; }
