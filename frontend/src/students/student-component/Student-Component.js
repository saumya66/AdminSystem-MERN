import "./student-component.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import MyVerticallyCenteredModal from "./courses-component/Courses-Component";

const StudentComponent = (props) => {
	const [modalShow, setModalShow] = useState(false);
	let [courses, setCourses] = useState(props.courses);

	const postUpdate = async (selectedCourses) => {
		const newCourseList = props.courses.concat(selectedCourses);
		const updatedUser = {
			name: props.name,
			profilePicUrl: props.profilePicUrl,
			percentage: props.percentage,
			courses: newCourseList,
		};
		console.log(updatedUser);
		const newPerson = await axios.patch(
			`https://mainteny-admin.herokuapp.com/students/${props.id}/update`,
			updatedUser
		);
		window.location.reload(false);
	};

	const CourseComp = ({ course }) => {
		return (
			<div className="course">
				<h5>{course}</h5>
			</div>
		);
	};
	return (
		<div className="student-comp">
			<div className="cont-1">
				<img src={props.profilePicUrl} height="80" />
				<h5>{props.name}</h5>
			</div>
			<div className="cont-2">
				<div className="row courses">
					{courses.map((course) => (
						<CourseComp course={course} />
					))}
				</div>
			</div>
			<button className="edit" onClick={() => setModalShow(true)}>
				<i className="fa fa-edit"></i>
			</button>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				onAdd={postUpdate}	
				takenCourses={props.courses}
			/>
		</div>
	);
};

export default StudentComponent;
