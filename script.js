:root {
    --bg-color: #f8fafc;
    --sidebar-bg: #ffffff;
    --card-bg: #ffffff;
    --text-color: #1e293b;
    --text-muted: #64748b;
    --primary: #6366f1;
    --primary-hover: #4f46e5;
    --border-color: #e2e8f0;
    --danger: #ef4444;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
}

.app-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

/* Sidebar */
.sidebar {
    width: 260px;
    background-color: var(--sidebar-bg);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
}

.logo {
    padding: 24px;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 16px;
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--text-muted);
    font-size: 0.95rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
}

.nav-btn:hover, .nav-btn.active {
    background-color: #e0e7ff;
    color: var(--primary);
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.top-header {
    padding: 24px 32px;
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tab-content {
    padding: 32px;
    flex: 1;
}

.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
}

/* Dashboard Cards */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 24px;
}

.stat-card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 16px;
}

.stat-card i {
    font-size: 2rem;
    color: var(--primary);
}

.welcome-banner {
    background: linear-gradient(135deg, #6366f1, #a855f7);
    color: white;
    padding: 32px;
    border-radius: 16px;
}

.welcome-banner h2 {
    margin-bottom: 8px;
}

/* Task lists & Inputs */
.task-input-group {
    display: flex;
    gap: 12px;
    margin: 20px 0;
}

.task-input-group input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
}

.task-input-group button, .btn-primary, .btn-secondary, .btn-danger {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    background-color: var(--primary);
    color: white;
    transition: background 0.2s;
}

.task-input-group button:hover {
    background-color: var(--primary-hover);
}

.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task-list li {
    background: var(--card-bg);
    padding: 14px 18px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-list li.completed span {
    text-decoration: line-through;
    color: var(--text-muted);
}

.task-actions {
    display: flex;
    gap: 10px;
}

.task-actions button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 1rem;
}

.task-actions button.complete-btn:hover { color: #10b981; }
.task-actions button.delete-btn:hover { color: var(--danger); }

/* Pomodoro */
.pomodoro-card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    text-align: center;
    max-width: 400px;
    margin: 40px auto;
}

.timer-display {
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 24px;
}

.timer-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn-secondary { background-color: var(--text-muted); }
.btn-danger { background-color: var(--danger); }
