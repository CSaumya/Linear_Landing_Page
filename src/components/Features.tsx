
import {
  Layers3,
  Workflow,
  ChartNoAxesCombined,
  ArrowUpRight,
  Zap,
  Users,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    icon: Layers3,
    title: "Everything in one place.",
    description:
      "Bring projects, tasks and conversations together. Keep your entire team's work organized in one focused workspace.",
    tag: "PROJECT MANAGEMENT",
    iconColor: "#A69BFF",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflows that flow.",
    description:
      "Create seamless workflows, automate repetitive tasks and help your team spend more time building what matters.",
    tag: "SMART WORKFLOWS",
    iconColor: "#7C9CFF",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Progress you can see.",
    description:
      "Track milestones, monitor team performance and get a clear picture of every project's progress.",
    tag: "TEAM INSIGHTS",
    iconColor: "#C4A1FF",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-30"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-[#5E6AD2]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7CF6]"
          >
            FEATURES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Everything your team needs.
            <span className="block text-[var(--text-muted)]">
              Nothing it doesn't.
            </span>
          </motion.h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            Powerful tools, thoughtfully connected to help your team stay
            focused, move faster and build better products.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300 hover:border-[#5E6AD2]/60"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5E6AD2]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#5E6AD2]/15" />

                <div className="relative">

                  {/* Number and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-widest text-[var(--text-muted)]">
                      / {feature.number}
                    </span>

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[#18191D]"
                    >
                      <Icon
                        size={21}
                        style={{ color: feature.iconColor }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="mt-12 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-[var(--text-secondary)]">
                    {feature.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--text-muted)]">
                      {feature.tag}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Zap, text: "Less busywork. More building." },
            { icon: Users, text: "Built for collaboration." },
            { icon: Target, text: "Focus on what matters." },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
            >
              <Icon size={16} className="text-[#8B7CF6]" />
              <span className="text-xs text-[var(--text-secondary)]">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
