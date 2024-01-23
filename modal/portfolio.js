const mongoose = require("mongoose");

const TechnologiesSchema = new mongoose.Schema({
  frontend: { type: [String], required: true },
  backend: { type: [String], required: true },
});

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: TechnologiesSchema, required: true },
  contributions: { type: String, required: true },
  exploreLink: { type: String, required: true },
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
