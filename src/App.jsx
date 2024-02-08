import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
