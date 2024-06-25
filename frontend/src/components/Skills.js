import React from 'react';

async function fetchSkillsData() {
  try {
    const response = await fetch('http://localhost:3000/skills');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const skills = await response.json();

    // Map the skills to include image URLs
    const skillsWithImages = skills.map(skill => {
      const skillName = typeof skill === 'string' ? skill : (skill.name || String(skill)); // Convert skill to string
      return {
        name: skillName,
        imageUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${String(skillName).toLowerCase()}/${String(skillName).toLowerCase()}-original.svg`
      };
    });

    return skillsWithImages;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return [];
  }
}

const skillsWithImages = await fetchSkillsData();


const Skills = () => {
  return (
    <section className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsWithImages?.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow text-center">
              <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
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
