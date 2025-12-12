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
