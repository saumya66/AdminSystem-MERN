import "./App.scss";
import Student from "./students/Students";
import { useEffect, useState } from "react";
import Admin from "./admin/Admin";
function App() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		fetch("https://mainteny-admin.herokuapp.com/students")
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);
	return (
		<div className="app">
			<Admin />
			<Student data={students} />
		</div>
	);
}

export default App;
