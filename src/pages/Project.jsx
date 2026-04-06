import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full stack app with authentication & payments",
    },
    {
      title: "Analytics Dashboard",
      desc: "Interactive charts with modern UI",
    },
    {
      title: "Real-Time Chat App",
      desc: "Socket-based messaging system",
    },
    {
      title: "Maps Visualization",
      desc: "Location-based data rendering",
    },
    {
      title: "Auth Microservice",
      desc: "JWT authentication backend",
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-12 bg-[var(--bg2)] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--purple)]/20 blur-[120px] rounded-full"></div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-20 relative z-10"
      >
        My Work
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8 relative z-10">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              scale: 1.05,
            }}
            className="group relative bg-[var(--surface)] border border-white/10 rounded-xl overflow-hidden 
            transition-all duration-500 perspective-[1000px]"
          >

            {/* Glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[var(--purple)]/20 to-[var(--pink)]/10"></div>

            {/* Thumbnail */}
            <div className="aspect-video flex items-center justify-center text-4xl relative z-10">
              🚀
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="font-bold text-lg mb-1">
                {p.title}
              </h3>

              <p className="text-xs text-[var(--muted)] mb-4">
                {p.desc}
              </p>

              {/* Hover underline */}
              <span className="text-xs text-[var(--purple-light)] relative inline-block">
                View Project →
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--purple-light)] group-hover:w-full transition-all"></span>
              </span>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--purple)]/40 transition"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}