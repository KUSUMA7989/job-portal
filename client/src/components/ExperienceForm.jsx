import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExperienceForm() {
  const [exp, setExp] = useState({
    experience: "",
    education: "",
    languages: "",
    skills: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Step 2 Data:", exp);
    navigate("/apply/step3");
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add Experience, Education, Languages, Skills</h2>

      <label className="font-medium">Experience</label>
      <input
        type="text"
        name="experience"
        placeholder="Enter your experience"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={exp.experience}
      />

      <label className="font-medium">Education</label>
      <input
        type="text"
        name="education"
        placeholder="Enter your education"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={exp.education}
      />

      <label className="font-medium">Languages</label>
      <input
        type="text"
        name="languages"
        placeholder="Enter languages you know"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={exp.languages}
      />

      <label className="font-medium">Skills</label>
      <input
        type="text"
        name="skills"
        placeholder="Enter your skills"
        className="border p-2 w-full mb-4"
        onChange={handleChange}
        value={exp.skills}
      />

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-green-600 text-white rounded w-full"
      >
        Next Step 3
      </button>
    </div>
  );
}
