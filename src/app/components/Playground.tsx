
"use client";

import { useState, useEffect } from "react";

interface ProfileData {
  name: string;
  role: string;
  avatarIcon: string;
}

const DEMO_STEPS: ProfileData[] = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    avatarIcon: "person",
  },
  {
    name: "Elena Rostova",
    role: "Staff AI Engineer",
    avatarIcon: "psychology",
  },
  {
    name: "Marcus Chen",
    role: "VP of Engineering",
    avatarIcon: "terminal",
  },
];

import JsonEditor from "./Playground/JsonEditor";
import MappingEngine from "./Playground/MappingEngine";
import LivePreview from "./Playground/LivePreview";

export default function Playground() {
      const [stepIndex, setStepIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState(DEMO_STEPS[0].name);
  const [displayedRole, setDisplayedRole] = useState(DEMO_STEPS[0].role);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
   const timeoutId: NodeJS.Timeout | undefined = undefined;
    

    const runAnimationCycle = async () => {
      // 1. Wait 3 seconds to let user view current state
      await new Promise((r) => setTimeout(r, 3000));
      setIsTyping(true);

      const nextIndex = (stepIndex + 1) % DEMO_STEPS.length;
      const targetData = DEMO_STEPS[nextIndex];

      // 2. Backspace Name
      let currentName = DEMO_STEPS[stepIndex].name;
      while (currentName.length > 0) {
        currentName = currentName.slice(0, -1);
        setDisplayedName(currentName);
        await new Promise((r) => setTimeout(r, 45));
      }

      // 3. Type new Name
      for (let i = 1; i <= targetData.name.length; i++) {
        setDisplayedName(targetData.name.slice(0, i));
        await new Promise((r) => setTimeout(r, 65));
      }

      await new Promise((r) => setTimeout(r, 300));

      // 4. Backspace Role
      let currentRole = DEMO_STEPS[stepIndex].role;
      while (currentRole.length > 0) {
        currentRole = currentRole.slice(0, -1);
        setDisplayedRole(currentRole);
        await new Promise((r) => setTimeout(r, 35));
      }

      // 5. Type new Role
      for (let i = 1; i <= targetData.role.length; i++) {
        setDisplayedRole(targetData.role.slice(0, i));
        await new Promise((r) => setTimeout(r, 55));
      }

      setIsTyping(false);
      setStepIndex(nextIndex);
    };

    runAnimationCycle();
    return () => clearTimeout(timeoutId);
  }, [stepIndex]);

  const activeAvatar = DEMO_STEPS[stepIndex].avatarIcon;

  return (
    <section className="w-full max-w-container-max mx-auto px-md py-xl relative z-10" id="playground">
      <div className="text-center mb-xl">
        <div className="font-label-mono text-label-mono text-electric-cyan uppercase mb-xs tracking-wider">Interactive API Playground</div>
        <h2 className="font-display-lg text-headline-md text-on-surface">Map your data in real-time.</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
        <JsonEditor displayedName={displayedName} displayedRole={displayedRole} />
        <MappingEngine isTyping={isTyping}/>
        <LivePreview activeAvatar={activeAvatar} displayedName={displayedName} displayedRole={displayedRole}/>
      </div>
    </section>
  );
}