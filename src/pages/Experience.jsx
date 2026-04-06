export default function Experience() {
  const exp = [
    "Full Stack Developer",
    "Frontend Developer",
    "Junior Developer"
  ];

  return (
    <section className="py-32 px-12">

      <h2 className="text-5xl font-extrabold mb-10">
        Experience
      </h2>

      <div className="space-y-2">
        {exp.map((e, i) => (
          <div key={i} className="flex justify-between p-5 border border-white/10 bg-purple/5 hover:bg-purple/10 transition">
            <span>{e}</span>
            <span className="text-[var(--muted)]">2021–2025</span>
          </div>
        ))}
      </div>
    </section>
  );
}