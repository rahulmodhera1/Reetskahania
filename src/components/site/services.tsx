import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/site-config";

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="block text-sm font-medium uppercase tracking-[0.28em] text-taupe-text">
            Services
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
            Three ways to capture your day.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-ink/12">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="group relative -mx-6 grid grid-cols-1 gap-4 overflow-hidden border-b border-ink/12 px-6 py-10 transition-colors duration-300 ease-out hover:bg-beige/25 sm:py-12 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:px-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[7rem] font-semibold leading-none text-gold/10 sm:text-[9rem]"
                >
                  0{i + 1}
                </span>

                <div className="lg:col-span-4">
                  <h3 className="inline-block font-display text-4xl font-medium tracking-[-0.01em] text-ink transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-5xl">
                    {service.name}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-2 block h-px w-10 origin-left scale-x-50 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-taupe-text">
                    {service.tagline}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="max-w-[62ch] text-pretty text-base leading-relaxed text-ink/75 sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
