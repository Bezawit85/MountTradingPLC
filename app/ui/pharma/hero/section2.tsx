'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12`}
    >
      <section className={`w-full space-y-16`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className={`text-3xl md:text-5xl font-extrabold text-[#008080]`}>
            Revolutionizing Healthcare Equipment
          </h1>
          <p className={`mt-4 text-base md:text-lg text-[#019696]`}>
            We deliver possibilities, not just machines.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-xl"
        >
          <h2 className={`text-3xl font-bold text-black mb-6`}>Who We Are</h2>
          <ul className={`list-disc list-inside text-gray-700 space-y-3`}>
            <li>Innovators merging technology and healthcare excellence</li>
            <li>Global partners for clinics and hospitals</li>
            <li>Passionate about making a real-world impact</li>
          </ul>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className={`text-2xl italic font-medium #019696`}>
            &quot;Empower every healthcare provider with world-class
            technology.&quot;
          </blockquote>
        </motion.div>
      </section>
    </main>
  );
}
