require("dotenv").config();
const mockData = require("./mock-data.json");
const project = require("./modal/portfolio");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.SECRET_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    // Clear existing data
    await project.deleteMany({});
    console.log("Old data cleared");

    // Seed new data
    await project.create(mockData);
    console.log("Database seeded successfully!");

    // Graceful exit
    process.exit(0);
  } catch (error) {
    console.error("Error while seeding the database:", error.message);
    process.exit(1);
  }
};

// Start the process
(async () => {
  await connectDB();
  await seedDatabase();
})();
