import mongoose from "mongoose";
import CourseModel from "../Courses/model.js";
import ModuleModel from "./model.js";

const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb+srv://abirami_t:YOUR_PASSWORD@cluster0.kxayyxt.mongodb.net/kambaz";

// Mapping of old course names to old IDs
const courseNameToOldId = {
  "Web Development": "RS101",
  "Algorithms": "RS102",
  "Database Management Systems": "RS103",
  "Machine Learning": "RS104",
  "Software Engineering": "RS105",
  "Computer Networks": "RS106",
  "Mobile Application Development": "RS107",
  "Cloud Computing": "RS108"
};

async function updateModuleCourseIds() {
  try {
    // Connect to MongoDB
    await mongoose.connect(CONNECTION_STRING);
    console.log("✅ Connected to MongoDB");

    // Get all courses from database
    const courses = await CourseModel.find({});
    console.log(`📚 Found ${courses.length} courses`);

    // Create mapping: oldId -> newId
    const idMapping = {};
    for (const course of courses) {
      const oldId = courseNameToOldId[course.name];
      if (oldId) {
        idMapping[oldId] = course._id.toString();
        console.log(`Mapping: ${course.name} (${oldId} → ${course._id})`);
      }
    }

    // Update all modules
    let totalUpdated = 0;
    for (const [oldId, newId] of Object.entries(idMapping)) {
      const result = await ModuleModel.updateMany(
        { course: oldId },
        { $set: { course: newId } }
      );
      console.log(`✅ Updated ${result.modifiedCount} modules from ${oldId} to ${newId}`);
      totalUpdated += result.modifiedCount;
    }

    console.log(`\n🎉 Total modules updated: ${totalUpdated}`);
    
    // Verify
    const allModules = await ModuleModel.find({});
    console.log(`\n📊 Verification:`);
    console.log(`Total modules in database: ${allModules.length}`);
    
    for (const course of courses) {
      const count = await ModuleModel.countDocuments({ course: course._id.toString() });
      console.log(`  ${course.name}: ${count} modules`);
    }

    await mongoose.connection.close();
    console.log("\n✅ Done! Connection closed.");

  } catch (error) {
    console.error("❌ Error:", error);
    await mongoose.connection.close();
  }
}

// Run the script
updateModuleCourseIds(); 
