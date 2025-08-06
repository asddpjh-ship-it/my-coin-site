import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/coin-hero.jpg"           // public/coin-hero.jpg
          alt="Project hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* 그라데이션+어둡게 오버레이 */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.0)_60%)]" />
      </div>

      {/* 상단 네비게이션 */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-white/90 font-bold tracking-wide">
          CryptoNova
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/tokenomics" className="text-white/80 hover:text-white transition">Tokenomics</Link>
          <Link href="/team" className="text-white/80 hover:text-white transition">Team</Link>
          <Link href="/roadmap" className="text-white/80 hover:text-white transition">Roadmap</Link>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12 pb-20 sm:pt-16 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          The Face of <span className="text-yellow-400">CryptoNova</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/85">
          Community-first meme coin on Web3—simple, bold, and unstoppable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/tokenomics"
            className="px-6 py-3 rounded-xl font-semibold bg-yellow-400 text-black shadow hover:bg-yellow-300 transition"
          >
            View Tokenomics
          </Link>
          <a
            href="https://t.me/your_telegram" // 커뮤니티 링크로 교체
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold border border-white/30 text-white/90 hover:bg-white/10 transition"
          >
            Join Community
          </a>
        </div>

        {/* 하단 배지/CTA 보조 영역 (원하면 수정/삭제) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1 backdrop-blur">
            Built on Next.js + Tailwind
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 backdrop-blur">
            Deployed on Vercel
          </span>
        </div>
      </section>
    </main>
  );
}
