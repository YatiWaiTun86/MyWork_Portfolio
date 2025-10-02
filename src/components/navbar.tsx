"use client";

export function Navbar() {
  return (
    <nav className="w-full rounded bg-white shadow-sm sticky top-0 z-50 px-4">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Yati Wai Tun<span className="text-purple-600"></span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-[#71f1a7f3] transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[#71f1a7f3] transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-[#71f1a7f3] transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-[#71f1a7f3] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
