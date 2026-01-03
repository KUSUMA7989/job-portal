import { useNavigate } from "react-router-dom";
export default function ResumeUpload() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Upload Resume & Add Links</h2>
      <button onClick={() => navigate("/apply/step4")}>Next</button>
    </div>
  );
}
