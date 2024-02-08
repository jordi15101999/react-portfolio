/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { LuGalleryHorizontal } from "react-icons/lu";
import { PROJECTS } from "../utils/ProjectData";
import { STACKS } from "./Stacks";
import Tooltip from "./ToolTip";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const Portfolio = () => {
  const portfolio = PROJECTS;

  return (
    <section>
      <div className="space-y-6">
        <div className="flex items-center space-x-2 dark:text-white">
          <LuGalleryHorizontal className="text-2xl" />
          <p className=" text-xl font-semibold">Projects</p>
        </div>
        <div className="grid gap-5 pt-2 sm:grid-cols-3">
          {portfolio &&
            portfolio.map((port) => {
              return (
                <div
                  className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-700 lg:hover:scale-[102%]"
                  key={port.id}
                >
                  <img
                    src={`/${port.gambar}`}
                    alt="cover"
                    className="h-[180px] w-full rounded-t-xl object-cover object-center"
                  />
                  <div className="space-y-2 p-5 ">
                    <div className=" cursor-pointer text-md text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-500 lg:hover:text-teal-800">
                      {port.nama}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {port.bahasa.split(",").map((language, index) => (
                        <div className="w-6" key={index}>
                          <Tooltip
                            title={language}
                            icon={STACKS[language.trim()]}
                          />
                        </div>
                      ))}
                    </div>
                    <hr />
                    <div className="flex gap-3 justify-center text-sm dark:text-white">
                      <a
                        href={port.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold"
                      >
                        <FaGithubSquare className="text-xl" /> Source Code
                      </a>
                      <p>|</p>
                      <a
                        href={port.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
