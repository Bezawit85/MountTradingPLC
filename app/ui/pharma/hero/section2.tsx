export default function AboutPage() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-white via-[#D0F0F0] to-[#B2DCDC] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12`}
    >
      <section className={`w-full space-y-16`}>
        <div className="text-center">
          <h1 className={`text-3xl md:text-5xl font-extrabold text-[#008080]`}>
            Revolutionizing Healthcare Equipment
          </h1>
          <p className={`mt-4 text-base md:text-lg text-[#019696]`}>
            We deliver possibilities, not just machines.
          </p>
        </div>

        {/* Who We Are */}
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-xl">
          <h2 className={`text-xl md:text-3xl font-bold text-black mb-6`}>
            Who We Are
          </h2>
          <ul
            className={`list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg`}
          >
            <li>Innovators merging technology and healthcare excellence</li>
            <li>Global partners for clinics and hospitals</li>
            <li>Passionate about making a real-world impact</li>
          </ul>
        </div>

        {/* Our Mission */}
        <div className="text-center">
          <blockquote
            className={`text-lg md:text-2xl italic font-medium #019696`}
          >
            &quot;Empower every healthcare provider with world-class
            technology.&quot;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
