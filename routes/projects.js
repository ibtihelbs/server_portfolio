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

module.exports = router;
