import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-[#E5E2DC]/70 bg-gradient-to-r from-[#F5F3EF] via-[#F0EEE9] to-[#F5F3EF]">
    <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[#6B6B6B] text-sm font-body">© 2026 Yash Chauhan Portfolio</p>
      <motion.a
        href="https://www.linkedin.com/in/yash-chauhan-a263a5215/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9A9A9A] hover:text-[#C8A96A] transition-colors"
        whileHover={{ scale: 1.2 }}
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
    </div>
  </footer>
);

export default Footer;
