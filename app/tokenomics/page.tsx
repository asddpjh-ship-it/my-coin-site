export default function Tokenomics() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Tokenomics</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-4">
          <h2 className="text-xl font-semibold mb-2">Supply</h2>
          <p className="text-gray-300">Total: 1,000,000,000 CNV</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <h2 className="text-xl font-semibold mb-2">Allocation</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Community: 40%</li>
            <li>Treasury: 25%</li>
            <li>Team: 15%</li>
            <li>Investors/Partners: 20%</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
