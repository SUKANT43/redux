const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- FAKE DATABASE ---------------- */
let users = [
    { id: 1, name: "Sukant", role: "Developer" },
    { id: 2, name: "Arun", role: "Tester" },
    { id: 3, name: "Meena", role: "Manager" }
];

let nextId = 4;


/* ---------------- READ (GET ALL) ---------------- */
app.get("/users", (req, res) => {
    res.json(users);
});


/* ---------------- READ (GET BY ID) ---------------- */
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});


/* ---------------- CREATE ---------------- */
app.post("/users", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({ message: "Name and role required" });
    }

    const newUser = {
        id: nextId++,
        name,
        role
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created",
        data: newUser
    });
});


/* ---------------- UPDATE ---------------- */
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const { name, role } = req.body;

    if (name) user.name = name;
    if (role) user.role = role;

    res.json({
        message: "User updated",
        data: user
    });
});


/* ---------------- DELETE ---------------- */
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deleted = users.splice(index, 1);

    res.json({
        message: "User deleted",
        data: deleted[0]
    });
});


/* ---------------- SERVER ---------------- */
app.listen(5300, () => {
    console.log("Server running on http://localhost:5300");
});
