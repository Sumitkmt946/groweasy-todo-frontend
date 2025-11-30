# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


---

## Frontend README + Screenshots

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

  
📸 **Screenshots lo**:

- Login screen
- Signup screen
- Todos screen (1–2 todos)
- Profile screen

Inko project ke andar `screenshots/` folder me save kar sakte ho, ya README ke sath attach kar sakte ho GitHub pe.

---

## 4️⃣ GitHub pe upload (2 alag repos)

### A. Backend repo

Terminal:

```bash
cd C:\Users\ashok\Desktop\Project\groweasy-todo-backend

git init
git add .
git commit -m "GrowEasy backend - FastAPI todo app"

# GitHub pe naya repo banao, naam jaise:
# groweasy-todo-backend

git remote add origin <repo-url>
git branch -M main
git push -u origin main



