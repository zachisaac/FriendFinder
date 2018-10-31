//DEPENDENCIES
var path = require("path");

//EXPORTS
module.exports = function(app) {
    //WHICH PAGES ARE BEING EXPORTED
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	}); 

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

}