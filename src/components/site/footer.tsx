import { RingMark } from "@/components/site/ring-mark";
import { navLinks, siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 text-ivory sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <RingMark size={36} showWordmark={false} ink="#FAF5EF" />
              <span className="font-display text-lg tracking-normal">{siteConfig.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/60">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/60">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {social.sublabel === "Platform TBD" ? social.label : social.sublabel}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Sacramento &amp; Reno · Reels · BTS · Candid</p>
        </div>
      </div>
    </footer>
  );
}
