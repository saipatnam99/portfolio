import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "System Engineer",
      company: "iSourceInfo Systems Pvt Ltd",
      duration: "July 2025 - Present",
      location: "Bangalore, India",
      responsibilities: [
        "Developed scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
        "Built reusable frontend components and integrated REST APIs for dynamic user experiences.",
        "Collaborated with UI/UX designers, backend developers, and cross-functional teams to deliver production-ready applications.",
        "Improved application performance, maintainability, debugging, and deployment workflows.",
        "Worked on authentication, API integration, database operations, and responsive UI development.",
      ],
    },
    {
      role: "System Support Engineer",
      company: "SysQuali Infotech Pvt Ltd",
      duration: "January 2024 - June 2025",
      location: "Bangalore, India",
      responsibilities: [
        "Provided technical support and troubleshooting for system, network, and application-related issues.",
        "Monitored system performance and ensured smooth day-to-day operations across internal platforms.",
        "Assisted in deployment, maintenance, and configuration of applications and software systems.",
        "Collaborated with development teams to resolve bugs and improve system stability and performance.",
        "Managed incident tracking, issue resolution, technical documentation, and user support processes.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-200 py-10 text-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Experience</h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Experienced in MERN stack and full stack development with hands-on
            expertise in building scalable web applications, REST APIs,
            responsive user interfaces, and production-ready systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{exp.role}</h3>
                <p className="mt-1 font-semibold text-teal-600">{exp.company}</p>

                <div className="mt-3 text-sm text-gray-500">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
                  Key Responsibilities
                </h4>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 sm:text-base"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl bg-teal-600 px-5 py-5 text-center text-white shadow-lg sm:px-6">
            <h3 className="text-lg font-semibold sm:text-2xl">
              Looking For The Roles: MERN Stack & Full Stack Developer
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-teal-100 sm:text-base">
              Skilled in React.js, Next.js, Node.js, Express.js, MongoDB,
              Tailwind CSS, REST APIs, and scalable full stack application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;