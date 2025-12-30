const projects = [
  { title: "Restaurant POS System", tag: "Web App", image: "/hero.jpg" },
  { title: "Hotel Management System", tag: "SaaS", image: "/hero.jpg" },
  { title: "E-Commerce Platform", tag: "E-Commerce", image: "/hero.jpg" },
];

export default function Projects() {
  return (
    <section className="py-20 bg-[#0e1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm mb-2">Our Work</p>
          <h2 className="text-3xl font-bold">Recent Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 bg-[#111a2e]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-indigo-400 text-sm">
                  {project.tag}
                </p>
                <h3 className="font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
