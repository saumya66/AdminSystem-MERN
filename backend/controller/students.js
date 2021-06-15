import express from "express";
import StudentModel from "../model/studentModel.js";
import mongoose from "mongoose";
export const getStudents = async (req, res) => {
	try {
		const students = await StudentModel.find();
		//
		res.status(200).json(students);
	} catch (error) {
		console.log(`Can't get the student data : ${error}`);
	}
};

export const postStudent = async (req, res) => {
	try {
		const body = req.body;
		const newStudent = new StudentModel(body);
		await newStudent.save();
		res.status(200).json(newStudent);
	} catch (err) {
		console.log(`Error while posting ${err}`);
	}
};

export const updateCourse = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, profilePicUrl, percentage, courses } = req.body;
		// console.log(id, newCourses);

		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send(`No person with that ${id}`);

		const studentUpdate = {
			name,
			profilePicUrl,
			percentage,
			courses,
			_id: id,
		};
		const updatedStudent = await StudentModel.findByIdAndUpdate(
			id,
			studentUpdate,
			{
				new: true,
			}
		);
		res.status(200).send(updatedStudent);
	} catch (error) {
		console.log(`Couldn't update courses ${error}`);
	}
};
