import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/site/logo";
import { navLinks, siteConfig, socialLinks, type SocialPlatform } from "@/lib/site-config";

const platformIcons: Record<SocialPlatform, typeof InstagramLogo> = {
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-beige/50 py-16 text-ink sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-display text-lg tracking-normal">{siteConfig.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-taupe-text">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-taupe-text">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((social) => {
                const Icon = platformIcons[social.platform];
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink/75 transition-colors hover:text-ink"
                    >
                      <Icon size={15} weight="light" aria-hidden />
                      {social.handle}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink/75 transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-8 text-xs text-taupe-text sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Sacramento &amp; Reno, Reels, BTS, Candid</p>
        </div>
      </div>
    </footer>
  );
}
