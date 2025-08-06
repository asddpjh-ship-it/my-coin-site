'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/coin-hero.webp"
          alt="Hantang Hero"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="opacity-30 blur-sm"
        />
        {/* 배경 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_#00ffc8] animate-pulse">
          Hantang
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Korea-powered meme coin riding the wave of history and humor — bold, fast, and unstoppable.
        </p>

        {/* CTA 버튼 */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/tokenomics"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_#00ffc8] hover:shadow-[0_0_30px_#00ffc8]"
          >
            View Tokenomics
          </Link>
          <Link
            href="https://t.me/your_telegram"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition"
          >
            Join Community
          </Link>
        </div>

        {/* 소셜/바로가기 배지 예시 */}
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

        {/* 부드러운 떠다니는 라벨 */}
        <div className="absolute top-6 right-6 animate-bounce-slow text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
          2025's Most Viral Korean Meme Coin 🚀
        </div>
      </div>
    </main>
  );
}
