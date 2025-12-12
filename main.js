function getUser(db, userId) {
  // BAD: user input directly concatenated into query
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return db.query(query);
}

const { exec } = require("child_process");

function runCommand(cmd) {
  // BAD: unsanitized user input executed as a shell command
  exec(cmd, (err, stdout) => {
    if (err) console.error("Error:", err);
    console.log(stdout);
  });
}

function renderUserInput(input) {
  // BAD: directly injecting into DOM
  document.body.innerHTML = "<p>" + input + "</p>";
}


function renderUserInput(input) {
  // BAD: directly injecting into DOM
  document.body.innerHTML = "<p>" + input + "</p>";
}
// HIGH SEVERITY
function getUser(db, userId) {
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return db.query(query);
}

const { exec } = require("child_process");

function runCommand(cmd) {
  exec(cmd, (err, stdout) => {
    if (err) console.error("Error:", err);
    console.log(stdout);
  });
}

function renderUserInput(input) {
  document.body.innerHTML = "<p>" + input + "</p>";
}

const API_KEY = "12345-SECRET-HARDCODED-KEY";

// MEDIUM SEVERITY
const crypto = require("crypto");

function weakHash(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function generateToken() {
  return Math.random().toString(36).slice(2);
}

// LOW SEVERITY
function testUnused() {
  let x = 10;
}

const fs = require("fs");

function readConfig() {
  return fs.readFileSync("config.json", "utf8");
}

function parse(data) {
  return JSON.parse(data);
}

console.log("Test functions loaded");
