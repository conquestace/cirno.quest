import React from 'react';
import Snowfall from 'react-snowfall';

const App = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Snowfall snowflakeCount={100} />
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-xl font-bold">Cirno's Quest</h1>
        <nav>
          <a href="#about" className="px-4 hover:underline">About</a>
          <a href="#gallery" className="px-4 hover:underline">Gallery</a>
          <a href="#contact" className="px-4 hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-blue-400 to-blue-200">
        <h2 className="text-4xl font-extrabold text-white mb-4">Welcome to Cirno's Quest!</h2>
        <p className="text-lg text-white mb-6">The Coolest Place on the Web</p>
        <a href="#about" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </a>
      </section>

      <section id="about" className="py-10 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Cirno's Quest</h2>
        <p className="text-gray-700">This site celebrates Cirno with fun games, fan content, and quizzes!</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-4 bg-blue-50 shadow-md rounded-lg">
            <h3 className="font-bold">Fan Content</h3>
            <p>Explore artwork and stories created by Cirno fans.</p>
          </div>
          <div className="p-4 bg-blue-50 shadow-md rounded-lg">
            <h3 className="font-bold">Interactive Quizzes</h3>
            <p>Test your knowledge and learn more about Cirno!</p>
          </div>
          <div className="p-4 bg-blue-50 shadow-md rounded-lg">
            <h3 className="font-bold">Gallery</h3>
            <p>View amazing images of Cirno in action.</p>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-blue-600 text-white text-center">
        <p>&copy; 2024 Cirno's Quest</p>
        <p>
          <a href="https://github.com/your-repo" className="hover:underline">GitHub</a> | 
          <a href="#contact" className="hover:underline">Contact</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
