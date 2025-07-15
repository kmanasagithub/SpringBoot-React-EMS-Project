# Spring-React-Ems-Project

# 💼 Employee Management System

A **Full-Stack Employee Management System (EMS)** built with **Spring Boot 3** and **React JS**.

This project is a complete **CRUD** application that allows users to **Add**, **Update**, **View**, **Delete** employees. It also displays the **total number of employees**.

---

## 📌 Features

- ✅ Add New Employee  
- ✅ Update Existing Employee Details  
- ✅ Delete Employee  
- ✅ View All Employees  
---

## 🧰 Technologies Used

### 🖥️ Backend
- Java
- Spring Boot 3
- Spring Data JPA
- MySQL

### 🌐 Frontend
- React JS
- Bootstrap 5
- Axios

### 🛠️ Tools
- Visual Studio Code (Frontend)
- IntelliJ IDEA (Backend)
- Postman (API Testing)
- Database (MySQL Server)

---

## ⚙️ Installation & Setup

### 🔧 Backend Setup

1. Open the backend folder in **IntelliJ IDEA**  
2. Create a MySQL database named `ems` using **XAMPP**  
3. Configure the database credentials in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems
   spring.datasource.username=root
   spring.datasource.password=
   spring.jpa.hibernate.ddl-auto=update
   ```
4. Run the Spring Boot application

### 💻 Frontend Setup

1. Open the frontend folder in Visual Studio Code
2. Install required dependencies: **npm install**
3. Start the React development server: **npm run dev**

⚠️ Important: Make sure the backend is running at **http://localhost:3000** before starting the frontend.
