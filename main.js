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
// =====================
// MEDIUM SEVERITY
// =====================

// Weak comparison
function isEqual(a, b) {
  return a == b;
}

// Insecure randomness
function generateId() {
  return Math.random() * 1000000;
}

// Missing input validation
function calculatePrice(price) {
  return price * 1.2;
}

// Possible null reference
function getEmail(user) {
  return user.email.toLowerCase();
}

// Swallowed error
function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
}

// Missing default case
function getStatus(code) {
  switch (code) {
    case 200:
      return "OK";
    case 404:
      return "Not Found";
  }
}

// Promise without catch
function loadData() {
  return fetch("/api/data").then(r => r.json());
}

// Regex with potential backtracking
function checkPattern(str) {
  const re = /(x+)+y/;
  return re.test(str);
}

// Shadowed variable
function sum(total) {
  let result = total;
  if (total > 10) {
    let total = 5;
    result += total;
  }
  return result;
}

// Too many responsibilities
function handleUser(user) {
  console.log(user);
  user.active = true;
  return JSON.stringify(user);
}


// =====================
// LOW SEVERITY
// =====================

// Unused variable
function unusedVar() {
  const temp = "unused";
}

// Empty function
function notImplemented() {}

// Redundant boolean
function isValid(flag) {
  return flag ? true : false;
}

// Unnecessary else
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Magic number
function applyTax(amount) {
  return amount * 1.17;
}

// Duplicate logic
function addOne(a) {
  return a + 1;
}

function addOneAgain(a) {
  return a + 1;
}

// Console log
function debug(data) {
  console.log("Debug:", data);
}

// Blocking loop
function slowLoop() {
  for (let i = 0; i < 100000000; i++) {}
}

// Redundant return
function doNothing() {
  return;
}

// Hard-coded string
function getRole() {
  return "ADMIN";
}
// Redundant return
function doNothing() {
  return;
}

// Hard-coded string
function getRole() {
  return "ADMIN";
}

console.log("Medium and low severity test bundle loaded");


console.log("Test functions loaded");
