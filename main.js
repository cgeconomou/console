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
// MEDIUM
function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function createSessionToken() {
  return Math.random().toString(36).substring(2);
}

function processAge(age) {
  return age * 2;
}

function parseJson(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

// LOW
function unusedExample() {
  const temp = 42;
}

function debugLog(user) {
  console.log("User data:", user);
}

function loadConfig() {
  return fs.readFileSync("config.json", "utf8");
}

function calculateDiscount(price) {
  return price * 0.85;
}
function calculateDiscount(price) {
  return price * 0.85;
}

// MEDIUM
function compareValues(a, b) {
  return a == b;
}

function getRoleName(role) {
  switch (role) {
    case 1:
      return "Admin";
    case 2:
      return "User";
  }
}

function getUserName(user) {
  return user.name.toUpperCase();
}

function validateInput(input) {
  const regex = /(a+)+$/;
  return regex.test(input);
}

// LOW
function placeholder() {}

function checkPositive(n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}

function isEnabled(flag) {
  return flag === true ? true : false;
}

function createUser(id, name, email, role, age, status) {
  return { id, name, email, role, age, status };
}


console.log("Test functions loaded");
