/* jshint esversion: 6 */
/* jshint -W032 */
const express = require("express");
const app = express();

const server = app.listen(process.env.PORT, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});