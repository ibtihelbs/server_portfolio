const router = require("express").Router();
const project = require("../modal/portfolio");
router.get("/", async (req, res) => {
  try {
    const projects = await project.find();
    res.status(200).json(projects);
    console.log(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get("/find/:id", async (req, res) => {
  try {
    const projectById = await project.findById(req.params.id);
    res.status(201).json(projectById);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
