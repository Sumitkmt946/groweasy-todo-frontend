
# Frontend README + Screenshots

`groweasy-todo-frontend/README.md` me:


## GrowEasy Todo App (React Native + Web)

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
```
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
<img width="348" height="692" alt="image" src="https://github.com/user-attachments/assets/74058709-24fd-4e00-9d3d-67ef00acbbe7" />
<img width="349" height="691" alt="image" src="https://github.com/user-attachments/assets/b1e6fe14-03d8-47d4-b3da-814ebac811ce" />


<img width="349" height="690" alt="image" src="https://github.com/user-attachments/assets/77b36db9-412d-4881-b8c7-777a21296315" />
<img width="349" height="691" alt="image" src="https://github.com/user-attachments/assets/10d07df9-0c29-42b2-84b7-b5a8e74c044b" />






