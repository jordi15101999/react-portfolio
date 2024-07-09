/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { saveAs } from "file-saver";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import man from "../assets/man.png";
import TypeAnimation from "./TypeAnimation";

const Header = ({ darkMode, setDarkMode }) => {
  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfPath = "/CV.pdf";

    // Use FileSaver to trigger the download
    saveAs(pdfPath, "CV_Johannes_Jordi.pdf");
  };

  return (
    <section className="min-h-full">
      <nav className="py-10 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-gray-200">JohJor</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-gray-200"
            />
          </li>
          <li>
            <p
              onClick={handleDownload}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
            >
              CV
            </p>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center py-10 lg:flex lg:flex-row gap-10 lg:mb-10 border-b-2 lg:border-none">
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 shadow-lg overflow-hidden md:h-96 md:w-96 dark:shadow-white">
          <img
            className="deved"
            style={{ objectFit: "contain" }}
            src={man}
            alt="yoi"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl py-2 text-teal-600 font-medium text-center md:text-3xl">
            <TypeAnimation
              sequence={["Johannes Jordi", "Fullstack Developer"]}
              delay={3000}
            />
          </h2>
          <p className="text-md py-5 text-left leading-8 text-gray-800 md:text-lg max-w-lg mx-auto dark:text-gray-200">
            Freelancer providing services for Fullstack Development and design
            UI/UX needs. Join me down below and let's get cracking!
          </p>
          <div className="text-5xl flex justify-center gap-8 dark:text-white">
            <a
              href="https://www.instagram.com/johjordi/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <AiFillInstagram className="text-pink-600 icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/johannes-jordi-8a583417a/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <AiFillLinkedin className="text-blue-700 icon" />
            </a>
            <a
              href="https://github.com/jordi15101999"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
