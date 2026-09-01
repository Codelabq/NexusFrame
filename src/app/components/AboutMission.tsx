export default function AboutMission() {
  return (
    <section className="w-full max-w-container-max mx-auto px-md py-xl relative z-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          <div className="font-label-mono text-label-mono text-secondary uppercase mb-sm">Our Mission</div>
          <h2 className="font-display-lg text-headline-md text-on-surface mb-md">Built for developers, by developers</h2>
          <div className="space-y-md text-on-surface-variant font-body-lg">
            <p>
              Nexus was born out of the frustration of writing boilerplate UI for internal tools. We spent more time
              building tables and forms than actually solving core business problems.
            </p>
            <p>
              Our AI-powered schema mapper uses deep learning to infer UI intent from JSON payloads, automatically
              generating the most effective visual representation for your data.
            </p>
            <ul className="list-disc pl-5 mt-md space-y-2">
              <li>
                <strong className="text-on-surface">50+ production-ready templates</strong> across 12 categories
                (E-commerce, FinTech, Auth, Dashboards, etc.).
              </li>
              <li>
                <strong className="text-on-surface">Sub-second schema mapping</strong> for instant visual feedback.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Code Panel */}
        <div className="glass-panel rounded-lg overflow-hidden border-stroke-cyan card-hover-effect">
          <div className="bg-surface-container-highest px-sm py-xs border-b border-stroke-cyan flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff7777]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffff80]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00dce6]"></div>
            </div>
            <div className="font-label-mono text-xs text-on-surface-variant">README.md</div>
          </div>
          <div className="p-md font-code-block text-code-block text-on-surface-variant">
            <div className="text-electric-cyan mb-xs"># Nexus Core</div>
            <div className="mb-sm">The engine that turns endpoints into experiences.</div>
            <div className="text-secondary">$ npm install @nexus/engine</div>
            <div className="mt-md opacity-50">
              {'//'} Initializing schema mapper...<br />
                 {'//'}  Detecting REST patterns...<br />
                {'//'}  Generating React components...<br />
                {'//'}  Done in 142ms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
