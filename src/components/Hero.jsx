import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const lines = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration Specialist",
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.focus();
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ishaan Sharma</span>
          </h1>

          <h2 className={`${styles.heroSubText} text-white-100`}>
            I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLine}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
                className="text-[#915EFF]"
              >
                {lines[currentLine]}
              </motion.span>
            </AnimatePresence>
          </h2>

          <div className="mt-4 flex gap-6">
            <button
              onClick={() => openLink("https://github.com/Ishaansharma23")}
              className="text-white hover:text-gray-400 text-3xl transition"
            >
              <FaGithub />
            </button>

            <button
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/ishaan-sharma-611361326/"
                )
              }
              className="text-[#0A66C2] hover:text-blue-700 text-3xl transition"
            >
              <FaLinkedin />
            </button>

            <button
              onClick={() => openLink("https://x.com/IshaanSharma06")}
              className="text-white hover:text-sky-400 text-3xl transition"
            >
              <FaTwitter />
            </button>
          </div>

          <a
            href="https://drive.google.com/file/d/1-zyL-CW6dCWkaf12ZYfDfqbs2NKvT3Xl/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-[#915EFF] text-white px-6 py-2 rounded-md hover:bg-[#7c45d7] font-medium w-max transition"
          >
            My Resume
          </a>
        </div>
      </div>

      <ComputersCanvas className="pointer-events-none" />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
