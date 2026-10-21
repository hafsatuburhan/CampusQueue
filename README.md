# 🎓 CampusQueue — Student Service Management System

A web-based application designed to organize student queues and manage campus services efficiently.

![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Objectives](#-objectives)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [How It Works](#-how-it-works)
- [Queue Management](#-queue-management)
- [Data Storage](#-data-storage)
- [Installation and Usage](#-installation-and-usage)
- [Limitations](#-limitations)
- [Future Improvements](#-future-improvements)
- [Conclusion](#-conclusion)
- [Author](#-author)

---

## 📖 Project Overview

**CampusQueue** is a web-based Student Service Management and Queue System developed to improve the organization of student services on campus.

The application allows users to register students, manage waiting queues, serve students in order of arrival, and maintain a history of completed services.

CampusQueue provides a simple interface for monitoring waiting students and tracking service activities.

## 🎯 Objectives

The main objectives of CampusQueue are to:

- Register students who require campus services.
- Organize students into a waiting queue.
- Ensure students are served in the correct order.
- Maintain records of completed services.
- Display queue statistics on a dashboard.
- Search for students in the waiting queue.
- Export waiting queue and service history data in CSV format.
- Preserve records using browser local storage.

## ✨ Features

### 1. Student Registration
Allows users to enter a student's name, student ID, and required service.

### 2. Queue Management
Displays registered students in an organized waiting list. Users can serve students or remove them from the queue.

### 3. FIFO Queue System
Uses the **First-In, First-Out (FIFO)** principle to serve students in their order of arrival.

### 4. Dashboard Statistics
Displays important information, including:

- Number of students waiting.
- Number of students served.
- Next student to be served.
- Current date.

### 5. Recently Served History
Records students whose services have been completed, including their names, IDs, service types, and service times.

### 6. Search Functionality
Allows users to search the waiting queue to locate student records more easily.

### 7. CSV Export
Provides options to access waiting queue data and served student history in CSV format for reporting and record keeping.

### 8. Data Persistence
Uses browser local storage to preserve application records across page refreshes in the same browser environment.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structures the application's content and interface. |
| CSS3 | Styles the application and improves its visual appearance. |
| JavaScript | Implements the application's functionality and interactivity. |
| JavaScript Arrays | Manage collections of student and service records. |
| DOM Manipulation | Updates the interface dynamically. |
| Local Storage | Saves application data in the browser. |
| GitHub | Hosts and manages the project's source code. |
| GitHub Pages | Publishes the application online. |

---

## ⚙️ How It Works

CampusQueue follows a straightforward process:

1. **Register:** Enter the student's name, student ID, and required service.
2. **Add to Queue:** Submit the form to add the student to the waiting list.
3. **Monitor:** View waiting students and updated dashboard statistics.
4. **Serve:** Serve the next student in the queue.
5. **Record:** Move the served student's information to the Recently Served section.
6. **Save:** Store application data in browser local storage.
7. **Export:** Access CSV-formatted queue and service history data.

---

## 🔄 Queue Management

CampusQueue follows the **First-In, First-Out (FIFO)** principle.

This means that the first student to join the queue should be the first student served.

**Example:**

| Arrival Order | Student | Service Order |
|---|---|---|
| 1 | Student A | 1st |
| 2 | Student B | 2nd |
| 3 | Student C | 3rd |

This approach promotes fairness and helps maintain an organized service process.

---

## 💾 Data Storage

CampusQueue uses the browser's **Local Storage API** to save application data.

JavaScript manages the student queue and service history, while local storage allows the application to retrieve saved records after a page refresh.

**Important:** Local storage is specific to the browser and website origin. Data does not automatically synchronize between different browsers or devices.

The current version does not use a centralized database.

---

## 🚀 Installation and Usage

### Run Locally

1. Download or clone this repository.
2. Ensure the project files are in the correct folder structure.
3. Open `index.html` in a modern web browser or run it using a local development server.
4. Register students using the registration form.
5. Manage the waiting queue using the available controls.
6. View completed services in the Recently Served section.
7. Use the export options to access queue and history data.

### Project Files

The application consists of three main files:

| File | Description |
|---|---|
| `index.html` | Contains the structure of the application. |
| `style.css` | Contains the application's styling. |
| `script.js` | Contains the application's logic and functionality. |

### Live Demo

Once GitHub Pages has been enabled, access the deployed application here:

**Live Website:** _Add your GitHub Pages link here._

---

## ⚠️ Limitations

The current version has the following limitations:

- Data is stored locally in the browser.
- Records do not automatically synchronize across devices.
- The application does not use a centralized database.
- CSV data may need to be copied into a file or spreadsheet manually.
- Records depend on users entering accurate information.

---

## 🔮 Future Improvements

Possible enhancements include:

- Database integration for centralized data storage.
- Secure administrator authentication.
- Synchronization across multiple devices.
- Notifications when a student's turn approaches.
- Advanced search and filtering.
- Direct CSV file downloads.
- Queue performance reports and analytics.
- Improved access control and data protection.

---

## 🏁 Conclusion

CampusQueue demonstrates how HTML, CSS, and JavaScript can be combined to develop a practical web application for managing student services.

The system integrates student registration, FIFO queue management, dashboard statistics, service history, searching, and data storage into one interface.

The project provides practical experience with JavaScript arrays, functions, event handling, DOM manipulation, and browser local storage.

CampusQueue can serve as a foundation for a more advanced student service management system with database integration and multi-user support.

---

## 👩‍💻 Author

**Name:** Hafsatu Burhandeen

**Project:** CampusQueue — Student Service Management System

**Project Type:** Web Application

**Technologies:** HTML5, CSS3, JavaScript

**Repository:** CampusQueue

**Deployment:** GitHub Pages

---

*Developed as an academic project to demonstrate practical web development and queue management concepts.*