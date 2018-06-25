'use strict';

const twig = require('twig');
const express = require("express");
var fs = require('fs');
var path = require('path');

const port = 8888;
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.set('cache', false); // Disable view cache
twig.cache(false);
// app.disable('view cache');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
	res.render('index', { title: "Lemmino - Powerful Tools for Powerful Individuals", author: "Lemmino, Inc." });
});

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});