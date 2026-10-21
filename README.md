# CampusQueue 🎓
### Student Service Management System

CampusQueue is a web-based application designed to organize student queues and improve the management of campus services.

---

## 📌 About the Project

CampusQueue allows users to register students, manage waiting queues, serve students in order of arrival, and maintain records of completed services.

The system provides a simple dashboard for monitoring waiting students and tracking service activities.

## ✨ Key Features

- **Student Registration:** Register students using their names, student IDs, and required services.
- **Queue Management:** Add, view, serve, and remove students from the waiting queue.
- **FIFO Processing:** Serve students in the order they join the queue.
- **Dashboard:** Display waiting counts, served counts, and the next student.
- **Service History:** Maintain records of completed services.
- **Search:** Find students in the waiting queue.
- **CSV Export:** Access queue and service history data in CSV format.
- **Local Storage:** Preserve records across page refreshes in the same browser environment.

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| HTML5 | Structures the application |
| CSS3 | Styles the user interface |
| JavaScript | Implements application functionality |
| Local Storage | Saves data in the browser |
| GitHub Pages | Hosts the live website |

## ⚙️ How It Works

1. Register a student by entering the required details.
2. Add the student to the waiting queue.
3. View the queue and dashboard statistics.
4. Serve the next student.
5. Record the completed service in the history section.
6. Export queue or service history data when needed.

## 🔄 Queue Management

CampusQueue uses the **First-In, First-Out (FIFO)** principle.

The first student to join the queue is served first, followed by the students who arrive later.

## 💾 Data Storage

The application uses browser Local Storage to save queue records and service history.

**Note:** Data is stored locally and does not automatically synchronize between different browsers or devices.

## 🚀 Installation

1. Clone or download this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the correct project folder.
3. Open `index.html` in a web browser or use a local development server.
4. Register students and begin managing the queue.

## 📁 Project Structure

```text
CampusQueue/
├── index.html
├── style.css
├── script.js
└── README.md