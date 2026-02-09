# RBAC Zoho Assignment

## 📌 Project Overview
This project demonstrates a simple **Role-Based Access Control (RBAC)** system implemented using **Node.js, Express, SQLite, and plain HTML/CSS/JavaScript**.

The application supports **Admin** and **User** roles with different access permissions enforced by the backend and reflected in the frontend UI.

---

## 🛠️ Tech Stack
- Backend: Node.js, Express
- Database: SQLite
- Frontend: HTML, CSS, JavaScript
- Version Control: Git & GitHub

---

## 🔐 Roles & Permissions

### Admin
- Can log in as admin
- Can view all employee details
- Has full access

### User
- Can log in as a normal user
- Can view only permitted fields
- Restricted access enforced using permissions table

---

## 📂 Project Structure
rbac-zoho-task/
│
├── backend/
│ ├── server.js
│ └── db.js
│
├── frontend/
│ ├── login.html
│ ├── admin.html
│ └── user.html
│
├── rbac.db
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies
npm install
### 2️⃣ Start the server
npm start

Server will run at:
http://localhost:3000/


---

## 🌐 How to Access

Open browser and go to:
http://localhost:3000/login.html

---

## 🔑 Login Credentials

### Admin Login
- Username: `admin`
- Password: `admin123`

### User Login
- Username: `user1`
- Password: `user123`

---

## 🧠 RBAC Logic Explanation
- User roles are stored in the `users` table
- Permissions are stored in the `permissions` table
- Backend validates user role during login
- Frontend renders content based on permissions returned from backend

This ensures **secure and scalable role-based access control**.

---

## ✅ Assignment Status
- [x] Role-based login
- [x] Backend permission enforcement
- [x] Clean UI separation for admin and user
- [x] GitHub version control

---

## 👤 Author
**Dhanush D**  
Zoho Interview – Round 2 Task
