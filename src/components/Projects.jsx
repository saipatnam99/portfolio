import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    tech: "Next.js • Node.js • MongoDB",
    View: "https://hospital-management-portal-ten.vercel.app/",
  },
  {
    title: "MERN Authentication",
    tech: "Node.js • JWT • MongoDB",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-teal-700 p-6 text-white shadow-lg"
            >
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-teal-50">{project.tech}</p>

              {project.View ? (
                <a
                  href={project.View}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  View Project
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-teal-50">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;