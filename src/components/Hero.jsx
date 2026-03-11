
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[65vh] py-5  flex items-center justify-center bg-gray-200 text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-teal-700">Sai Patnam</span>
        </h1>

        <h2 className="text-2xl mb-4">
          MERN Stack Developer
        </h2>

        <p className="text-black mb-6">
          I build scalable full-stack applications using
          React, Node.js, Express, and MongoDB.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-teal-700 px-6 py-3 rounded-lg text-white"
          >
            View Projects
          </a>

          <a
            href="https://github.com/saipatnam99"
            className="border border-teal-700 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;