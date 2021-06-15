import "./student.scss";
import StudentComponent from "./student-component/Student-Component";
import { useState, useEffect } from "react";

const Student = ({ data }) => {
	const pageLimit = 5;
	const totalPage = 6;
	const [curPage, setCurPage] = useState(1);

	const nextPage = () => {
		setCurPage((currcurPage) => currcurPage + 1);
	};

	const prevPage = () => {
		setCurPage((currcurPage) => currcurPage - 1);
	};
	const getPaginationList = () => {
		let startInd = curPage * pageLimit - pageLimit;
		let endInd = curPage * pageLimit;
		return data.slice(startInd, endInd);
	};
	const getPaginationButton = () => {
		let stInd = Math.floor((curPage - 1) / pageLimit) * pageLimit;
		const arr = new Array(pageLimit)
			.fill(null)
			.map((_, idx) => stInd + idx + 1);
		return arr;
	};
	const changeCurPage = (event) => {
		setCurPage(event.target.textContent);
	};

	return (
		<div className="students">
			<div className="list-cont">
				{getPaginationList().map((student) => (
					<StudentComponent
						profilePicUrl={student.profilePicUrl}
						name={student.name}
						percent={student.percentage}
						courses={student.courses}
						id={student._id}
					/>
				))}
			</div>
			<div className="pagination">
				<button className="prev" onClick={prevPage}>
					Back
				</button>
				{getPaginationButton().map((pageNum) => (
					<button onClick={changeCurPage} className="btn">
						{pageNum}
					</button>
				))}
				<button
					className={`next ${curPage === totalPage ? "disabled" : ""}`}
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Student;
