import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/site-config";

export function Services() {
  return (
    <section id="services" className="bg-beige/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
            Three ways to keep the day.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-ink/12 border-t border-ink/12">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-4 py-10 sm:py-12 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink sm:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-taupe">
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
