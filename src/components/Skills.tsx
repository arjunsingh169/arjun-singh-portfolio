
export default function Skills() {
  const skills = [
    { name: "HTML", level: "Learning" },
    { name: "CSS", level: "Learning" },
    { name: "JavaScript", level: "Learning" },
    { name: "React", level: "Learning" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="section-title text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
