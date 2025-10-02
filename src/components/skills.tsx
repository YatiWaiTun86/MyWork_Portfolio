export default function Skills() {
  const skills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "Java", level: 78 },
    { name: "React.js", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "MySQL", level: 65 },
    { name: "Tailwind CSS", level: 60 },
    { name: "TypeScript", level: 55 },
  ];

  return (
    <section className="py-20 px-6 bg-white text-[#0c0c0c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-md font-semibold">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[#71f1a7f3] h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
