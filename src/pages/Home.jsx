import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black animate-pulse opacity-80"></div>

      {/* 🔥 Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 text-center px-6">

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Hi, I'm Suryasekhar 👋
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mt-4 text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "A Passionate Developer 🚀",
              2000,
              "Building Modern Web Apps 💻",
              2000,
              "React & Node.js Enthusiast ⚡",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto"
        >
          I design and build high-performance, visually stunning web applications.
          Explore my work and let's create something amazing together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          {/* Primary Button */}
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
          hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50">
            View Projects
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-3 rounded-xl border border-gray-500 
          hover:bg-white hover:text-black transition-all duration-300">
            Contact Me
          </button>
        </motion.div>

      </div>
    </div>
  );
}

export default Home; 