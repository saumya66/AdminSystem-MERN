import "./courses-component.scss";
import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const MyVerticallyCenteredModal = (props) => {
	const [selectedSubs, setSelectedSubs] = useState([]);
	let allCourses = [
		"CS",
		"Maths",
		"Physics",
		"Chemistry",
		"Biology",
		"Microeconomics",
		"Macroeconomics",
		"Economics",
		"Arts",
		"Psychology",
		"History",
		"Life Science",
		"Aeronautical",
		"Civil",
		"Electrical",
	];
	allCourses = allCourses.filter(
		(course) => !props.takenCourses.includes(course)
	);
	const CourseComp = ({ course }) => {
		return (
			<div name={course} className="course" onClick={handleClick}>
				{course}
			</div>
		);
	};
	const handleClick = (event) => {
		setSelectedSubs([...selectedSubs, event.target.textContent]);
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Choose Subjects to add
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="row courses">
					{allCourses.map((onecourse, idx) => (
						<CourseComp key={idx} course={onecourse} />
					))}
				</div>
				<div className="row selected">
					<h5>{selectedSubs.join(", ")}</h5>
				</div>
			</Modal.Body>

			<Button onClick={props.onHide}>Close</Button>
			<Button onClick={(props.onHide, () => props.onAdd(selectedSubs))}>
				Add
			</Button>
		</Modal>
	);
};

export default MyVerticallyCenteredModal;
