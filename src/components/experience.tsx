export default function Experience() {
  const experiences = [
    {
      date: "Jan 2024 - Apr 2024",
      title: "Learning Center And Agency Services",
      position: "Fullstack - Freelance Project",
      stack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "WebSocket",
        "MongoDB",
        "Next.js 13",
        "React Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Figma",
        "i18n",
      ],
      description: `Designed and developed a full-stack web application using Node.js, Express.js, TypeScript, WebSocket, and MongoDB with Mongoose for data modeling and real-time communication.
  
  Planned and structured the ERD (Entity-Relationship Diagram) and collaborated with the team to establish a scalable base project structure, optimizing code flow and maintainability.
  
  Implemented core features including:
  - Blog System: CRUD functionality, form handling, and content display.
  - User Profile System: User data management and profile customization.
  - Pagination, Search, and Filtering: Efficient data querying and user-friendly navigation.
  
  Built the frontend with Next.js 13, integrating React Query for data fetching, Zustand for state management, React Hook Form for form handling, and Zod for schema validation.
  
  Designed intuitive and responsive UI/UX using Figma, focusing on seamless user interactions across devices.
  
  Developed reusable and logical components for blog management and user profiles.
  
  Integrated i18n localization, supporting Myanmar, English, and Japanese for a multilingual user experience.`,
    },
    {
      date: "Apr 2024 - Aug 2024",
      title: "ERP Systems",
      position: "Fullstack - Freelance Project",
      description: `Designed and developed a full-stack financial management and employee system using Node.js, Express.js, TypeScript, and PostgreSQL with Sequelize for data modeling and Sequelize-CLI for migrations.
  
  Planned and structured the ERD, and implemented core backend features including employee management, financial tracking, and role-based access. Used Inversify for dependency injection, Zod for validation, and Swagger for API documentation.
  
  Built the frontend with Next.js 14, integrating Zustand for state management and UI components from Shadcn/UI and NextUI. Focused on reusable components, application flow, and responsive design.`,
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "Sequelize-CLI",
        "Inversify",
        "Zod",
        "Swagger",
        "Next.js 14",
        "Zustand",
        "Shadcn/UI",
        "NextUI",
      ],
    },
    {
      date: "Mar 2023 - Apr 2023",
      title: "Hotel Reservation Rooms And Blogs Management System",
      position: "Fullstack - School Training Project",
      description: `Designed and developed a web application using Spring MVC, Hibernate, and MySQL, hosted on Tomcat 9. Created and optimized the Entity-Relationship Diagram (ERD) to structure the database efficiently.
  
  Implemented full CRUD (Create, Read, Update, Delete) operations for user account management, ensuring robust data handling.
  
  Integrated authorization and authentication features using JavaScript, jQuery, Bootstrap, and JSTL to secure user access and enhance user experience.
  
  Developed, maintained, tested, and debugged the website to ensure high performance and reliability.`,
      stack: [
        "Spring MVC",
        "Hibernate",
        "MySQL",
        "Tomcat 9",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "JSTL",
        "ERD Design",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white text-[#0c0c0c]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map(({ title, description, date, position, stack }) => (
            <div
              key={title}
              className="p-6 border border-gray-200 rounded-xl shadow-md bg-[#fff]"
            >
              <h3 className="text-2xl font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{date}</p>
              <p className="italic text-sm mb-4 text-gray-700">{position}</p>
              <p className="whitespace-pre-line text-gray-800 mb-4">
                {description}
              </p>
              {stack && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-[#fafc99] text-[#0f0f0f] font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
