import {LayoutTemplate, Webhook,Palette} from 'lucide-react'

const features = [
  {
    number: "01",
    label: "01 / Templates",
    icon: <LayoutTemplate/>,
    title: "20+ Interactive Templates",
    description:
      "Pre-built components for dashboards, forms, and analytics designed for high-performance data visualization.",
    align: "left",
  },
  {
    number: "02",
    label: "02 / Connectivity",
    icon: <Webhook/>,
    title: "Universal API Support",
    description:
      "Seamless integration with REST, GraphQL, and even local JSON payloads for rapid prototyping and production.",
    align: "right",
  },
  {
    number: "03",
    label: "03 / Theming",
    icon: <Palette/>,
    title: "Dynamic Color Schemes",
    description:
      "Choose and customize themes to match any brand identity with our intelligent design token system.",
    align: "left",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-container-max mx-auto px-md py-xl relative z-10" id="features">
      <div className="text-center mb-xl">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Engineered for flexibility.</h2>
      </div>

      <div className="max-w-[900px] mx-auto space-y-lg">
        {features.map((feature) => (
          <div key={feature.number}>
            {/* Feature Row */}
            <div
              className={`flex flex-col md:flex-row items-center gap-md group ${
                feature.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-full md:w-1/2 flex justify-center ${feature.number !== '02' ? 'md:justify-end' : 'md:justify-start' }`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-electric-cyan/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 rounded-xl glass-panel flex items-center justify-center border-electric-cyan/30">
                    <span className="material-symbols-outlined text-electric-cyan text-3xl">
                      {feature.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 text-center ${feature.align === "right" ? "md:text-right" : "md:text-left"}`}>
                <div className="font-label-mono text-xs text-electric-cyan uppercase tracking-widest mb-xs">
                  {feature.label}
                </div>
                <h3 className="font-display-lg text-headline-sm text-on-surface mb-sm">{feature.title}</h3>
                <p className="text-on-surface-variant font-body-md max-w-[400px] mx-auto md:mx-0">
                  {feature.description}
                </p>
              </div>

              {/* Large background number (hidden on mobile) */}
              <div
                className={`hidden md:flex w-1/2 justify-start items-center pointer-events-none select-none ${
                  feature.align === "right" ? "md:justify-end" : ""
                }`}
              >
                <span className="font-display-lg text-[120px] font-bold text-primary/5 leading-none tracking-tighter">
                  {feature.number}
                </span>
              </div>
            </div>

            {/* Divider between features */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-stroke-cyan to-transparent mt-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
