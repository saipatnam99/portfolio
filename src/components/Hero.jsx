import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[75vh] bg-gray-200 px-4 py-20 text-black sm:px-6"
    >
      <div className="mx-auto flex min-h-[55vh] max-w-3xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Hi, I'm <span className="text-teal-700">Sai Patnam</span>
          </h1>

          <h2 className="mb-4 text-xl sm:text-2xl">MERN Stack Developer</h2>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-black sm:text-base">
            I build scalable full-stack applications using React, Node.js,
            Express, and MongoDB.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="rounded-lg bg-teal-700 px-5 py-3 text-center text-white shadow-sm transition hover:bg-teal-800"
            >
              View Projects
            </a>

            <a
              href="https://github.com/saipatnam99"
              className="rounded-lg border border-teal-700 px-5 py-3 text-center transition hover:bg-teal-700 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;