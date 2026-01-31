# 🎬 Cine Snap Admin Portal

Cine Snap Admin Portal is a **web-based admin management system** built for Cine Snap to help **admin users manage movie data, timestamps, notifications, and user subscriptions** efficiently.  
This portal allows admins to maintain accurate movie updates and ensure users receive **real-time alerts** smoothly.

---

## 📌 Project Overview

In Cine Snap, users subscribe to movies and receive real-time notifications.  
To manage everything from the backend, the Cine Snap Admin Portal provides a centralized dashboard where admin users can:

✅ Add and manage movies  
✅ Update movie timestamps (important for accurate alerts)  
✅ Trigger / schedule notifications  
✅ Monitor system updates using logging  
✅ Manage users and subscriptions (admin-level operations)

This portal is designed with scalability in mind, following clean admin workflows and structured backend operations.

---

## 🚀 Key Features

✅ Admin Login & Authentication  
✅ Movie Management (Add / Edit / Update / Delete)  
✅ Movie Timestamp Management (Real-time updates)  
✅ Notification Management using Firebase Cloud Messaging (FCM)  
✅ Backend automation using Firebase Cloud Functions  
✅ Logging support for debugging and monitoring  
✅ Admin-friendly UI for smooth operations  

---

## 🧰 Tech Stack

- Angular
- TypeScript
- Firebase Firestore
- Firebase Cloud Functions
- Firebase Cloud Messaging (FCM)
- Firebase Logging / Monitoring
- Webpack (if configured)
- AI Tools: GitHub Copilot, ChatGPT

---

## ⚙️ Setup & Run the Project

✅ Step 1: Clone the Repository

git clone https://github.com/srivatsav-kada/CineSnapAdmin.git
cd CineSnapAdmin

✅ Step 2: Install Dependencies

npm install

✅ Step 3: Run Angular Admin Portal (Web)

ng serve

✅ Open in Browser

http://localhost:4200/

---

## 🔥 Firebase Setup (Required)

✅ Step 1: Create a Firebase project (or use existing Cine Snap Firebase project)  
✅ Step 2: Enable Firestore Database  
✅ Step 3: Enable Cloud Functions  
✅ Step 4: Enable Cloud Messaging (FCM)  
✅ Step 5: Add Firebase config inside:

src/environments/environment.ts

Example:

export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};

---

## 👨‍💼 Admin Portal Responsibilities

✅ Manage movie list  
✅ Update movie timestamps for notification accuracy  
✅ Publish important updates  
✅ Support real-time backend automation  
✅ Ensure smooth notification delivery to subscribed users  

---

## 📸 Screenshots (Optional)

📌 Add portal screenshots inside:

/screenshots

Suggested screenshots:
✅ Admin Login Page  
✅ Admin Dashboard  
✅ Movie List Page  
✅ Timestamp Update Page  
✅ Notification Panel  
✅ Logs / Monitoring Page  

---

## 🛣️ Future Enhancements

✅ Role-based access (Super Admin / Admin)  
✅ Audit trail for all admin actions  
✅ Better UI with advanced filtering & search  
✅ Admin analytics dashboard (subscriptions / notifications stats)  
✅ CI/CD deployment pipeline  

---

## 👨‍💻 Author

Sri Vatsav  
Frontend Developer | Angular | Firebase | Cordova  

📌 GitHub: https://github.com/srivatsav-kada

⭐ If you like this project, consider giving it a star!
