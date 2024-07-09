/* eslint-disable react/no-unescaped-entities */
import { HiCode } from "react-icons/hi";
import SkillCard from "./SkillCard";
import MarqueeElement from "./MarqueeElement";
import { STACKS } from "./Stacks";

const Services = () => {
  const stacksInArray = Object.entries(STACKS).sort(() => Math.random() - 0.5);
  return (
    <section className="mb-10">
      <div>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Hello there! I'm Johannes Jordi, a Software Developer
          passionate about building captivating digital experiences. My
          expertise lies in creating dynamic company profile websites, sleek
          single page applications, landing page website,polished personal profiles, and develop
          fullstack <span className="text-teal-500">Website</span> and frontend <span className="text-teal-500">Desktop App</span> using javascript libraries. Proficient in{" "}
          <span className="text-teal-500">
            HTML, CSS, Javascript, Express.js, Spring Boot( Java ), React.js, Electron.js, Angular.js, Bootstrap, Tailwind CSS, and Sass
          </span>
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I bring ideas to life with clean and efficient code, ensuring seamless
          and responsive designs. What sets me apart is my commitment to
          user-centric design. I take pride in crafting engaging UI/UX
          experiences, and I turn these visions into reality using Figma. My
          journey is a fusion of creativity and technology, and I'm always
          excited to take on new challenges. Let's collaborate and transform
          your concepts into visually stunning and functional web solutions!
        </p>
      </div>
      <div className="space-y-6 mt-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 dark:text-white">
            <HiCode className="text-2xl" />
            <p className=" text-xl font-semibold">Skills</p>
          </div>
        </div>

        <div className="flex flex-col space-y-1 overflow-x-hidden">
          {Array.from({ length: 2 }, (_, index) => {
            const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
            return (
              <MarqueeElement
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                {slider.map(([name, icon], index) => (
                  <SkillCard key={index} name={name} icon={icon} />
                ))}
              </MarqueeElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
