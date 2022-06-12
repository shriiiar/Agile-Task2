"use strict";

const winston = require("winston");
const db = require("../database");
const user = require("../user");
const helpers = require('../controllers/helpers');
const groups = require('../groups');
const privileges = require('../privileges');

const sajidController = module.exports;

sajidController.get = async function (req, res, next) {
	const sajid = {};
	sajid.title = 'Sajid';
	res.render('sdlms/dtthon/applicant/sajid', sajid);
};
