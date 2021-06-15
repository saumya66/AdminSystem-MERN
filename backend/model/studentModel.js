import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
	name: String,
	profilePicUrl: String,
	percentage: String,
	courses: [String],
});

const StudentModel = mongoose.model("students-marks", studentSchema);

export default StudentModel;
