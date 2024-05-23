import React from 'react';
import { FaMobileAlt, FaLaptopCode, FaServer, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const tasks = [
    { name: 'Mobile App Development', icon: <FaMobileAlt /> },
    { name: 'Website Development', icon: <FaLaptopCode /> },
    { name: 'Backend Development', icon: <FaServer /> },
  ];

  return (
    <header className="h-screen flex flex-col">
      <nav className="container mx-auto px-6 py-4 flex justify-end">
        <a href="#about" className="text-[#212121] hover:text-[#212121] hover:underline mr-8">Home</a>
        <a href="#skills" className="text-[#212121] hover:text-[#212121] hover:underline mr-8">Blogs</a>
        <a href="#skills" className="text-[#212121] hover:text-[#212121] hover:underline mr-8">Skills</a>
        <a href="#experience" className="text-[#212121] hover:text-[#212121] hover:underline mr-8">Experience</a>
        <a href="#contact" className="text-[#212121] hover:text-[#212121] hover:underline">Contact</a>
      </nav>

      <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex-1 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-4">I&apos;m <span className="font-bold">Huseyn Hamidov</span></h1>
          <p className="text-lg mb-6">I&apos;m a fullstack developer {'{student}'} with a passion for creating solutions that make a difference.</p>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <a href="https://github.com/yourprofile" className="text-[#212121] hover:text-[#212121] mr-4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-[#212121] hover:text-[#212121]" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex-1 md:ml-8 flex items-center justify-center md:justify-end">
          <img
            src="https://imgs.search.brave.com/Fs8svqyxOWv2uuKoLiO7WvMOYK9WkZ6wOjZx4AzyDGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I0L0xp/b25lbC1NZXNzaS1B/cmdlbnRpbmEtMjAy/Mi1GSUZBLVdvcmxk/LUN1cF8lMjhjcm9w/cGVkJTI5LmpwZy81/MTJweC1MaW9uZWwt/TWVzc2ktQXJnZW50/aW5hLTIwMjItRklG/QS1Xb3JsZC1DdXBf/JTI4Y3JvcHBlZCUy/OS5qcGc"
            alt="Your Name"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full"
          />
        </div>
      </div>

      <div className="py-8 overflow-y-auto">
        <div id="about" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What I Do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="text-[#212121] px-4 py-6 rounded-xl flex items-start justify-center flex-col">
                <div className="text-3xl mb-4">{task.icon}</div>
                <span className="text-lg">{task.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
