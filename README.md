# TaskBuddy-Task Management App

A simple task management application built with React, allowing users to create, view, update, and delete tasks.
Backend:-[Code](https://github.com/AvikshitChanda/Task-Buddy-Backend)
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [License](#license)
- [Contributing](#contributing)

## Overview

This application provides a straightforward interface for managing tasks. Users can add new tasks, mark them as complete or incomplete, and delete them as needed. Notifications are displayed for successful operations and errors.

## Features

- **Task List**: View all tasks with their details.
- **Add Task**: Create new tasks with a title and description.
- **Toggle Completion**: Mark tasks as complete or incomplete.
- **Delete Task**: Remove tasks from the list.
- **Notifications**: Receive feedback for successful operations and errors.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

3. Set up your backend API and ensure it is running.

## Usage

1. Start the React application:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the interface to manage your tasks.

## Technologies

- **Frontend**: React, React Router, React Toastify
- **Backend**: REST API (Assumed to be already set up)
- **Styling**: CSS

## File Structure

```plaintext
task-management-app/
│
├── public/                   # Public assets
├── src/                      # Source files
│   ├── assets/               # Static assets (images, etc.)
│   ├── components/           # React components
│   │   ├── TaskForm/         # TaskForm component and styles
│   │   ├── TaskItem/         # TaskItem component and styles
│   │   └── TaskList/         # TaskList component and styles
│   ├── services/             # API service files
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point for React
│   └── styles/               # Global styles
├── .gitignore                # Git ignore file
├── package.json              # Node.js dependencies and scripts
└── README.md                 # Readme file
