import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";

function About() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        About Me 👨‍💻
      </h1>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg opacity-80">
          I'm a Full Stack Developer focused on building modern web apps using MERN stack.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Skills ⚡
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <FaReact className="text-3xl mx-auto mb-2 text-blue-500" />
            React
          </div>

          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <FaNodeJs className="text-3xl mx-auto mb-2 text-green-500" />
            Node.js
          </div>

          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <SiMongodb className="text-3xl mx-auto mb-2 text-green-400" />
            MongoDB
          </div>

          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <SiRedux className="text-3xl mx-auto mb-2 text-purple-500" />
            Redux
          </div>

          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <SiTailwindcss className="text-3xl mx-auto mb-2 text-cyan-400" />
            Tailwind
          </div>

          <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-center">
            <FaJsSquare className="text-3xl mx-auto mb-2 text-yellow-400" />
            JavaScript
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;