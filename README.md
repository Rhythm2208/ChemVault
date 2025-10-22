# 🧪 ChemVault

### A Web Application for Managing and Showcasing Chemical Compound Data

ChemVault is a web-based application designed to efficiently manage, explore, and display information about chemical compounds.  
Built using **Angular**, **Node.js**, **MySQL** and **CSV Import** it provides an intuitive user interface and a powerful backend for smooth data handling.

---

## 📘 Table of Contents

1. [Overview]  
2. [Screen Recording]
3. [Postman API Collection]  
4. [Setup Guide] 
5. [Working Screenshots]
6. [Project Deliverables]
7. [Unit Testing in Angular through Karma] 

---

## 🧠 Overview

ChemVault allows users to **view, edit, and organize chemical compound data** seamlessly through a clean and responsive interface.  
It connects a dynamic Angular frontend with a Node.js + MySQL backend to offer smooth CRUD operations and real-time data synchronization.

### ✨ Key Features
- Interactive and responsive UI built with **Angular**
- **Node.js + MySQL** backend integration
- End-to-end **CRUD** functionality for compound data
- **Pagination** and navigation between views
- Edit and update workflows for compound details
- **Responsive design** for desktop and mobile

---

## 🎥 Screen Recording

A detailed screen recording demonstrates the full ChemVault workflow and core features.

### Includes:
1. **Login & Homepage Overview** –  authentication and compound dashboard  
2. **Compound Navigation** – Open compounds and view detailed data  
3. **Edit & Update Workflow** – Real-time updates after editing compound details  
4. **Pagination & Page Navigation** – Smooth browsing with 10 items per page  
5. **Create New Compound** – Adding new entries and showing URL routing  
6. **Responsive Design & Styling** – Mobile-friendly layout and consistent CSS  
7. **Logout** – Secure session termination  


---

## 🧰 Postman API Collection

A **Postman API Collection** is included to test and validate all backend endpoints easily.  

### 🔗 Collection Features:
- CRUD APIs for **Compound Data Management**  
- **Authentication & Authorization** routes  
- Search and filter endpoints  
> Import this file into Postman to directly test API endpoints.

---

## ⚙️ Setup Guide

Follow the steps below to run ChemVault locally.                

### Step 1: Clone the Repository
```bash
git clone https://github.com/Rhythm2208/ChemVault.git
cd ChemVault
```

### Step 2: Verify Node.js and npm Installation

Angular requires **Node.js** and **npm** to run and build the application.  
Check if they’re installed on your system by running the following commands in your terminal:
```bash
node -v
npm -v
```

### Step 3: Install Angular CLI

Angular CLI is required to build, serve, and manage your Angular application.  
Install it globally on your system using the following command:

```bash
npm install -g @angular/cli
```
### Step 4: Start MAMP (MySQL)

To set up and run the MySQL database locally, follow these steps:

1. Open **MAMP**  
2. Click **Start Servers** (ensure **MySQL** is running)  
3. Use the default MySQL configuration:
  	Host: localhost  
    Port: 8889  
    User: root  
    Password: root
    If the database doesn’t exist, create it using phpMyAdmin:
    ```sql
    CREATE DATABASE mydatabase;
### Step 5: Configure the Backend Environment

Navigate to your **backend project folder** and create or edit a `.env` file with the following details:
```sql
DB_HOST=localhost
DB_PORT=8889
DB_USER=root
DB_PASSWORD=root
DB_NAME=mydatabase
ACCESS_TOKEN_SECRET=your_secret_key
```
### Step 6: Start the Backend

Navigate to your **backend** directory and run the following commands:

```bash
npm install
npm run dev 
# or
npm start    
```

### Step 7: Start the Angular Frontend

Navigate to your **frontend** folder and execute the following commands:

```bash
npm install
ng serve
```

## 🧪  Unit Testing in Angular through Karma
just Simply Go to Frontend Directory and run the following command in CLI :

```bash
ng test
```

<img width="1470" height="956" alt="image" src="https://github.com/user-attachments/assets/4bdc4161-60ff-4d9d-b33d-1baea6c6d78a" />




