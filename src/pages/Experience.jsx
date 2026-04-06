export default function Experience() {
  const exp = [
    {
      role: "Full Stack Developer",
      company: "Personal Projects",
      time: "2025 – Present",
      desc: "Built scalable full-stack applications using React, Node.js, Express, and MongoDB. Focused on performance, clean UI, and API architecture.",
    },
    {
      role: "Frontend Developer",
      company: "Portfolio & UI Projects",
      time: "2024 – 2025",
      desc: "Designed and developed responsive user interfaces using React, Tailwind CSS, and modern UI/UX principles.",
    },
    {
      role: "Backend Developer",
      company: "API & Microservices",
      time: "2024",
      desc: "Developed REST APIs with authentication (JWT), database integration, and modular backend architecture.",
    },
  ];

  return (
    <section id="experience" className="py-32 px-12 bg-[var(--bg)]">

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs tracking-[0.3em] text-[var(--purple-light)] uppercase mb-3">
          // career
        </p>

        <h2 className="text-[clamp(36px,5vw,64px)] font-extrabold leading-tight">
          Professional Experience
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-4">

        {exp.map((item, i) => (
          <div
            key={i}
            className="group flex justify-between items-start p-6 border border-white/10 rounded-lg bg-[var(--surface)] hover:bg-[var(--purple)]/10 transition-all duration-300 hover:border-[var(--purple-light)]"
          >

            {/* Left */}
            <div className="flex gap-4">

              {/* Dot */}
              <div className="w-2 h-2 mt-2 bg-[var(--purple)] rounded-full group-hover:scale-125 transition"></div>

              <div>
                <h3 className="font-bold text-lg">
                  {item.role}
                </h3>

                <p className="text-sm text-[var(--subtle)]">
                  {item.company}
                </p>

                <p className="text-sm text-[var(--muted)] mt-2 max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 text-[var(--muted)] text-sm whitespace-nowrap">

              <span>{item.time}</span>

              {/* Plus Icon */}
              <div className="w-7 h-7 flex items-center justify-center border border-white/10 rounded-full group-hover:border-[var(--purple-light)] group-hover:text-[var(--purple-light)] transition">
                +
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}