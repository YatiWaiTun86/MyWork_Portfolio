import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary text-light">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8 text-accent">
          Want to work together or have questions? Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Email Button */}
          <a
            href="mailto:yatiwaitun86@gmail.com"
            className="flex items-center justify-center gap-2 bg-accent text-dark px-6 py-3 rounded-full text-lg bg-[#71f1a7f3] hover:bg-[#59e26b] transition"
          >
            <Mail className="w-5 h-5" />
            yatiwaitun86@gmail.com
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/YatiWaiTun86"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-dark px-6 py-3 rounded-full text-lg bg-[#71f1a7f3] hover:bg-[#59e26b] transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          {/* Optional LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yati-wai-tun-850563386/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-dark px-6 py-3 rounded-full text-lg bg-[#71f1a7f3] hover:bg-[#59e26b] transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
