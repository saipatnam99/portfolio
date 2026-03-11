// const Projects = () => {
//   const projects = [
//     {
//       name: "Hospital Management System",
//       tech: "Next.js, Node.js, MongoDB",
//     },
//     {
//       name: "Healthcare Dashboard",
//       tech: "React, Tailwind",
//     },
//     {
//       name: "MERN Authentication",
//       tech: "Node, JWT, MongoDB",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-[#f0f0f0]">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {projects.map((project) => (
//           <div
//             key={project.name}
//             className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 
//             cursor-pointer hover:bg-gray-100 transform hover:-translate-y-1"
//           >
//             <h3 className="text-xl font-bold mb-2">
//               {project.name}
//             </h3>
//             <p className="text-gray-600">
//               {project.tech}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    tech: "Next.js • Node.js • MongoDB",
  },
  {
    title: "Healthcare Dashboard",
    tech: "React • Tailwind CSS",
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
      className="py-5 bg-gray-200"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-teal-700 p-6 rounded-lg text-white shadow"
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-white">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;