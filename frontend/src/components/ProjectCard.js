const ProjectCard = ({ title, description, link }) => (
    <div className="border rounded-lg p-4">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
  
  export default ProjectCard;
  