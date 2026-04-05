import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // for now
    alert("Message sent! 🚀");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Contact Me 📬
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg"
        >
          Send Message 🚀
        </button>
      </form>

    </div>
  );
}

export default Contact;