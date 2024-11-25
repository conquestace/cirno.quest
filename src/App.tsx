import React from "react";
import Snowfall from "react-snowfall";

const App: React.FC = () => {
  return (
    <div className="bg-icyWhite min-h-screen">
      {/* Background Animation */}
      <Snowfall snowflakeCount={80} />

      {/* Header */}
      <header className="bg-cirnoBlue text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cirno's Quest</h1>
          <nav className="flex gap-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#gallery" className="hover:underline">
              Gallery
            </a>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-cirnoBlue to-blue-300 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Cirno's World!</h2>
        <p className="text-lg mb-8">
          Discover the coolest place on the web, filled with fun, games, and icy adventures.
        </p>
        <a
          href="#about"
          className="bg-white text-cirnoBlue px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100"
        >
          Explore Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-softGray text-center">
        <h2 className="text-3xl font-bold mb-6">About Cirno's Quest</h2>
        <p className="text-gray-700 mb-8">
          Cirno's Quest is a fan project celebrating the fun and frosty charm of Cirno. From
          interactive quizzes to stunning galleries, there's something for every fan!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg w-60">
            <h3 className="text-xl font-semibold">Fan Content</h3>
            <p className="text-gray-600">
              Explore amazing artwork and stories crafted by Cirno fans worldwide.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-60">
            <h3 className="text-xl font-semibold">Quizzes</h3>
            <p className="text-gray-600">
              Test your knowledge of Cirno’s world with fun, interactive quizzes.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-60">
            <h3 className="text-xl font-semibold">Gallery</h3>
            <p className="text-gray-600">
              Browse a collection of Cirno-inspired art and photography.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cirnoBlue text-white py-6 text-center">
        <p>&copy; 2024 CirnoQuest.</p>
        <p>
          <a
            href="https://github.com/your-repo"
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
