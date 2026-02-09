const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],
    (err, user) => {
      if (!user) return res.status(401).send("Invalid login");
      res.json(user);
    }
  );
});

app.get("/employees/:roleId", (req, res) => {
  const roleId = req.params.roleId;

  db.all(
    "SELECT field_name FROM permissions WHERE role_id=? AND table_name='employees' AND can_view=1",
    [roleId],
    (err, perms) => {
      if (perms.length === 0) return res.json([]);
      const fields = perms.map(p => p.field_name).join(",");
      db.all(`SELECT ${fields} FROM employees`, [], (e, rows) => {
        res.json(rows);
      });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
