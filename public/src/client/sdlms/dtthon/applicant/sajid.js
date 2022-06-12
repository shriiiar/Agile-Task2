"use strict";

/* globals define */

define("forum/sdlms/dtthon/applicant/sajid", ["api"], function (api) {
	var sajid = {};
	sajid.init = async () => {
		const url = `http://localhost:4567/api/v3/apps//project?tid=1053`;
		const res = await fetch(url);
		const newData = await res.json();
		console.log(newData);

		const data = newData.response;

		$("#add").append(`
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6 px-5">
					<div class='card p-0'>
						<h5 class="py-2 text-center bg-dark text-white">${data.tasks[0].assets[0].asset_title}</h5>
						<div class="p-3">
							<p style="font-weight: bold">${data.description}</p>
						</div>
					</div>
				</div>
			</div>
		`)
	};
	return sajid;
});