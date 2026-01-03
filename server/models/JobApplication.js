import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  education: String,
  experience: String,
  languages: String,
  skills: String,
  links: String,
  voluntaryDisclosures: String,
  resume: String,
});

const JobApplication = mongoose.model("JobApplication", jobSchema);
export default JobApplication;
