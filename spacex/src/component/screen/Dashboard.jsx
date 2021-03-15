import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
// import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

import { generateSearchTerm, ParamsFromUrl } from "../../utlis/index";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function Dashboard( props ) {
	let urlTimeline;
	let urlStatus;
	let urlStartDate;
	let urlEndDate;
	urlTimeline = props.location.pathname.substring(1) || "";
	const data = ParamsFromUrl(props.location.search);
	if (data !== undefined) {
		if (data.length === 3) {
			urlStartDate = data[0];
			urlEndDate = data[1];
			urlStatus = data[2];
		} else if (data.length === 2) {
			urlStartDate = data[0];
			urlEndDate = data[1];
		} else if (data.length === 1) {
			urlStatus = data[0];
		}
	}

	const [launches, setlaunches] = useState([]);
	const [timeline, setTimeline] = useState(urlTimeline || "");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [activePage, setActivePage] = useState(1);
	const [launchCount, setLaunchCount] = useState("");
	const [isLoading, setIsLoading] = useState(Boolean);

	const getLaunches = async (searchTerm) => {
		try {
			setIsLoading(true);
			const res = await axios.get(
				`https://api.spacexdata.com/v3/launches${searchTerm}`
			);
			setLaunchCount(res.headers["spacex-api-count"]);
			setlaunches(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const term = generateSearchTerm(
			timeline,
			startDate,
			endDate,
			activePage
		);
		getLaunches(term);
		props.history.push(term);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeline, startDate, endDate, activePage]);
	const userLogin = useSelector((auth)=>auth.firebase.auth)
	console.log(userLogin)
	if (userLogin.isLoaded && !userLogin.uid) return <Redirect to="/signin" />;

	return (
		<>
		<Navbar/>
			<div className="dashboard-container" style={{ backgroundColor: 'chocolate'}} >
				<div className="filters-container" >
					<FilterByTimeline
						timeline={timeline}
						setTimeline={setTimeline}
					/>
					<div className="multiple-filters">
						<FilterByDate
							startDate={startDate}
							endDate={endDate}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
						/>
					</div>
				</div>

				<LaunchList
					isLoading={isLoading}
					launches={launches}
					activePage={activePage}
					setActivePage={setActivePage}
					launchCount={launchCount}
				/>
			</div>
		</>
	);
}
export default withRouter(Dashboard);