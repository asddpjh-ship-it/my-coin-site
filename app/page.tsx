import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">CryptoNova</h1>
        <p className="text-gray-400">The next generation decentralized token</p>
        <nav className="mt-4 space-x-4">
          <Link href="/tokenomics" className="hover:underline">Tokenomics</Link>
          <Link href="/team" className="hover:underline">Team</Link>
          <Link href="/roadmap" className="hover:underline">Roadmap</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the future of Web3 finance</h2>
        <p className="text-gray-300">
          CryptoNova is building a fair, transparent, and community-driven ecosystem.
          Learn more about our tokenomics, meet the team, and explore our roadmap.
        </p>
      </section>
    </main>
  );
}
