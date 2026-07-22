import { Reveal } from "@/components/ui/reveal";
import { RingMark } from "@/components/site/ring-mark";

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-beige">
              <RingMark size={220} showWordmark={false} className="opacity-70" />
              {/* PLACEHOLDER — swap this panel for a real portrait of Reets Kahania at work */}
              <span className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/45">
                Placeholder — portrait to be added
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
              Story first, always.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-ink/80 sm:text-lg">
              <p>
                <span className="mr-2 rounded-full bg-blush/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/70 align-middle">
                  Placeholder
                </span>
                [PLACEHOLDER — replace with real client copy] Reets Kahania
                approaches every event the same way: get close, stay quiet, and
                let the day tell its own story. No forced poses, no
                interrupting the moment for the perfect angle — just a
                candid, story-first eye trained on the in-between seconds
                that end up mattering most.
              </p>
              <p>
                Based between Sacramento and Reno, Reets works across
                weddings, sangeets, launches, and milestone celebrations,
                delivering Reels, behind-the-scenes coverage, and candid
                photography that feel less like documentation and more like
                a memory you can watch back.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
