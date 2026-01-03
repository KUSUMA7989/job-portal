import { useNavigate } from "react-router-dom";
export default function DisclosureForm() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Voluntary Disclosures</h2>
      <button onClick={() => navigate("/apply/success")}>Submit</button>
    </div>
  );
}
