import React from "react";
import Snowfall from "react-snowfall";
import cirnoCowTrolley from "./assets/0323-1girl, cirno, fighting stance, train, fr-noobaiXLNAIXL_earlyAccessVersion-605573019.png"

const App: React.FC = () => {
  return (
    <div className="bg-icyWhite min-h-screen">
      {/* Background Animation */}
      <Snowfall snowflakeCount={80} />

      {/* Header */}
      <header className="bg-cirnoBlue text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CirnoQuest</h1>
          <nav className="flex gap-6">

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-cirnoBlue to-blue-300 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Welcome</h2>
        <p className="text-lg mb-8">
          coolest place
        </p>
              {/* Display the Image */}
      <img
        src={cirnoCowTrolley}
        alt="Cirno"
        className="w-1/2 rounded-lg shadow-lg"
      />
        <a
          href="#about"
          className="bg-white text-cirnoBlue px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100"
        >
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-softGray text-center">

        <div className="flex flex-wrap justify-center gap-6">


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cirnoBlue text-white py-6 text-center">
        <p>&copy; 2024 CirnoQuest.</p>
        <p>
          <a
            href="https://github.com/conquestace/cirno.quest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>{" "}
          {" "}
         
        </p>
      </footer>
    </div>
  );
};

export default App;
