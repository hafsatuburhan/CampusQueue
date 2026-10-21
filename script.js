// ==================================================
// CAMPUSQUEUE - STUDENT SERVICE MANAGEMENT SYSTEM
// ==================================================

// Storage keys
const STORAGE_KEY = "campusQueue.students.v1";
const HISTORY_KEY = "campusQueue.history.v1";
const SERVED_KEY = "campusQueue.served.v1";

// ==================================================
// LOAD SAVED DATA
// ==================================================

function loadData(key) {
    try {
        const data = JSON.parse(
            localStorage.getItem(key) || "[]"
        );

        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
}

let students = loadData(STORAGE_KEY);
let servedHistory = loadData(HISTORY_KEY);

let servedCount = Number(
    localStorage.getItem(SERVED_KEY) || 0
);

// ==================================================
// HELPER FUNCTIONS
// ==================================================

function el(id) {
    return document.getElementById(id);
}

function notify(message) {
    const toast = el("toast");

    if (toast) {
        toast.textContent = message;
        toast.style.display = "block";
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
            toast.style.display = "";
        }, 3000);
    } else {
        alert(message);
    }
}

// ==================================================
// SAVE DATA
// ==================================================

function saveData() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(students)
        );

        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(servedHistory)
        );

        localStorage.setItem(
            SERVED_KEY,
            String(servedCount)
        );

        return true;
    } catch (error) {
        console.error("Could not save data:", error);
        notify("Warning: Your data could not be saved.");
        return false;
    }
}

// ==================================================
// REGISTER A STUDENT
// ==================================================

function addStudent(event) {
    event.preventDefault();

    const nameInput = el("studentName");
    const idInput = el("studentId");
    const serviceInput = el("serviceType");

    const name = nameInput.value.trim();
    const id = idInput.value.trim();
    const service = serviceInput.value;

    if (!name || !id || !service) {
        notify("Please complete all required fields.");
        return;
    }

    // Prevent duplicate IDs in the waiting queue
    const duplicate = students.some(function (student) {
        return student.id.toLowerCase() === id.toLowerCase();
    });

    if (duplicate) {
        notify("This student is already in the waiting queue.");
        return;
    }

    // Create the student record
    const newStudent = {
        name: name,
        id: id,
        service: service,
        registeredAt: new Date().toISOString()
    };

    // Add the student to the rear of the queue
    students.push(newStudent);

    saveData();
    render();

    // Clear the form after registration
    el("studentForm").reset();

    notify(name + " has been added to the queue.");
}

// ==================================================
// SERVE THE NEXT STUDENT (FIFO)
// ==================================================

function serveNextStudent() {
    if (students.length === 0) {
        notify("There are no students waiting.");
        return;
    }

    serveStudentAt(0);
}

function serveStudentAt(index) {
    if (index < 0 || index >= students.length) {
        return;
    }

    // Remove the student at the selected position
    const student = students.splice(index, 1)[0];

    // Record the completed service
    servedHistory.unshift({
        name: student.name,
        id: student.id,
        service: student.service,
        servedAt: new Date().toISOString()
    });

    servedCount++;

    saveData();
    render();

    notify("Now serving " + student.name + ".");
}

// ==================================================
// REMOVE A STUDENT
// ==================================================

function removeStudent(index) {
    if (index < 0 || index >= students.length) {
        return;
    }

    const student = students[index];

    if (confirm("Remove " + student.name + " from the queue?")) {
        students.splice(index, 1);

        saveData();
        render();

        notify("Student removed from the queue.");
    }
}

// ==================================================
// CREATE TABLE CELLS SAFELY
// ==================================================

function makeCell(value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
}

// ==================================================
// DISPLAY THE WAITING QUEUE
// ==================================================

