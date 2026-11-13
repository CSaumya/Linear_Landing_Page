
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    // Frontend demo: no data is sent to a server.
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full rounded-xl border border-[#292a30] bg-[#111214] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-[#62646d] focus:border-[#8b7cf6]/60 focus:ring-2 focus:ring-[#8b7cf6]/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#5e6ad2]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8b7cf6]/20 bg-[#8b7cf6]/10 px-4 py-2 text-xs font-medium tracking-widest text-[#a99dfb] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b7cf6]" />
            Get in touch
          </span>

          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Let's make great
            <span className="block text-[#92949e]">
              things happen.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#92949e] sm:text-base">
            Have a question, an idea, or just want to say hello?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                We'd love to connect.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#92949e]">
                Whether you're exploring the platform or looking for
                the right solution for your team, let's start a conversation.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#292a30] bg-[#111214] text-[#a99dfb]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#62646d]">Email us</p>
                    <p className="mt-1 text-sm text-white">
                      hello@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#292a30] bg-[#111214] text-[#a99dfb]">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#62646d]">Response time</p>
                    <p className="mt-1 text-sm text-white">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-[#292a30] bg-[#111214] p-6">
              <p className="text-sm font-medium text-white">
                Great work starts with a conversation.
              </p>
              <p className="mt-2 text-xs leading-6 text-[#92949e]">
                Tell us what you're building. We'll help you find a better
                way to move forward.
              </p>
              <ArrowUpRight
                size={20}
                className="mt-5 text-[#a99dfb]"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#292a30] bg-[#111214] p-6 sm:p-9"
          >
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[440px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Message received!
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#92949e]">
                  Thanks for reaching out. This is a demo form, so your
                  message hasn't been sent to a server.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl border border-[#383942] px-5 py-3 text-sm font-medium text-white transition hover:border-[#8b7cf6]/50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm text-[#62646d]">
                    Fill in the details below and we'll be in touch.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-[#b4b5bd]"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-[#b4b5bd]"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-[#b4b5bd]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={inputClass}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-2 text-xs text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-[#b4b5bd]"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you have in mind..."
                    className={`${inputClass} resize-none`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8b7cf6] to-[#5e6ad2] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Send message
                  <Send size={16} />
                </button>

                <p className="mt-4 text-center text-[11px] text-[#62646d]">
                  This is a frontend demo. No message is sent or stored.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
