export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative px-12 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-[var(--purple)]/30 blur-[120px] rounded-full -top-32"></div>
      <div className="absolute w-[300px] h-[300px] bg-[var(--cyan)]/20 blur-[120px] bottom-20 right-20"></div>

      <p className="text-xs tracking-[0.3em] text-[var(--muted)] mb-6">
        // available for new opportunities
      </p>

      <h1 className="text-[clamp(64px,11vw,140px)] font-extrabold bg-gradient-to-br from-white via-[var(--purple-light)] to-[var(--pink)] bg-clip-text text-transparent">
        SURYASEKHAR
      </h1>

      <p className="mt-6 text-xs tracking-[0.3em] text-[var(--subtle)]">
        SOFTWARE ENGINEER • FULL STACK
      </p>

      <div className="flex gap-4 mt-10">
        <a href="#projects" className="px-8 py-3 bg-[var(--purple)] rounded-md hover:-translate-y-1 transition">
          View Work
        </a>
        <a href="#contact" className="px-8 py-3 border border-white/10 rounded-md hover:border-[var(--purple-light)]">
          Contact
        </a>
      </div>
    </section>
  );
}