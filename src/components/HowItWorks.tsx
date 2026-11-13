
import { motion } from "framer-motion";
import {
  CirclePlus,
  ListTodo,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Plan your work",
    description:
      "Bring your ideas together, create projects, and break big goals into manageable tasks.",
    icon: CirclePlus,
    detail: ["Create projects", "Organize issues", "Set priorities"],
    color: "#8b7cf6",
  },
  {
    number: "02",
    title: "Build together",
    description:
      "Keep everyone aligned with clear workflows, shared updates, and focused collaboration.",
    icon: ListTodo,
    detail: ["Assign teammates", "Track progress", "Stay in sync"],
    color: "#6d8cff",
  },
  {
    number: "03",
    title: "Ship with confidence",
    description:
      "See what's moving, identify blockers, and turn completed work into meaningful progress.",
    icon: Rocket,
    detail: ["Monitor milestones", "Resolve blockers", "Ship faster"],
    color: "#45c9a5",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8b7cf6]/20 bg-[#8b7cf6]/10 px-4 py-2 text-xs font-medium tracking-widest text-[#a99dfb] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b7cf6]" />
            How it works
          </span>

          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            From idea to impact.
            <span className="block text-[#92949e]">
              Without the chaos.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#92949e] sm:text-base">
            A simpler way to move from planning to execution.
            Everything your team needs to make great work happen.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-5 md:grid-cols-3">
          {/* Connector line */}
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-[#8b7cf6]/10 via-[#8b7cf6]/40 to-[#45c9a5]/10 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-2xl border border-[#292a30] bg-[#111214] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#8b7cf6]/40 hover:bg-[#15151a] sm:p-8"
              >
                <div className="relative z-10 mb-9 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}35`,
                      backgroundColor: `${step.color}12`,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-[#62646d]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#f7f8f8]">
                  {step.title}
                </h3>

                <p className="min-h-20 text-sm leading-7 text-[#92949e]">
                  {step.description}
                </p>

                <div className="my-7 h-px bg-[#292a30]" />

                <div className="space-y-3">
                  {step.detail.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#b4b5bd]"
                    >
                      <Check size={15} style={{ color: step.color }} />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#62646d]">
                    STEP {step.number}
                  </span>
                  <ArrowRight
                    size={17}
                    className="text-[#62646d] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#a99dfb]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#62646d]">
            Less busywork. More meaningful progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
