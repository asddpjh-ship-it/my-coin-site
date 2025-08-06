import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ==== Background ==== */}
      <div className="absolute inset-0">
        <Image
          src="/coin-hero.webp" /* /public/coin-hero.webp */
          alt="Hantang hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Soft radial highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_12%,rgba(255,255,255,0.16)_0%,rgba(0,0,0,0)_60%)]" />
        {/* (optional) grain; /public/grain.png 없으면 이 라인은 주석 유지 또는 삭제 */}
        {/* <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('/grain.png')]" /> */}
      </div>

      {/* ==== Top Nav ==== */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-white/90 font-bold tracking-wide hover:text-white">
          Hantang
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/tokenomics" className="link-soft">Tokenomics</Link>
          <Link href="/team" className="link-soft">Team</Link>
          <Link href="/roadmap" className="link-soft">Roadmap</Link>
        </nav>
      </header>

      {/* ==== Hero ==== */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-10 pb-20 min-h-[calc(100vh-88px)]">
        <div className="floating-badge">Community-first meme coin</div>

        <h1 className="mt-3 text-4xl sm:text-6xl md:text-7xl font-extrabold text-white neon">
          The Face of <span className="text-yellow-300 glow">Hantang</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/85">
          Simple, bold, unstoppable. Built for the culture—powered by the community.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/tokenomics" className="btn-primary">
            View Tokenomics
          </Link>
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Join Community
          </a>
        </div>

        {/* Social / Quick links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
          <a
            href="https://twitter.com/your_x"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            X (Twitter)
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            Chart
          </a>
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
