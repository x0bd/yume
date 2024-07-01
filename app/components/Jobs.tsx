import React from "react";
import JobRow from "./JobRow";

const Jobs = () => {
	return (
		<div className="p-4 bg-gray-200 space-y-3 rounded">
			<h2 className="text-sm font-black mb-4">Recent Jobs</h2>
			<div className="flex flex-col gap-3">
				<JobRow />
				<JobRow />
				<JobRow />
				<JobRow />
				<JobRow />
			</div>
		</div>
	);
};

export default Jobs;
