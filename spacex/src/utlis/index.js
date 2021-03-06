import React from "react";
import { Button } from "semantic-ui-react";

import moment from "moment";

const StatusLabel = (launch_success) => {
	if (launch_success === null) {
		return (
			<Button size="tiny" color="yellow">
				Upcoming
			</Button>
		);
	} else if (launch_success) {
		return (
			<Button positive size="tiny" color="yellow">
				Successful
			</Button>
		);
	} else {
		return (
			<Button negative size="tiny">
				Failed
			</Button>
		);
	}
};

const FormattedDate = (utcDate) => {
	return moment(utcDate).utc().format("DD MMMM YYYY HH:mm");
};

const generateSearchTerm = (
	timeline,
	startDate,
	endDate,
	status,
	activePage
) => {
	let searchTerm = [];
	if (startDate) {
		startDate = moment(startDate).format("YYYY-MM-DD");
		searchTerm.push(`start=${startDate}`);
		if (!endDate) {
			searchTerm.push(`end=2030-01-01`);
		}
	}
	if (endDate) {
		endDate = moment(endDate).format("YYYY-MM-DD");
		searchTerm.push(`end=${endDate}`);
		if (!startDate) {
			searchTerm.push(`start=2002-05-06&`);
		}
	}
	if (activePage) {
		const limit = 10;
		searchTerm.push(`limit=${limit}`);
		searchTerm.push(`offset=${(activePage - 1) * limit}`);
	}

	if (status === true) {
		searchTerm.push(`launch_success=${status}`);
	} else if (status === false) {
		searchTerm.push(`launch_success=false`);
	}
	searchTerm = searchTerm.join("&");
	if (timeline === "All") {
		return `/?${searchTerm}`;
	} else {
		return `/${timeline}?${searchTerm}`;
	}
};

const ParamsFromUrl = (params) => {
	var urlStatus;
	var urlStartDate;
	var urlEndDate;
	let mainTerm = params.substring(1);
	let arr = mainTerm.split("&");
	if (arr.length === 5) {
		urlStartDate = arr[0].split("=")[1];
		urlEndDate = arr[1].split("=")[1];
		return [urlStartDate, urlEndDate, urlStatus];
	} else if (arr.length === 4) {
		urlStartDate = arr[0].split("=")[1];
		urlEndDate = arr[1].split("=")[1];
		return [urlStartDate, urlEndDate];
	} else if (arr.length === 2) {
		return arr.join("&");
	}
};


export {
	StatusLabel,
	FormattedDate,
	generateSearchTerm,
	ParamsFromUrl,
};