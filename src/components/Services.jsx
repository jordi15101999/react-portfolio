/* eslint-disable react/no-unescaped-entities */
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoFigma,
} from "react-icons/io5";

const Services = () => {
  return (
    <section className="mb-10">
      <div>
        <h3 className="text-3xl py-10 dark:text-gray-200">What can I do?</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Hello there! I'm Johannes Jordi, a freelance website developer
          passionate about building captivating digital experiences. My
          expertise lies in creating dynamic company profile websites, sleek
          single-page applications, and polished personal profiles. Proficient
          in{" "}
          <span className="text-teal-500">
            React.js, Javascript, Bootstrap, and Tailwind CSS
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
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white h-auto">
          <div className="flex justify-center">
            <IoLogoHtml5 className="text-5xl text-orange-500" />
            <IoLogoCss3 className="text-5xl text-blue-600" />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2 ">HTML & CSS</h3>
          <p className="py-2 text-teal-600">
            I usually using framework for CSS like Bootstrap , Materialize CSS,
            and Tailwind CSS.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white h-auto">
          <div className="flex justify-center">
            <IoLogoJavascript className="text-5xl text-yellow-300" />
            <IoLogoReact className="text-5xl text-blue-400" />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">
            JavaScript & ReactJS
          </h3>
          <p className="py-2 text-teal-600">
            I can write code with Javascript, for styling animation or function
            on simple project, or using framework React JS for bigger project.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white h-auto">
          <IoLogoFigma className="text-5xl mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            UI/UX Design ( Figma )
          </h3>
          <p className="py-2 text-teal-600">
            For design project before development. I use figma for UI design and
            protoype.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
