function Home() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Hi, I'm Suryasekhar 👋
        </h1>
        <p className="mt-4 text-xl opacity-80">
          Full Stack Developer (MERN)
        </p>

        <button className="mt-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg">
          View Projects
        </button>
      </div>
    </div>
    </>
  );
}

export default Home;