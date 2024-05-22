import React from 'react';

const skillsData = [
  { name: 'C#', imageUrl: 'path/to/csharp.png' },
  { name: 'Node.js', imageUrl: 'path/to/nodejs.png' },
  { name: 'JavaScript', imageUrl: 'path/to/javascript.png' },
  { name: 'React', imageUrl: 'path/to/react.png' },
  { name: 'CSS', imageUrl: 'path/to/css.png' },
  { name: 'HTML', imageUrl: 'path/to/html.png' },
  { name: 'Python', imageUrl: 'path/to/python.png' },
  { name: 'Django', imageUrl: 'path/to/django.png' },
  { name: 'SQL', imageUrl: 'path/to/sql.png' },
  { name: 'MongoDB', imageUrl: 'path/to/mongodb.png' },
  { name: 'Git',  imageUrl: 'path/to/git.png' },
  { name: 'Docker', imageUrl: 'path/to/docker.png' },
];

const Skills = () => {
  return (
    <section className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow text-center">
              <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p>{skill.description}</p>
              <div className="flex justify-center mt-2 space-x-2">
                {skill.name.split(' ').map((word, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
