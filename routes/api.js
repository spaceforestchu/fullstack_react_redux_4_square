var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/:resource", (req, res) => {

	let resource = req.params.resource;
	let controller = controllers[resource];

	if (controller === null || controller === undefined) {

		res.json({
			confirmation: "fail",
			resource: "Invalid Resource"
		});
		return;

	}

	controller.get(req.query, false)
		.then( results => {
			res.json({
				confirmation: "success",
				results: results
			});
			return;
		})
		.catch(err => {
			res.json({
				confirmation: "failure",
				message: err
			});
			return;
		});
});

router.get("/:resource/:id", (req, res) => {

	let resource = req.params.resource;
	let controller = controllers[resource];

	if (controller === null || controller === undefined) {

		res.json({
			confirmation: "fail",
			resource: "Invalid Resource"
		});
		return;

	}

	let id = req.params.id;

	controller.getById(id, false)
		.then(result => {
			res.json({
				confirmation: "success",
				result: result
			});
			return;
		})
		.catch(err => {
			res.json({
				confirmation: "fail",
				message: "Profile Not Found: " + err
			});
			return;
		});
});

router.post("/:resource", (req, res) => {
	let resource = req.params.resource;
	let controller = controllers[resource];

	if (controller === null || controller === undefined) {

		res.json({
			confirmation: "fail",
			resource: "Invalid Resource"
		});
		return;

	}

	let body = req.body;
	
	controller.post(body, false)
		.then(result => {
			res.json({
				confirmation: "success",
				result: result
			});
			return;
		})
		.catch(err => {
			res.json({
				confirmation: "fail",
				message: "error: " + err
			});
			return;
		});
});

router.put("/:resource/:id", (req, res) => {
	let resource = req.params.resource;
	let controller = controllers[resource];

	if (controller === null || controller === undefined) {

		res.json({
			confirmation: "fail",
			resource: "Invalid Resource"
		});
		return;

	}

	let body = req.body;
	let id = req.params.id;

	controller.update(id, body)
		.then(result => {
			res.json({
				confirmation: "success",
				result: result
			});
			return;
		})
		.catch(err => {
			res.json({
				confirmation: "fail",
				message: err
			});
			return;
		});
});

router.delete("/:resource/:id", (req, res) => {
	let resource = req.params.resource;
	let controller = controllers[resource];

	if (controller === null || controller === undefined) {

		res.json({
			confirmation: "fail",
			resource: "Invalid Resource"
		});
		return;

	}

	let body = req.body;
	let id = req.params.id;

	controller.delete(id, body)
		.then(result => {
			res.json({
				confirmation: "success",
				result: result
			});
			return;
		})
		.catch(err => {
			res.json({
				confirmation: "fail",
				message: err
			});
			return;
		});
});


module.exports = router;
