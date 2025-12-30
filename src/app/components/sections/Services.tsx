import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm mb-2">Our Services</p>
          <h2 className="text-3xl font-bold">
            What We Can Do For You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111a2e] border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-white/70 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
