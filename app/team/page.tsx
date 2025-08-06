export default function Team() {
  const members = [
    { name: "Alice", role: "CEO" },
    { name: "Bob", role: "CTO" },
    { name: "Carol", role: "Solidity Engineer" },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Team</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {members.map((m) => (
          <div key={m.name} className="rounded-xl border border-white/10 p-4">
            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="text-gray-400">{m.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
