CampusQueue — Student Service Management System
1. Project Overview
CampusQueue is a web-based Student Service Management and Queue System designed to organize and manage students waiting to receive services on campus. The application provides a simple and user-friendly interface for registering students, managing waiting queues, serving students in order, and keeping records of completed services.
The system aims to reduce confusion, improve service organization, and make it easier to track students waiting for assistance at campus service points.
2. Objectives
The main objectives of CampusQueue are to:
Register students who require campus services.
Organize students into a waiting queue.
Serve students in the order they arrive.
Keep records of students whose services have been completed.
Display real-time queue statistics on a dashboard.
Allow users to search for students in the queue.
Export waiting queue and service history data in CSV format.
Preserve application data using browser local storage.
3. Features
Student Registration
The application allows users to enter a student's name, student ID, and required service. The submitted information is added to the waiting queue.
Queue Management
CampusQueue displays registered students in an organized queue. Users can view student details, serve students, and remove students from the queue when necessary.
First-In, First-Out (FIFO)
The system follows the First-In, First-Out (FIFO) principle. This means that the student who joins the queue first is served before students who join later.
Dashboard Statistics
The dashboard displays important information, including:
Number of students currently waiting.
Number of students served.
The next student to be served.
The current date.
Recently Served History
The application maintains a record of students who have received services. This includes their names, student IDs, service types, and service times.
Search Functionality
Users can search the waiting queue to find specific students more easily.
CSV Export
CampusQueue provides options to export waiting queue information and recently served records in CSV format. The exported data can be copied and transferred to a spreadsheet application for further use.
Data Persistence
The application uses the browser's local storage to preserve queue information and service history. This allows saved records to remain available after refreshing the page in the same browser environment.
4. Technologies Used
The application was developed using the following web technologies:
Technology
Purpose
HTML5
Structures the application interface and its content.
CSS3
Styles the interface and improves its appearance.
JavaScript
Implements registration, queue management, searching, serving, statistics, and CSV export functionality.
Browser Local Storage
Stores queue records, service history, and related application data locally.
GitHub
Hosts the source code and supports project version management.
GitHub Pages
Publishes the application online so users can access it through a live link.
5. How the Application Works
The application operates through the following process:
Register a student: The user enters the student's name, student ID, and required service.
Add to the queue: The application validates the information and adds the student to the waiting queue.
Display queue information: The dashboard and queue table update to reflect the current waiting list.
Serve the next student: The user selects the option to serve the next student in the queue.
Update service history: The served student's information is transferred to the Recently Served section.
Update statistics: The dashboard refreshes the waiting count, served count, and next student information.
Save records: The application stores its data in browser local storage.
Export records: Users can access CSV-formatted information about waiting students and completed services.
6. Application of JavaScript
JavaScript is responsible for making CampusQueue interactive and functional.
It handles form submissions, validates student information, updates the waiting queue, processes service completion, and displays records dynamically without requiring a full page reload for each operation.
JavaScript arrays are used to manage collections of student records. Array operations allow the application to add students to the queue, remove served students, and maintain the order in which students are processed.
The Document Object Model (DOM) is used to update the dashboard, queue table, service history, and other interface elements in response to user actions.
Local storage provides a way to save application data within the browser so that it can be retrieved during subsequent visits to the same application origin.
7. Queue Management and FIFO Principle
CampusQueue implements the FIFO queue principle, which is widely used in scheduling and service management systems.
For example, if three students join the queue in the following order:
Student A
Student B
Student C
The system serves Student A first, followed by Student B and then Student C, provided the queue is not manually changed.
This approach promotes fairness and ensures that students are processed according to their arrival order.
8. Advantages of CampusQueue
The application offers several benefits:
Improves the organization of student services.
Reduces confusion when managing waiting students.
Provides a clear view of students waiting for assistance.
Maintains a history of completed services.
Makes student records easier to search and review.
Provides exportable records for reporting and analysis.
Demonstrates practical applications of HTML, CSS, JavaScript, arrays, DOM manipulation, and browser storage.
9. Limitations
Although CampusQueue provides useful queue management features, it has some limitations:
Data is stored locally in the browser rather than in a centralized database.
Records stored in one browser environment do not automatically synchronize with another device or browser.
The application does not currently provide multi-user synchronization or centralized authentication.
CSV export may require the user to copy the displayed data into a file or spreadsheet.
The accuracy of the records depends on users entering and managing student information correctly.
These limitations could be addressed in future versions through a backend server, database integration, user authentication, and secure data synchronization.
10. Future Improvements
Possible future enhancements include:
Integration with a database for centralized record management.
Student and administrator login systems.
Automatic synchronization across devices.
Student notifications when their turn approaches.
Search and filtering by service type.
Improved reporting and downloadable CSV files.
Queue performance analytics.
Role-based access control to protect student information.
11. Installation and Usage
To run CampusQueue locally:
Download or clone the project repository.
Ensure that index.html, style.css, and script.js are in the correct project structure.
Open index.html in a modern web browser or run the project using a local development server.
Register students using the registration form.
Manage the queue using the available controls.
View completed services in the Recently Served section.
Use the export options to access queue and history data.
The application can also be published using GitHub Pages, allowing users to access it online through a public website link.
12. Conclusion
CampusQueue demonstrates how fundamental web development technologies can be combined to solve a practical problem in an educational environment. By integrating student registration, FIFO queue management, dashboard statistics, service history, search functionality, and CSV export, the application provides a simple approach to organizing campus service delivery.
The project also demonstrates practical knowledge of JavaScript arrays, functions, event handling, DOM manipulation, and browser local storage. With future improvements such as database integration and multi-user support, CampusQueue could be developed into a more comprehensive student service management platform.
13. Author
Project: CampusQueue — Student Service Management System
Developer: Hafsatu Burhandeen
Project Type: Web Application
Technologies: HTML5, CSS3, JavaScript
Deployment Platform: GitHub Pages# CampusQueue
Student Service Management and Queue System
