export default function About() {
  const expertise = [
    {
      icon: "⚙️",
      title: "Software Development",
      subtitle: "Languages & Paradigms",
      desc: "Experienced in both functional and OOP: Java, JavaScript.",
    },
    {
      icon: "⚛️",
      title: "Frontend Development",
      subtitle: "React",
      desc: "Passionate about UI/UX. Deep experience in HTML, CSS, JavaScript, React framework.",
    },
    {
      icon: "🖥️",
      title: "Backend Development",
      subtitle: "Node.js, MongoDB",
      desc: "Building scalable APIs and services using Node.js, Express, and MongoDB with clean architecture.",
    },
  ];

  return (
    <section id="about" className="py-32 px-12 bg-[var(--bg)]">

      {/* Header */}
      <div className="mb-20">
        <p className="text-xs tracking-[0.3em] text-[var(--purple-light)] uppercase mb-3">
          // what I do
        </p>

        <h2 className="text-[clamp(36px,5vw,64px)] font-extrabold leading-tight">
          My Expertise
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 border border-white/10">

        {expertise.map((item, i) => (
          <div
            key={i}
            className="relative p-12 border-r last:border-r-0 border-white/10 overflow-hidden group transition duration-300 hover:bg-[rgba(124,58,237,0.05)]"
          >

            {/* Top gradient line on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--purple)] to-[var(--pink)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--purple)]/20 border border-[var(--purple)]/30 rounded-lg mb-6 text-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-[var(--purple-light)] text-lg mb-2">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="italic text-[var(--subtle)] mb-4 font-serif">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-[var(--muted)] leading-relaxed border-l border-white/10 pl-4">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}