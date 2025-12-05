const experience = [
  {
    name: "Smuv Legacy Limited",
    duration: "October 2025 - November-2025",
  },

  {
    name: "Glam Gallery Media",
    duration: "April 2025 - July-2025",
  },
];

export const Work = () => {
  return (
    <div className="p-4 ">
      {experience.map((exp) => (
        <div className="experience p-4">
          <div>
            <h3>{exp.name}</h3>
            <p>{exp.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
