# 🖥️ userCreate

> A lightweight, full-stack Node.js & Express social blogging platform with secure authentication and Cloudinary image uploads.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/Express-v5.1.0-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg)](https://www.mongodb.com/)

---

## 📖 Short Description

**userCreate** is a Node.js + Express-based full-stack web application designed for users to register, log in, create personalized profiles, publish posts, and interact via post likes. 

This project was built as a personal practice application to gain hands-on experience with backend fundamentals, secure user authentication, database normalization/relationships, and third-party media storage integration. The frontend uses a simple styled interface using EJS and Tailwind CSS.

> [!NOTE]
> The frontend UI is designed with simplicity in mind. Interactive elements like "Share" and "Comment" are currently non-functional placeholders.

🔗 **Live Demo:** [userCreate on Render](https://usercreate-wose.onrender.com)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage & Sample Routes](#-usage--sample-routes)
- [Sample Screenshots](#-sample-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

- **User Authentication**: Secure sign-up, login, and logout flow using bcrypt password hashing.
- **Session Management**: Session security using JSON Web Tokens (JWT) stored in HTTP-only cookies and Express Sessions.
- **Social Feed**: A centralized home feed displaying all user posts with authorship info.
- **Post Interactions**: Create new posts and toggle likes on posts.
- **Media Uploads**: Dynamic profile picture uploads handled by Multer and stored directly in Cloudinary.
- **Relational Profiles**: Personal dashboard displaying self posts and likes, with support for viewing other users' public profiles.
- **Server-Side Rendering (SSR)**: Dynamic page delivery using EJS templating.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js (v5.1.0)
- **Database**: MongoDB via Mongoose ODM
- **Media Storage**: Cloudinary (integrated via Multer & Multer-Storage-Cloudinary)
- **Frontend**: EJS Templating, Tailwind CSS
- **Security & Session**: Bcrypt (password hashing), Cookie-Parser, JSON Web Tokens (JWT), Express-Session, Connect-Mongo

---

## 🗂️ Project Structure

```text
userCreate/
├── config/
│   ├── cloudinary.js       # Cloudinary SDK credentials setup
│   ├── multer-config.js    # Cloudinary storage engine config for Multer
│   └── routeUpload.js      # Dedicated upload route handler
├── models/
│   ├── user.js             # Mongoose user schema & database connection
│   └── post.js             # Mongoose post schema with author & likes relationships
├── public/
│   └── images/             # Static local asset folder
├── views/
│   ├── edit.ejs            # Edit profile template
│   ├── home.ejs            # Social home feed template
│   ├── index.ejs           # Landing / registration template
│   ├── login.ejs           # User login template
│   ├── post.ejs            # Post creation template
│   ├── profile.ejs         # User profile template
│   ├── profileOthers.ejs   # Public profile view template
│   └── show.ejs            # User list directory template
├── .env                    # Environment variables (git-ignored)
├── app.js                  # Express application entry point
├── package.json            # Scripts, dependency metadata
└── README.md               # Project documentation
```

---

## ⚡ Prerequisites

Before running the application, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (installed with Node)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster database (or local MongoDB instance)
- A [Cloudinary Account](https://cloudinary.com/) (for profile image uploads)

---

## 🚀 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/UtkarshSoni1/userCreate.git
   cd userCreate
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the keys described in the [Configuration](#-configuration) section.

4. **Start the Application**
   ```bash
   npm start
   ```
   The server will start running on the port specified in your `.env` (default is `3000`).

---

## ⚙️ Configuration

Create a `.env` file in the root of the project with the following keys:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 📡 Usage & Sample Routes

Below are the primary routing endpoints available in the application:

### Authentication & Account Control
- `GET /` — Registration / landing page
- `POST /create` — Registers a new user
- `GET /login` — Login page
- `POST /login` — Authenticates credentials and logs in the user
- `GET /logout` — Ends user session, clears JWT cookie, and redirects to login
- `GET /delete-all` — Developer helper route to delete all users

### Social & Posts
- `GET /home/:id` — Main feed displaying all users and posts (Requires login)
- `GET /post/:id` — Page to write a new post (Requires login)
- `POST /post/:id` — Submits and publishes a new post (Requires login)
- `GET /like/:id` — Likes or unlikes a specific post (Requires login)

### Profile Control
- `GET /profile/:id` — Personal dashboard displaying posts and likes (Requires login)
- `GET /profile-others/:id` — View another user's public profile (Requires login)
- `GET /edit/:id` — Form to edit user profile details (Requires login)
- `POST /edit/:id` — Updates name, email, and uploads a new profile image (Requires login)
- `GET /delete/:id` — Deletes the user profile (Requires login)

---

## 🖼️ Sample Screenshots

| Route / View | Description | Preview |
|---|---|---|
| **Landing & Registration** (`/`) | Account registration form to sign up new users. | ![Create User](https://github.com/user-attachments/assets/350c9709-a9b5-4688-96b0-07383b624831) |
| **Login** (`/login`) | Form for existing users to sign in. | ![Login User](https://github.com/user-attachments/assets/9abcd19d-1479-486c-b498-aef013f97d0d) |
| **Home Feed** (`/home/:id`) | Displays the posts feed of all users on the platform. | ![Home Feed 1](https://github.com/user-attachments/assets/d8fe8f90-d03d-4ade-9249-7b77993e7289) <br/><br/> ![Home Feed 2](https://github.com/user-attachments/assets/eba08ecd-08c0-4834-82df-30082efaf035) |
| **User Profile** (`/profile/:id`) | Personal user profile view showing posts and options to edit profiles. | ![Profile Page](https://github.com/user-attachments/assets/6a0c1988-2215-4cbf-b2b2-fad324d1c996) |
| **Create Post** (`/post/:id`) | Input form to publish new text posts. | ![Post Page](https://github.com/user-attachments/assets/4c5a9efb-be83-4d67-b686-e27c6afe7e80) |
| **Edit Profile** (`/edit/:id`) | Form to update user profile information and upload custom avatars. | ![Edit Page](https://github.com/user-attachments/assets/fee24e80-8b68-44be-bf0c-6141bcdd8f65) |
| **Other User Profile** (`/profile-others/:id`) | Public view of another registered user's profile. | ![Others Profile](https://github.com/user-attachments/assets/fcd3f0e7-771f-4ec2-8a75-8ee2dce356a9) |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to implement new features, functional updates, or fix bugs, please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 👨‍💻 Author

**Utkarsh Soni**
- GitHub: [@UtkarshSoni1](https://github.com/UtkarshSoni1)
