
import {
  SiVercel,
  SiFigma,
  SiCursor,
  SiCoinbase,
} from "@icons-pack/react-simple-icons";

const brands = [
  { name: "Vercel", Icon: SiVercel },
  { name: "Figma", Icon: SiFigma },
  { name: "Cursor", Icon: SiCursor },
  { name: "Coinbase", Icon: SiCoinbase },
];

const BrandLogos = () => {
  return (
    <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg)] px-6 py-12 md:px-12 lg:px-30">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Powering teams that build the future
        </p>

        {/* Mobile carousel */}
        <div className="relative overflow-hidden md:hidden">
          <div className="flex w-max animate-brand-scroll gap-12">
            {[...brands, ...brands].map(({ name, Icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex shrink-0 items-center gap-2.5 text-[var(--text-muted)]"
              >
                <Icon size={25} color="currentColor" />
                <span className="text-base font-semibold tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop static logos */}
        <div className="hidden items-center justify-between md:flex">
          {brands.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex cursor-pointer items-center gap-2.5 text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              <Icon
                size={27}
                color="currentColor"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-base font-semibold tracking-tight">
                {name}
              </span>
            </div>
          ))}

          <div className="group flex cursor-pointer items-center gap-2.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]">
            <span className="text-2xl font-bold leading-none">R</span>
            <span className="text-base font-semibold tracking-tight">
              Ramp
            </span>
          </div>
        </div>
      </div>

      {/* Statement */}
      <div className="mx-auto mt-20 max-w-6xl px-2 text-3xl leading-tight tracking-[-0.04em] sm:px-10 sm:text-4xl lg:text-5xl">
        <p className="font-medium text-[var(--text-primary)]">
          A new species of product tool.
          <span className="text-[#62646D]">
            {" "}Purpose-built for modern teams with AI workflows at its core,
            Linear sets a new standard for planning and building products.
          </span>
        </p>
      </div>
    </section>
  );
};

export default BrandLogos;
