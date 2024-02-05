import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [fetchdata, setFetchdata] = useState([]);

  const showPortfolio = async () => {
    const response = await fetch(
      `https://my-json-server.typicode.com/jordi15101999/db/portfolio/`
    );
    const data = await response.json();
    setPortfolio(data);
  };

  useEffect(() => {
    showPortfolio();
  }, []);

  const fetchDescData = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/jordi15101999/db/portfolio/${id}`
    );
    const data = await response.json();
    setFetchdata(data);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services />
        <Portfolio
          portfolio={portfolio}
          showModal={showModal}
          setShowModal={setShowModal}
          fetchdata={fetchdata}
          fetchDescData={fetchDescData}
        />
      </main>
      <Contact />
    </div>
  );
}
