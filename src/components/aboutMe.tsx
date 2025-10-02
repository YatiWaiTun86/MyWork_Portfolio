export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 relative text-black">
          About
          <span className="block w-24 h-1 bg-[#71f1a7f3] mt-4"></span>
        </h2>

        {/* Intro Line (optional) */}
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          I’m passionate about coding, problem solving, and building impactful
          digital experiences.
        </h3>

        {/* Paragraphs */}
        <p className="text-gray-600 leading-relaxed mb-4">
          I see web development not just as a career, but as a way to bring
          ideas to life. I enjoy every step of the process—from planning and
          solving problems, to polishing the final user experience.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Coding puts me in flow: curious to explore how things work under the
          hood, eager to solve logic puzzles, and motivated to improve
          performance. It’s where{" "}
          <span className="text-[#71f1a7f3] font-medium">
            logic meets creativity
          </span>
          .
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether it’s refining small details that enhance usability, or
          implementing features that bring value, I care deeply about the
          quality of what I create. I’m always seeking better ways to build and
          more meaningful problems to solve.
        </p>
      </div>
    </section>
  );
}
