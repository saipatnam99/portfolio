import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    tech: "Next.js • Node.js • MongoDB",
  },
  {
    title: "MERN Authentication",
    tech: "Node.js • JWT • MongoDB",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 bg-gray-200 flex flex-col items-center px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-teal-700 p-6 rounded-lg text-white shadow text-center"
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p>{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;