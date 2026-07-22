import { ArrowUpRight, InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { socialLinks, type SocialPlatform } from "@/lib/site-config";

const platformIcons: Record<SocialPlatform, typeof InstagramLogo> = {
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
};

export function SocialProof() {
  const [primary, ...rest] = socialLinks;
  const PrimaryIcon = platformIcons[primary.platform];

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
            Follow along
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <TiltCard maxTilt={4} className="h-full">
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[220px] flex-col justify-between gap-10 rounded-2xl border border-ink/12 bg-beige/25 p-8 transition-colors duration-200 ease-out hover:border-ink/30"
              >
                <div className="flex items-center justify-between">
                  <PrimaryIcon size={26} weight="light" aria-hidden className="text-ink/70" />
                  <ArrowUpRight
                    size={18}
                    weight="light"
                    aria-hidden
                    className="text-ink/55 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>
                <div>
                  <p className="font-display text-3xl font-medium tracking-[-0.01em] text-ink sm:text-4xl">
                    {primary.handle}
                  </p>
                  <p className="mt-1 text-sm text-ink/70">{primary.descriptor} account</p>
                </div>
              </a>
            </TiltCard>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((social, i) => {
              const Icon = platformIcons[social.platform];
              return (
                <Reveal key={social.id} delay={0.1 + i * 0.08}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/12 p-6 transition-colors duration-200 ease-out hover:border-ink/30 hover:bg-beige/30"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} weight="light" aria-hidden className="text-ink/70" />
                      <div>
                        <p className="font-display text-lg font-medium tracking-[-0.01em] text-ink">
                          {social.handle}
                        </p>
                        <p className="text-sm text-ink/70">{social.descriptor}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      weight="light"
                      aria-hidden
                      className="shrink-0 text-ink/55 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
