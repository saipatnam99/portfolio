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
<section className="py-6 bg-gray-200">
      <h2 className="text-3xl text-center font-bold mb-10">
        Tech Stack
      </h2>

      <div className="flex flex-row flex-wrap justify-center p-2 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
         <div
  key={skill}
  className="bg-gray-200 p-2 text-center rounded-xl shadow-md cursor-pointer
  transform transition-all duration-300
  hover:scale-110 hover:-translate-y-2
  hover:bg-teal-700 hover:text-white hover:shadow-2xl border border-teal-700"
>
  {skill}
</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;