# 📚 Library Management System (TypeScript + SQL)

# 📌 Project Overview

This is a Node.js + Express + TypeScript-based Library Management System with MySQL as the database and EJS for templating.
It was built as part of my backend development training, showcasing clean architecture, strong typing, and SQL-based persistent storage for real-world library operations.


## 📚 Table of Contents
  1. [Project Overview](#-project-overview)
  2. [Key Features](#-key-features)
  3. [Project Structure](#-project-folder-structure)
  4. [Tech Stack](#-tech-stack)
  5. [Concepts Covered](#-concepts-covered)
  6. [Setup Instructions](#-setup-instructions)
  7. [Author](#-author)
  8. [License](#-license)

---

# 🚀 Key Features
    •	✅ Admin Authentication → Login system for secure access.
	•	✅ Book Management → Add, update, delete, and search books with quantity tracking.
	•	✅ User Management → Manage library members with details & join dates.
	•	✅ Borrowing Orders → Issue/return books, maintain borrowing history, auto-update stock.
	•	✅ EJS Views → Clean UI for books, users, orders, and admin dashboard.
	•	✅ Database Integration → Uses MySQL for all library data.
	•	✅ Layered Architecture → Controllers, Services, Repositories for separation of concerns.
	•	✅ Environment Config → .env for DB credentials and server settings.
	•	✅ TypeScript → Strong typing across models, services, and repositories.

---

## 🧱 Project Folder Structure

```bash
library-management-system/
├── src/
│   ├── Config/                # Database configuration
│   │   └── db.ts
│   │
│   ├── Controllers/           # Request handlers
│   │   ├── bookController.ts
│   │   ├── loginController.ts
│   │   ├── orderController.ts
│   │   └── userController.ts
│   │
│   ├── Models/                # Entity definitions
│   │   ├── book.ts
│   │   ├── orders.ts
│   │   └── users.ts
│   │
│   ├── Repositories/          # Data access logic (DAO)
│   │   ├── BookRepository.ts
│   │   ├── orderRepository.ts
│   │   └── userRepository.ts
│   │
│   ├── Routes/                # Express routes
│   │   └── adminRoutes.ts
│   │
│   ├── Services/              # Business logic
│   │   ├── BookServices.ts
│   │   ├── orderService.ts
│   │   └── UserServices.ts
│   │
│   ├── Views/                 # EJS templates (UI)
│   │
│   └── app.ts                 # Main Express entry point
│
├── .env                       # Environment variables
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── README.md                  # Project documentation
└── .gitignore                 # Exclude node_modules, .env
```
⸻

# 🧰 Tech Stack

| 🧩 Category         | 🛠️ Tool/Technology    |
| ------------------ | --------------------- |
| Backend            | Node.js + Express     |
| Language           | TypeScript            |
| Database           | MySQL                 |
| Templating Engine  | EJS                   |
| Config Mgmt        | dotenv                |
| Utilities          | method-override       |
| IDE                | VSCode                |
| Version Control    | Git & GitHub          |
----------------------------------------------


# 🧠 Concepts Covered
	•	✅ RESTful API Design with Express
	•	✅ MVC-style architecture (Controllers, Services, Repositories, Models)
	•	✅ TypeScript Classes & Strong Typing
	•	✅ CRUD Operations with MySQL
	•	✅ Environment Configuration (.env)
	•	✅ Dynamic templating with EJS
	•	✅ Secure login handling (basic authentication)


# 📥 Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/fathima-salam/library-management-system.git
cd library-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a .env file in the root directory of the project and add your own database credentials:

```bash
DB_HOST=your-database-host
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
PORT=3000
```
Replace the placeholder values (your-database-host, your-username, your-password, your-database-name) with your own MySQL details.

### 4. Build and Run
```bash
npm run build
npm start
```

### 5. Access the App

```bash
Open:http://localhost:3000
```

## 👨‍💻 Author

**Fathima Salam**
Aspiring Software Engineer @ Brototype
📫 [LinkedIn](https://www.linkedin.com/in/fathima-salam)
✉️ [fathimasalam@gmail.com](mailto:fathimasalam@gmail.com)


## 📎 License

This project is for educational and portfolio purposes only.
______

✨ Built with passion and TypeScript for learning & growth.