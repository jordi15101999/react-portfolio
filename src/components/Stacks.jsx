import { BsFillBootstrapFill } from "react-icons/bs";
import { DiMaterializecss } from "react-icons/di";
import {
  SiMongodb,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiReacttable,
  SiMysql,
  SiCodeigniter,
  SiAxios,
  // SiChakraui,
  //   SiExpo,
  //   SiGraphql,
  //   SiReacthookform,
  //   SiRedux,
  //   SiTypescript,
} from "react-icons/si";

const iconSize = "100%";

export const STACKS = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  MongoDB: <SiMongodb size={iconSize} className="text-green-500" />,
  "Express.js": <SiExpress size={iconSize} />,
  "React Query": <SiReactquery size={iconSize} className="text-red-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Github: <SiGithub size={iconSize} />,
  "React Router": <SiReactrouter size={iconSize} className="text-pink-500" />,
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
  Json: <SiJson size={iconSize} className="text-neutral-700" />,
  MySql: <SiMysql size={iconSize} className="text-blue-500" />,
  CodeIgniter: <SiCodeigniter size={iconSize} className="text-orange-500" />,
  MaterializeCSS: <DiMaterializecss size={iconSize} className="text-red-400" />,
  Axios: <SiAxios size={iconSize} className="text-purple-400" />,
  // ChakraUI: <SiChakraui size={iconSize} className="text-teal-500" />,
  //   TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  //   Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  //   "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  //   Expo: <SiExpo size={iconSize} />,
  //   GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  //   "React Hook Form": (
  //     <SiReacthookform size={iconSize} className="text-pink-500" />
};