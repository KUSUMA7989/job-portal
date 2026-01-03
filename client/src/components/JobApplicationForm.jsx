import React, { useState } from "react";
import axios from "axios";

function JobApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    languages: "",
    skills: "",
    resume: null,
    links: "",
    voluntaryDisclosures: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "resume" && formData.resume) {
          data.append("resume", formData.resume);
        } else {
          data.append(key, formData[key]);
        }
      });

      await axios.post("http://localhost:5000/api/jobs/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <h2>✅ Application Submitted Successfully!</h2>
        <p>Thank you for applying. We will review your application soon.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Step 1: Registration */}
      {step === 1 && (
        <div style={styles.box}>
          <h2>Step 1: Registration</h2>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <button onClick={nextStep} style={styles.button}>
            Next
          </button>
        </div>
      )}

      {/* Step 2: Contact Information */}
      {step === 2 && (
        <div style={styles.box}>
          <h2>Step 2: Contact Information</h2>
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <div>
            <button onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button onClick={nextStep} style={styles.button}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Education, Experience, Languages, Skills */}
      {step === 3 && (
        <div style={styles.box}>
          <h2>Step 3: Education & Experience</h2>
          <input
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="languages"
            placeholder="Languages"
            value={formData.languages}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            style={styles.input}
          />
          <div>
            <button onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button onClick={nextStep} style={styles.button}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Upload Resume & Links */}
      {step === 4 && (
        <div style={styles.box}>
          <h2>Step 4: Upload Resume & Add Links</h2>
          <input type="file" onChange={handleFileChange} style={styles.input} />
          <input
            name="links"
            placeholder="LinkedIn / GitHub / Portfolio"
            value={formData.links}
            onChange={handleChange}
            style={styles.input}
          />
          <div>
            <button onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button onClick={nextStep} style={styles.button}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Voluntary Disclosures */}
      {step === 5 && (
        <div style={styles.box}>
          <h2>Step 5: Voluntary Disclosures</h2>
          <textarea
            name="voluntaryDisclosures"
            placeholder="Optional disclosures"
            value={formData.voluntaryDisclosures}
            onChange={handleChange}
            style={styles.textarea}
          />
          <div>
            <button onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button onClick={handleSubmit} style={styles.button}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple styling
const styles = {
  container: { maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif" },
  box: { padding: "20px", border: "2px solid #ccc", borderRadius: "10px", marginBottom: "20px" },
  input: { display: "block", margin: "10px 0", padding: "8px", width: "100%" },
  textarea: { display: "block", margin: "10px 0", padding: "8px", width: "100%", minHeight: "80px" },
  button: { margin: "10px 10px 0 0", padding: "10px 20px", cursor: "pointer" },
};

export default JobApplicationForm;
