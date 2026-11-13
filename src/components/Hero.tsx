
import { ArrowRight, ArrowUpRight, Check, Circle, Plus } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-28 pb-20 md:px-12 md:pt-36 lg:px-30">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#5E6AD2]/15 blur-[120px]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2"
        >
          <span className="rounded-full bg-[#5E6AD2] px-2 py-0.5 text-[10px] font-semibold text-white">
            NEW
          </span>
          <span className="text-xs text-[var(--text-secondary)]">
            A better way to manage your workflow
          </span>
          <ArrowRight size={13} className="text-[var(--text-secondary)]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[-0.055em] text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-[82px]"
        >
          Build better products.
          <span className="block bg-gradient-to-r from-[#A69BFF] via-[#8175ED] to-[#5E6AD2] bg-clip-text text-transparent">
            Move faster together.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg"
        >
          Bring your team, projects and ideas into one focused workspace.
          Plan smarter, collaborate seamlessly and turn great ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group flex items-center gap-2 rounded-lg bg-[#F7F8F8] px-6 py-3 text-sm font-semibold text-[#08090B] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(139,124,246,0.25)]"
          >
            Get started
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="#features"
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-all hover:bg-[var(--surface)]"
          >
            Explore features
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <p className="mt-5 text-xs text-[var(--text-muted)]">
          No credit card required · Get started in seconds
        </p>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mt-20 w-full max-w-5xl"
        >
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 -z-10 rounded-full bg-[#5E6AD2]/15 blur-[100px]" />

          <div className="overflow-hidden rounded-xl border border-[#292A30] bg-[#111214] text-left shadow-2xl shadow-black/40">

            {/* Window header */}
            <div className="flex items-center justify-between border-b border-[#292A30] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
              </div>
              <p className="text-xs text-[#92949E]">Workspace / My Projects</p>
              <Plus size={16} className="text-[#92949E]" />
            </div>

            {/* Dashboard content */}
            <div className="grid min-h-[300px] grid-cols-1 md:grid-cols-[190px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-[#292A30] p-4 md:block">
                <p className="mb-5 text-xs font-medium text-[#92949E]">WORKSPACE</p>

                <div className="mb-3 flex items-center gap-2 text-sm text-white">
                  <Circle size={13} className="text-[#8B7CF6]" />
                  My Projects
                </div>

                <div className="mb-3 flex items-center gap-2 text-sm text-[#92949E]">
                  <Check size={13} />
                  My Issues
                </div>

                <div className="mb-6 flex items-center gap-2 text-sm text-[#92949E]">
                  <Plus size={13} />
                  Add project
                </div>

                <p className="mb-4 text-xs font-medium text-[#92949E]">YOUR TEAM</p>

                <div className="flex items-center gap-2 text-sm text-[#92949E]">
                  <div className="h-5 w-5 rounded-md bg-[#5E6AD2]/30" />
                  Development
                </div>
              </aside>

              {/* Main dashboard */}
              <div className="p-5 md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#92949E]">MONDAY, NOVEMBER 13</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">My Projects</h2>
                  </div>
                  <button className="rounded-md border border-[#292A30] px-3 py-2 text-xs text-[#92949E]">
                    + New issue
                  </button>
                </div>

                <div className="mb-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "In progress", count: "08", color: "#8B7CF6" },
                    { label: "Completed", count: "24", color: "#4ADE80" },
                    { label: "Upcoming", count: "12", color: "#60A5FA" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-[#292A30] bg-[#18191D] p-3">
                      <p className="text-xs text-[#92949E]">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{item.count}</p>
                      <div className="mt-2 h-1 w-full rounded-full bg-[#292A30]">
                        <div
                          className="h-1 rounded-full"
                          style={{ backgroundColor: item.color, width: "65%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mb-3 text-xs font-medium text-[#92949E]">RECENT ISSUES</p>

                <div className="space-y-1">
                  {[
                    { id: "APP-101", name: "Design new dashboard interface", status: "In Progress", color: "#8B7CF6" },
                    { id: "APP-102", name: "Improve mobile responsiveness", status: "Todo", color: "#60A5FA" },
                    { id: "APP-103", name: "Fix authentication flow", status: "Completed", color: "#4ADE80" },
                  ].map((issue) => (
                    <div key={issue.id} className="flex flex-wrap items-center justify-between gap-3 rounded-md px-3 py-3 transition-colors hover:bg-[#18191D]">
                      <div className="flex items-center gap-3">
                        <Circle size={14} style={{ color: issue.color }} />
                        <span className="text-xs text-[#62646D]">{issue.id}</span>
                        <span className="text-sm text-[#D5D6DA]">{issue.name}</span>
                      </div>
                      <span className="text-xs text-[#92949E]">{issue.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