function renderQueue() {
    const body = el("queueBody");
    const emptyState = el("emptyState");
    const searchInput = el("searchInput");

    if (!body) {
        return;
    }

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    body.replaceChildren();

    const filteredStudents = students
        .map(function (student, index) {
            return {
                student: student,
                index: index
            };
        })
        .filter(function (item) {
            return (
                item.student.name.toLowerCase().includes(query) ||
                item.student.id.toLowerCase().includes(query)
            );
        });

    filteredStudents.forEach(function (item) {
        const student = item.student;
        const index = item.index;

        const row = document.createElement("tr");

        // Position
        row.appendChild(makeCell(index + 1));

        // Student name
        const nameCell = makeCell(student.name);

        const idSmall = document.createElement("small");
        idSmall.textContent = student.id;
        idSmall.style.display = "block";

        nameCell.appendChild(idSmall);
        row.appendChild(nameCell);

        // Service
        row.appendChild(makeCell(student.service));

        // Status
        const statusCell = makeCell("Waiting");
        statusCell.className = "status-waiting";
        row.appendChild(statusCell);

        // Action buttons
        const actionCell = document.createElement("td");

        const serveButton = document.createElement("button");
        serveButton.type = "button";
        serveButton.textContent = "Serve";
        serveButton.className = "btn btn-primary";

        serveButton.addEventListener("click", function () {
            serveStudentAt(index);
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.className = "btn btn-danger";

        removeButton.addEventListener("click", function () {
            removeStudent(index);
        });

        actionCell.appendChild(serveButton);
        actionCell.appendChild(removeButton);

        row.appendChild(actionCell);
        body.appendChild(row);
    });

    // Display or hide the empty-state message
    if (emptyState) {
        emptyState.style.display =
            filteredStudents.length === 0 ? "block" : "none";
    }

    // Update queue summary
    const summary = el("queueSummary");

    if (summary) {
        summary.textContent =
            students.length +
            (students.length === 1
                ? " student in queue"
                : " students in queue");
    }
}

// ==================================================
// DISPLAY RECENTLY SERVED HISTORY
// ==================================================

function renderHistory() {
    const body = el("historyBody");
    const emptyState = el("historyEmpty");

    if (!body) {
        return;
    }

    body.replaceChildren();

    servedHistory.forEach(function (student) {
        const row = document.createElement("tr");

        row.appendChild(makeCell(student.name));
        row.appendChild(makeCell(student.id));
        row.appendChild(makeCell(student.service));

        let servedDate = "Unavailable";

        if (student.servedAt) {
            const date = new Date(student.servedAt);

            if (!isNaN(date.getTime())) {
                servedDate = date.toLocaleString();
            }
        }

        row.appendChild(makeCell(servedDate));
        body.appendChild(row);
    });

    if (emptyState) {
        emptyState.style.display =
            servedHistory.length === 0 ? "block" : "none";
    }
}

// ==================================================
// UPDATE DASHBOARD
// ==================================================

function renderDashboard() {
    const waitingCount = el("waitingCount");
    const heroWaiting = el("heroWaiting");
    const servedCountElement = el("servedCount");
    const nextStudent = el("nextStudent");
    const todayDate = el("todayDate");

    if (waitingCount) {
        waitingCount.textContent = students.length;
    }

    if (heroWaiting) {
        heroWaiting.textContent = students.length;
    }

    if (servedCountElement) {
        servedCountElement.textContent = servedCount;
    }

    if (nextStudent) {
        nextStudent.textContent =
            students.length > 0 ? students[0].name : "—";
    }

    if (todayDate) {
        todayDate.textContent = new Date().toLocaleDateString(
            undefined,
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
    }
}

// ==================================================
// RENDER THE APPLICATION
// ==================================================

function render() {
    renderQueue();
    renderHistory();
    renderDashboard();
    saveData();
}

// ==================================================
// CREATE A COPYABLE CSV WINDOW
// ==================================================

function showCSV(filename, headers, rows) {
    if (rows.length === 0) {
        notify("There are no records to export.");
        return;
    }

    function escapeCSV(value) {
        return '"' +
            String(value == null ? "" : value)
                .replace(/"/g, '""') +
            '"';
    }

    const csv = [headers, ...rows]
        .map(function (row) {
            return row.map(escapeCSV).join(",");
        })
        .join("\r\n");

    // Create the overlay
    const overlay = document.createElement("div");

    overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "z-index:999999",
        "background:rgba(0,0,0,0.85)",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "padding:15px",
        "box-sizing:border-box"
    ].join(";");

    const panel = document.createElement("div");

    panel.style.cssText = [
        "background:white",
        "color:#222",
        "padding:18px",
        "border-radius:12px",
        "width:100%",
        "max-width:600px",
        "box-sizing:border-box"
    ].join(";");

    const title = document.createElement("h3");
    title.textContent = "Export: " + filename;

    const instructions = document.createElement("p");
    instructions.textContent =
        "Tap Copy CSV, then paste the data into a text editor or spreadsheet.";

    const textarea = document.createElement("textarea");

    textarea.value = csv;
    textarea.readOnly = true;

    textarea.style.cssText = [
        "width:100%",
        "height:220px",
        "box-sizing:border-box",
        "padding:10px",
        "font-size:13px",
        "color:#111",
        "background:#f5f5f5",
        "border:1px solid #ccc",
        "border-radius:6px"
    ].join(";");

    const copyButton = document.createElement("button");

    copyButton.type = "button";
    copyButton.textContent = "Copy CSV";

    copyButton.style.cssText =
        "padding:12px;margin:8px 8px 0 0;";

    const closeButton = document.createElement("button");

    closeButton.type = "button";
    closeButton.textContent = "Close";

    closeButton.style.cssText =
        "padding:12px;margin-top:8px;";

    copyButton.addEventListener("click", async function () {
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(csv);

                copyButton.textContent = "Copied!";
                notify("CSV copied to clipboard.");
            } else {
                const successful = document.execCommand("copy");

                if (successful) {
                    copyButton.textContent = "Copied!";
                    notify("CSV copied to clipboard.");
                } else {
                    notify("Text selected. Copy it using your phone's Copy option.");
                }
            }
        } catch (error) {
            textarea.focus();
            textarea.select();

            notify("Text selected. Use your phone's Copy option.");
        }
    });

    closeButton.addEventListener("click", function () {
        overlay.remove();
    });

    panel.appendChild(title);
    panel.appendChild(instructions);
    panel.appendChild(textarea);
    panel.appendChild(copyButton);
    panel.appendChild(closeButton);

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    textarea.focus();
    textarea.select();
}

// ==================================================
// EXPORT WAITING QUEUE
// ==================================================

function exportQueue() {
    showCSV(
        "CampusQueue_Waiting_Queue.csv",
        ["Position", "Student Name", "Student ID", "Service"],
        students.map(function (student, index) {
            return [
                index + 1,
                student.name,
                student.id,
                student.service
            ];
        })
    );
}

// ==================================================
// EXPORT RECENTLY SERVED HISTORY
// ==================================================

function exportHistory() {
    showCSV(
        "CampusQueue_Service_History.csv",
        ["Student Name", "Student ID", "Service", "Time Served"],
        servedHistory.map(function (student) {
            return [
                student.name,
                student.id,
                student.service,
                student.servedAt || ""
            ];
        })
    );
}

// ==================================================
// CLEAR WAITING QUEUE
// ==================================================

function clearQueue() {
    if (students.length === 0) {
        notify("The waiting queue is already empty.");
        return;
    }

    const backdrop = el("modalBackdrop");

    if (backdrop) {
        backdrop.style.display = "flex";
        backdrop.classList.add("show");
    } else {
        if (confirm("Clear all students from the waiting queue?")) {
            students = [];

            saveData();
            render();

            notify("Waiting queue cleared.");
        }
    }
}

function closeClearModal() {
    const backdrop = el("modalBackdrop");

    if (backdrop) {
        backdrop.style.display = "none";
        backdrop.classList.remove("show");
    }
}

function confirmClearQueue() {
    students = [];

    saveData();
    render();

    closeClearModal();

    notify("Waiting queue cleared.");
}

// ==================================================
// CONNECT EVENT LISTENERS
// ==================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = el("studentForm");

    if (form) {
        form.addEventListener("submit", addStudent);
    }

    const serveButton = el("serveBtn");

    if (serveButton) {
        serveButton.addEventListener("click", serveNextStudent);
    }

    const exportButton = el("exportBtn");

    if (exportButton) {
        exportButton.addEventListener("click", exportQueue);
    }

    const exportHistoryButton = el("exportHistoryBtn");

    if (exportHistoryButton) {
        exportHistoryButton.addEventListener("click", exportHistory);
    }

    const clearButton = el("clearBtn");

    if (clearButton) {
        clearButton.addEventListener("click", clearQueue);
    }

    const cancelClearButton = el("cancelClear");

    if (cancelClearButton) {
        cancelClearButton.addEventListener("click", closeClearModal);
    }

    const confirmClearButton = el("confirmClear");

    if (confirmClearButton) {
        confirmClearButton.addEventListener(
            "click",
            confirmClearQueue
        );
    }

    const searchInput = el("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", renderQueue);
    }

    // Initial display
    render();

    console.log("CampusQueue loaded successfully.");
});