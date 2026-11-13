
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Everything you need to get started.",
    monthly: 0,
    yearly: 0,
    icon: Zap,
    features: [
      "Unlimited personal projects",
      "Basic task management",
      "Up to 5 team members",
      "Community support",
      "Essential integrations",
    ],
    button: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    description: "More power for teams ready to move faster.",
    monthly: 12,
    yearly: 9,
    icon: Sparkles,
    features: [
      "Everything in Free",
      "Unlimited team members",
      "Advanced workflows",
      "Custom project views",
      "Priority support",
      "Advanced team insights",
    ],
    button: "Start with Pro",
    popular: true,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6658d3]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8b7cf6]/20 bg-[#8b7cf6]/10 px-4 py-2 text-xs font-medium tracking-widest text-[#a99dfb] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b7cf6]" />
            Simple pricing
          </span>

          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Plans that scale
            <span className="block text-[#92949e]">
              with your ambition.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#92949e] sm:text-base">
            Start small, find your rhythm, and unlock more as your team grows.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span
            className={`text-sm ${billing === "monthly" ? "text-white" : "text-[#62646d]"}`}
          >
            Monthly
          </span>

          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
            aria-label="Toggle yearly billing"
            aria-pressed={billing === "yearly"}
            className="relative h-7 w-12 rounded-full border border-[#383942] bg-[#18191d] p-1 transition-colors"
          >
            <span
              className={`block h-4 w-4 rounded-full bg-[#8b7cf6] transition-transform duration-300 ${
                billing === "yearly" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`text-sm ${billing === "yearly" ? "text-white" : "text-[#62646d]"}`}
          >
            Yearly
          </span>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
            SAVE 25%
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price =
              billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 sm:p-9 ${
                  plan.popular
                    ? "border-[#8b7cf6]/60 bg-gradient-to-b from-[#171622] to-[#111214] shadow-[0_0_50px_rgba(139,124,246,0.09)]"
                    : "border-[#292a30] bg-[#111214] hover:border-[#444550]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-8 rounded-full bg-gradient-to-r from-[#8b7cf6] to-[#5e6ad2] px-4 py-1.5 text-[10px] font-bold tracking-wider text-white">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#8b7cf6]/20 bg-[#8b7cf6]/10 text-[#a99dfb]">
                  <Icon size={21} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-[#92949e]">
                  {plan.description}
                </p>

                <div className="my-8 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.06em] text-white">
                    ${price}
                  </span>
                  <span className="mb-2 text-sm text-[#62646d]">
                    / user / month
                  </span>
                </div>

                <a
                  href="#contact"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#8b7cf6] to-[#5e6ad2] text-white hover:opacity-90"
                      : "border border-[#383942] bg-[#1a1b20] text-white hover:border-[#8b7cf6]/50 hover:bg-[#22232a]"
                  }`}
                >
                  {plan.button}
                  <ArrowRight size={16} />
                </a>

                <div className="my-8 h-px bg-[#292a30]" />

                <p className="mb-5 text-xs font-semibold tracking-widest text-[#62646d] uppercase">
                  What's included
                </p>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#b4b5bd]"
                    >
                      <Check
                        size={16}
                        className={
                          plan.popular
                            ? "text-[#a99dfb]"
                            : "text-emerald-400"
                        }
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-[#62646d]">
          Illustrative pricing for this demo project. No actual payments are processed.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
