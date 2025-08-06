export default function Roadmap() {
  const steps = [
    { q: "Q3 2025", t: "Token launch & website" },
    { q: "Q4 2025", t: "Staking & governance MVP" },
    { q: "Q1 2026", t: "CEX listing & ecosystem partnerships" },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Roadmap</h1>
      <ol className="relative border-s border-white/10 ms-4">
        {steps.map((step, i) => (
          <li key={i} className="mb-8 ms-4">
            <div className="absolute w-3 h-3 bg-white/50 rounded-full -start-1.5 mt-2" />
            <time className="text-sm text-gray-400">{step.q}</time>
            <p className="text-white font-medium">{step.t}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
