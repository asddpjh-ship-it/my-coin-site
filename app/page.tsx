import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/coin-hero.webp"
          alt="Hantang Hero"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_0_20px_#ff0]">
          The Face of Hantang
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Simple, bold, unstoppable. Built for the culture—powered by the community.
        </p>

        {/* CTA 버튼 */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/tokenomics"
            className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            View Tokenomics
          </Link>
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            Join Community
          </a>
        </div>

        {/* 소셜 링크 */}
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
      </div>
    </main>
  );
}
