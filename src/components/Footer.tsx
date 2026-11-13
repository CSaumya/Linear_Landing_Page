import {
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com", label: "X" },
  ];

  return (
    <footer className="border-t border-[#292a30] bg-[#08090b] px-6 pt-16 pb-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <svg
                width="27"
                height="27"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M50 8C26.8 8 8 26.8 8 50s18.8 42 42 42 42-18.8 42-42S73.2 8 50 8Zm0 12c16.6 0 30 13.4 30 30S66.6 80 50 80 20 66.6 20 50s13.4-30 30-30Z"
                  fill="white"
                />
                <path
                  d="M50 32a18 18 0 1 0 0 36 18 18 0 0 0 0-36Z"
                  fill="white"
                />
              </svg>

              <span className="text-lg font-semibold tracking-tight text-white">
                Linear
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#92949e]">
              A better way to plan, build, and ship great products together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#292a30] text-[#92949e] transition-all hover:border-[#8b7cf6]/50 hover:bg-[#8b7cf6]/10 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-5 text-sm font-semibold text-white">
                {heading}
              </h4>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-[#92949e] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-[#292a30] pt-7 sm:flex-row">
          <p className="text-xs text-[#62646d]">
            © {new Date().getFullYear()} Linear-inspired UI. Built with care.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-xs text-[#62646d] transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#contact"
              className="text-xs text-[#62646d] transition-colors hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#292a30] text-[#92949e] transition-all hover:border-[#8b7cf6]/50 hover:text-white"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
