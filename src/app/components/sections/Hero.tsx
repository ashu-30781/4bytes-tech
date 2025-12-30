export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-indigo-400 text-sm mb-3">
            Welcome to 4Bytes-Tech
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Ideas Into <br />
            <span className="text-indigo-500">Digital Reality</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl">
            We build scalable software, modern web apps, and powerful
            mobile applications tailored to your business.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 px-6 py-3 rounded-lg">
              Start Your Project
            </button>
            <button className="border border-white/20 px-6 py-3 rounded-lg">
              View Our Work
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <Stat value="50+" label="Projects" />
            <Stat value="30+" label="Clients" />
            <Stat value="5+" label="Years" />
          </div>
        </div>

        {/* Right */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src="/hero.jpg"
            alt="4Bytes-Tech Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-white/60 text-sm">{label}</p>
    </div>
  );
}
