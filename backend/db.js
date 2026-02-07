const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("rbac.db");
db.run(`INSERT OR IGNORE INTO users (id, username, password, role_id, is_admin)
VALUES (1, 'admin', 'admin123', 1, 1)`);

db.run(`INSERT OR IGNORE INTO users (id, username, password, role_id, is_admin)
VALUES (2, 'user1', 'user123', 2, 0)`);

db.run(`INSERT OR IGNORE INTO permissions (role_id, table_name, field_name, can_view, can_edit)
VALUES (2, 'employees', 'name', 1, 0)`);

db.run(`INSERT OR IGNORE INTO permissions (role_id, table_name, field_name, can_view, can_edit)
VALUES (2, 'employees', 'email', 1, 0)`);

db.run(`INSERT OR IGNORE INTO employees (name, salary, email)
VALUES ('Ravi', 50000, 'ravi@test.com')`);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    role_id INTEGER,
    is_admin INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS permissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_id INTEGER,
    table_name TEXT,
    field_name TEXT,
    can_view INTEGER,
    can_edit INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    salary INTEGER,
    email TEXT
  )`);
});

module.exports = db;
