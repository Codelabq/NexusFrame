'use client'
export default function JsonEditor({displayedName, displayedRole}: {displayedName: string, displayedRole: string}) {
  return (
    <div className="glass-panel rounded-lg flex flex-col overflow-hidden border border-stroke-cyan">
      <div className="bg-surface-container-highest px-sm py-xs border-b border-stroke-cyan flex items-center">
        <div className="flex space-x-2 mr-md">
          <div className="w-3 h-3 rounded-full bg-error/50"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim/50"></div>
          <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
        </div>
        <div className="flex-grow bg-surface-container-lowest rounded px-xs py-1 text-xs font-code-block text-on-surface-variant truncate">
          GET https://api.example.com/v1/user
        </div>
      </div>
      <div className="p-md font-code-block text-code-block flex-grow">
        <pre className="text-on-surface-variant">
{`{
  "user": {
    "profile": {
      "name": "${displayedName}",
      "role": "${displayedRole}"
    }
  }
}`}
        </pre>
      </div>
    </div>
  );
}
