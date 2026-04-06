export default function Contact() {
  return (
    <section id="contact" className="py-32 px-12 bg-[var(--bg2)]">

      <div className="grid grid-cols-2 gap-20">

        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            Contact Me
          </h2>

          <p className="text-[var(--muted)] mb-6">
            Let’s build something great.
          </p>

          <a className="border-b border-[var(--purple-light)]">
            suryasekhar@email.com
          </a>
        </div>

        <form className="flex flex-col gap-4">
          <input className="p-4 border border-white/10 rounded-lg bg-transparent" placeholder="Name"/>
          <input className="p-4 border border-white/10 rounded-lg bg-transparent" placeholder="Email"/>
          <textarea className="p-4 border border-white/10 rounded-lg bg-transparent" rows="5"/>

          <button className="p-4 bg-gradient-to-r from-[var(--purple)] to-[var(--pink)] rounded-lg">
            Send Message 🚀
          </button>
        </form>

      </div>
    </section>
  );
}