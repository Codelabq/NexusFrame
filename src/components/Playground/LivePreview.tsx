import {User,CodeXml,BriefcaseMedical} from "lucide-react";

export default function LivePreview({displayedName, displayedRole,activeAvatar}: {displayedName: string, displayedRole: string, activeAvatar: string}) {
    let avatarIcon;
    if(activeAvatar === 'person') {
        avatarIcon = <User className="text-electric-cyan text-3xl" />;
    }else if(activeAvatar === 'psychology') {
        avatarIcon = <BriefcaseMedical className="text-electric-cyan text-3xl" />;
    }else{
        avatarIcon = <CodeXml className="text-electric-cyan text-3xl" />;
    }

    return (
    <div className="glass-panel rounded-lg p-md flex flex-col items-center justify-center bg-gradient-to-br from-electric-cyan/5 to-transparent">
      <div className="w-full max-w-[240px] bg-surface-container-lowest border border-electric-cyan/30 rounded-xl p-md shadow-xl animate-float">
        <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-electric-cyan/20 mx-auto mb-md flex items-center justify-center">
          <span className="material-symbols-outlined text-electric-cyan text-3xl">
            {avatarIcon}
          </span>
        </div>
        <div className="text-center">
          <div className="font-headline-sm text-on-surface text-lg mb-1">{displayedName || 'placeholder'}</div>
          <div className="font-label-mono text-xs text-on-surface-variant uppercase tracking-tighter">{displayedRole || 'placeholder'}</div>
        </div>
        <div className="mt-md pt-md border-t border-stroke-cyan flex justify-center">
          <button className="text-[10px] font-label-mono text-electric-cyan uppercase border border-electric-cyan/30 px-sm py-1 rounded hover:bg-electric-cyan/10 transition-colors">View Profile</button>
        </div>
      </div>
      <div className="mt-md font-label-mono text-[10px] text-on-surface-variant uppercase">Live Preview</div>
    </div>
  );
}
