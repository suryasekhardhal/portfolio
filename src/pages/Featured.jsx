import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiRedux,
  SiJavascript,
} from "react-icons/si";

/* Category Component */
function Category({ cat }) {
  return (
    <div className="flex items-center gap-6">

      {/* Category Title */}
      <span className="text-[10px] uppercase tracking-widest text-[var(--subtle)] whitespace-nowrap">
        {cat.title}
      </span>

      {/* Skills */}
      {cat.items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md 
          hover:bg-[var(--purple)]/10 hover:border-[var(--purple-light)] 
          transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
        >
          <span className="text-lg text-[var(--purple-light)] drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]">
            {item.icon}
          </span>

          <span className="text-xs text-[var(--muted)] group-hover:text-white whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}

      {/* Divider */}
      <span className="text-[var(--muted)] opacity-30">|</span>
    </div>
  );
}

export default function Featured() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: "🗄️" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      title: "Concepts",
      items: [
        { name: "Redux", icon: <SiRedux /> },
        { name: "JWT", icon: "🔐" },
        { name: "REST API", icon: "🔗" },
        { name: "Agile", icon: "⚡" },
      ],
    },
    {
      title: "OS",
      items: [
        { name: "Windows", icon: "🖥️" },
        { name: "Linux", icon: "🐧" },
      ],
    },
  ];

  return (
    <section className="relative border-y border-white/10 bg-[var(--bg2)] overflow-hidden">

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[40px] opacity-30 pointer-events-none"></div>

      <div className="flex items-center gap-12 px-12 py-6">

        {/* Label */}
        <span className="text-xs tracking-[0.4em] text-[var(--muted)] whitespace-nowrap">
          // tech stack
        </span>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden group">

          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">

            {/* FIRST SET */}
            <div className="flex gap-12">
              {categories.map((cat, i) => (
                <Category key={"a" + i} cat={cat} />
              ))}
            </div>

            {/* DUPLICATE SET */}
            <div className="flex gap-12 ml-12">
              {categories.map((cat, i) => (
                <Category key={"b" + i} cat={cat} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}