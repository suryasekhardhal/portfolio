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
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiRedux,
  SiJavascript,
} from "react-icons/si";

export default function Featured() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: "🗄️" },

    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: <SiTailwindcss /> },

    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },

    { name: "MongoDB", icon: <SiMongodb /> },
   
    { name: "MySQL", icon: <SiMysql /> },

    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },

    { name: "Redux", icon: <SiRedux /> },
    { name: "JWT", icon: "🔐" },
    { name: "REST API", icon: "🔗" },

    { name: "Windows", icon: "🖥️" },
    { name: "Linux", icon: "🐧" },
  ];

  return (
    <div className="flex items-center gap-10 px-12 py-5 border-y border-white/10 bg-[var(--bg2)] overflow-hidden">

      {/* Label */}
      <span className="text-xs tracking-[0.3em] text-[var(--muted)] whitespace-nowrap mb-2">
        // skills & tools
      </span>

      {/* Marquee */}
      <div className="flex gap-10 animate-[scroll_25s_linear_infinite] whitespace-nowrap">

        {[...skills, ...skills].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--purple-light)] transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}

      </div>
    </div>
  );
}