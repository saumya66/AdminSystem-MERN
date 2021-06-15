import "./admin.scss";
import adminPic from "./admin-pic.jpeg";

export const StatComp = (props) => {
	return (
		<div className="stat">
			<div className="title-info">
				<i className={props.icon} aria-hidden="true"></i>

				<p className="title">{props.title}</p>
			</div>
			<div className="container-count" style={{ backgroundColor: props.color }}>
				<p className="count">{props.count}</p>
			</div>
		</div>
	);
};

const Admin = () => {
	return (
		<div className="admin-col">
			<div className="admin-row">
				<div className="info">
					<img src={adminPic} alt="" />
					<h5 className="name">Saumya Ranjan Nayak</h5>

					<p className="college">
						<span>Institute : </span>Institue of Technical Education Research
					</p>
					<div className="stats">
						<h5 className="stats-heading">You help</h5>
						<div className="container"></div>
						<StatComp
							title="Batches"
							count={1}
							color="pink"
							icon="fa fa-users"
						/>
						<StatComp
							title="Students"
							count={50}
							color="yellow"
							icon="fa fa-user"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
