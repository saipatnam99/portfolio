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
    <section
      id="experience"
      className="py-10 bg-gradient-to-b bg-gray-200 text-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Experienced in MERN stack and full stack development with hands-on
            expertise in building scalable web applications, REST APIs,
            responsive user interfaces, and production-ready systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-teal-600 font-semibold mt-1">
                  {exp.company}
                </p>

                <div className="mt-3 text-sm text-gray-500">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  Key Responsibilities
                </h4>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 leading-relaxed"
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

        {/* Bottom Highlight */}
        <div className="mt-14 flex justify-center">
          <div className="bg-teal-600 text-white px-6 py-4 rounded-2xl shadow-lg max-w-auto text-center">
            <h3 className="text-2xl font-semibold">
             Looking For The Roles: MERN Stack & Full Stack Developer
            </h3>

            <p className="text-teal-100 mt-3 leading-relaxed">
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