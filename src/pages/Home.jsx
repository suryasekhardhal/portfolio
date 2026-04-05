import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="text-center">
        <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold">
          Hi, I'm Suryasekhar 👋
        </motion.h1>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl mt-4">
          <TypeAnimation
            sequence={[
              "A Passionate Developer",
              2000,
              "A Tech Enthusiast",
              2000,
              "A Lifelong Learner",
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-6">
          <p>Welcome to my portfolio website! Explore my projects and skills.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border border-black dark:border-white rounded-lg">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default Home;