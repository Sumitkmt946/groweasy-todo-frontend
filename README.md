
# Frontend README + Screenshots

`groweasy-todo-frontend/README.md` me:

```md
# GrowEasy Todo App (React Native + Web)

Simple Todo app built with **React Native (Expo)** and **React Navigation**, using the FastAPI backend.

## Tech Stack

- React Native (Expo)
- React Native Web (for testing on browser)
- React Navigation (stack + bottom tabs)
- Axios
- AsyncStorage (to store JWT token)

## Features

- Signup / Login
- Persisted auth (token stored in AsyncStorage)
- Todo list:
  - Create todo
  - Mark as complete / undo
  - Pull-to-refresh
- Profile screen:
  - Show name & email
  - Logout

## Setup & Run (Web)

```bash
npm install
npm start
# press "w" to open in browser

By default app expects backend at:
```bash
http://127.0.0.1:8000
```

You can change this in src/api/client.js if needed.

## Screenshots

- Login screen
- Signup screen
- Todo list
- Profile screen

  
📸 
<img width="651" height="263" alt="image" src="https://github.com/user-attachments/assets/24b87119-43f3-4740-a86c-8564fb1e0cd3" />

