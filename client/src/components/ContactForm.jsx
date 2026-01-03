import { useState } from "react";
import { useNavigate } from "react-router-dom";  // 1. Import this

export default function ContactForm() {
  const [form, setForm] = useState({
    regName: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    deviceType: "Laptop",
  });
  const navigate = useNavigate();  // 2. Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Form Data:", form);
    navigate("/apply/step2");  // 3. Navigate to next step/page
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>

      <input
        type="text"
        name="regName"
        placeholder="Registration Name"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.regName}
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.name}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.email}
      />

      <h2 className="text-lg font-semibold mb-2">Contact Information Form</h2>

      <input
        type="text"
        name="address"
        placeholder="Address"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.address}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.phone}
      />

      <select
        name="deviceType"
        className="border p-2 w-full mb-3"
        onChange={handleChange}
        value={form.deviceType}
      >
        <option>Laptop</option>
        <option>Mobile</option>
        <option>Tablet</option>
        <option>IoT Device</option>
      </select>

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-600 text-white rounded"// PR check: showing registration form files to team leader

      >
        Next
      </button>
    </div>
  );
}

