// ────────────────────────────────────────────────
//  Single-file "vulnerable patterns & clues" bundle
//  Use for: code review training, CTF, audit practice
// ────────────────────────────────────────────────

const { exec } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');

// ─── Critical / High severity ─────────────────────────────────────

function getUserById(db, id) {
  return db.query("SELECT * FROM users WHERE id = '" + id + "'");         // SQL Injection
}

function deleteAccount(db, uid) {
  db.query(`DELETE FROM users WHERE id = ${uid}`);                        // SQLi + no authz
}

function runOsCommand(userInput) {
  exec(userInput, (err, out) => console.log(out || err));                 // Command Injection
}

function unsafeRedirect(req, res) {
  res.redirect(req.query.next || '/');                                    // Open Redirect
}

function renderComment(html) {
  document.getElementById('comments').innerHTML += html;                  // XSS (innerHTML)
}

function mergeObject(target, source) {
  for (let k in source) target[k] = source[k];                            // Prototype pollution
}

function storeAvatar(file) {
  fs.writeFileSync(`uploads/${file.name}`, file.data);                     // Path traversal + no validation
}

const SECRET = "hf9s8df7-4klj23-89sdfkljh2893745kljh";                   // Hardcoded secret

// ─── Medium severity ──────────────────────────────────────────────

function hashPassword(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');               // Weak hash (MD5)
}

function createResetToken() {
  return Math.random().toString(36).slice(2, 15);                         // Weak / predictable token
}

function isAdmin(role) {
  return role == 1;                                                       // Weak comparison (==)
}

function safeJsonParse(str) {
  try { return JSON.parse(str); } catch (_) { return {}; }                // Error swallowing
}

function getProfilePicUrl(user) {
  return user?.profile?.pic?.toLowerCase();                               // Potential null/undefined dereference
}

function validateCode(input) {
  return /(a+)+$/.test(input);                                            // ReDoS (catastrophic backtracking)
}

function getOrderStatus(code) {
  switch (code) {
    case 1: return "Pending";
    case 2: return "Shipped";
  }                                                                       // Missing default case
}

// ─── Low / code quality / maintainability issues ─────────────────────

function calculateTotal(price) {
  return price * 1.2;                                                     // Magic number
}

function isAdult(age) {
  if (age >= 18) return true;
  else           return false;                                            // Redundant else
}

function isActive(flag) {
  return flag ? true : false;                                             // Redundant ternary
}

function debugUser(user) {
  console.log("Current user:", user);                                     // Leftover debug log
}

function waitHere() {
  for (let i = 0; i < 50000000; i++) {}                                   // Busy-wait / blocking
}

function getRoleName() {
  return "admin";                                                         // Hardcoded string instead of constant
}

function addOne(x) { return x + 1; }
function increment(x) { return x + 1; }                                   // Duplicated logic

function unusedHelper() {
  const tmp = 42;
  return "todo";                                                          // Dead code / unused variable
}

function doNothing() {
  return;                                                                 // Redundant return
}

// ─── Bonus suspicious patterns ───────────────────────────────────────

const jwtSecret = "super-secret-key-please-dont-tell-anyone";            // Another hardcoded secret

function logAccess(ip) {
  fs.appendFileSync('access.log', ip + '\n');                             // No sanitization, eventual DoS
}

function parseUserAgent(ua) {
  return ua.split(';')[1].trim();                                         // Brittle parsing → potential crash
}

// ─── Quick self-test / banner ────────────────────────────────────────

if (require.main === module) {
  console.log("Vulnerable clue bundle loaded.");
  console.log("High:", getUserById.name, runOsCommand.name, renderComment.name);
  console.log("Medium:", hashPassword.name, createResetToken.name, validateCode.name);
  console.log("Low:", isAdult.name, debugUser.name, waitHere.name);
}

// ─── More HIGH severity patterns ─────────────────────────────────────

function loginCheck(username, password) {
  return db.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`);  // Classic SQLi
}

function runBackupScript(scriptPath) {
  exec(`bash ${scriptPath}`);                                                     // Command injection via path
}

function downloadContent(url) {
  const fullUrl = "https://cdn.example.com/" + url;
  // imagine fetch or http.get here → SSRF + open redirect variant
  http.get(fullUrl);
}

function setAdminCookie(user) {
  res.cookie('role', user.isAdmin ? 'admin' : 'user', { signed: false });         // Unsigned cookie + trust client
}

function saveProfilePicture(filename, content) {
  fs.writeFileSync(`/var/www/uploads/${filename}`, content);                      // Arbitrary file write (path traversal)
}

const WEBHOOK_SECRET = "whsec_8f4b3c2d9a1e76543210987654321fedcba";             // Hardcoded webhook secret

// ─── More MEDIUM severity ─────────────────────────────────────────────

function signJwt(payload) {
  return jwt.sign(payload, "secret");                                             // Hardcoded weak jwt secret
}

function verifyJwt(token) {
  return jwt.verify(token, "secret");                                             // Same hardcoded secret
}

function createApiKey() {
  return crypto.randomBytes(8).toString('hex');                                   // Too short / predictable API key
}

function checkPermission(user, required) {
  return user.role == required;                                                   // == instead of ===
}

function parseSearchQuery(q) {
  return new RegExp(q, 'i');                                                      // Unescaped user regex → ReDoS
}



function safeDivide(a, b) {
  try {
    return a / b;
  } catch {
    return 0;
  }                                                                               // Swallowing division by zero
}

// ─── More LOW / code smell / maintainability ──────────────────────────

function formatPrice(p) {
  return "€" + p * 1.21;                                                          // Magic number (VAT?)
}

function isPowerUser(u) {
  if (u.level > 5) {
    return true
  } else {
    return false
  }                                                                               // Redundant else + missing semicolon
}
function formatPrice(p) {
  return "€" + p * 1.21;                                                          // Magic number (VAT?)
}

function isPowerUser(u) {
  if (u.level > 5) {
    return true
  } else {
    return false
  }                                                                               // Redundant else + missing semicolon
}

function logEvent(event) {
  console.log(event);                                                             // Console.log in production code
}

function wait(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}                                              // Synchronous sleep / CPU burn
}

function getUserGreeting(name) {
  return `Hello, ${name || 'Guest'}`;                                             // Template literal concatenation smell
}

function incrementCounter() {
  counter = counter + 1;
  return counter;
}                                                                                 // Implicit global variable

function processItems(items) {
  items.forEach(item => {
    console.log(item);
  });
  return items.length;
}                                                                                 // Side-effect in seemingly pure function

function validateEmail(email) {
  return email.includes('@');                                                     // Extremely weak email validation
}

function getConfigValue(key) {
  return config[key];                                                             // No default / no validation
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;                                    // No timezone / leap year consideration
}

// ─── Even more suspicious one-liners / fragments ──────────────────────

const adminPassword = "P@ssw0rd123";                                              // Classic weak password
function isAuthorized(token) { return token === "guest123"; }                     // Backdoor / hardcoded token
function runQuery(q) { return db.query(q); }                                      // Direct query passthrough
function saveData(d) { fs.writeFileSync("data.json", JSON.stringify(d)); }        // Race condition risk + no atomic write

console.log("Additional suspicious clue patterns loaded");