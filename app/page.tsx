'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#fef1d2]">
      {/* 배경 이미지 */}
      <Image
        src="/coin-hero.webp"
        alt="Hantang Coin Hero"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-black">
        <h1 className="text-5xl md:text-7xl font-extrabold neon-text">Hantang</h1>
        <p className="mt-6 text-lg md:text-xl text-black/70">
          Korea’s cultural meme coin — powered by community, legacy, and humor.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="/tokenomics" className="btn-glow">Tokenomics</Link>
          <Link href="/roadmap" className="btn-ghost">Roadmap</Link>
          <Link href="/team" className="btn-ghost">Team</Link>
        </div>

        {/* 배지 영역 */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-black/70">
          <a href="https://twitter.com/your_x" target="_blank" className="chip">X (Twitter)</a>
          <a href="https://dexscreener.com" target="_blank" className="chip">Dexscreener</a>
        </div>
      </div>
    </main>
  );
}
