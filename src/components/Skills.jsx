const Skills = () => {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Tech Stack</h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-teal-700 bg-white p-3 text-center text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-teal-700 hover:text-white sm:p-4"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;