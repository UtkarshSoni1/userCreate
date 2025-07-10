## 🖥️ userCreate


**userCreate** is a Node.js + Express-based full-stack web application that allows users to create accounts, log in, and share posts. It's built using MongoDB, EJS templating, and Tailwind CSS for styling.

This is a personal practice project I made to get hands-on experience with full-stack web development. The frontend is kept simple as the main goal was to learn backend, authentication, and database integration. The UI is not very responsive and the "Share" and "Comment" buttons are non-functional for now — I might add them later if time allows. Please don’t judge the design too harshly!

## Live Demo Link
https://usercreate-wose.onrender.com
---

## ✨ Features

- User authentication (sign-up/login/logout)
- Home feed showing all user posts
- Password hashing with Bcrypt
- Session management with JWT and Express Sessions
- Profile image uploading via Multer
- Post creation with text content
- Like functionality on posts
- Dynamic profile pages (self and public view)
- Server-side rendering with EJS
- Tailwind CSS-based UI

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Frontend:** EJS templating + Tailwind CSS
- **Authentication:** Sessions + JWT
- **Password Security:** Bcrypt
- **File Uploads:** Multer

---

## 🧪 Sample Routes

- `/` — Landing page
- `/signup` — Register a new user
- `/login` — Login for existing users
- `/home/:id` — User feed page
- `/profile/:id` — Logged-in user's profile
- `/profile-others/:id` — View another user's profile
- `/post/:id` — Create a new post
- `/like/:postId` — Like or unlike a post

---

## 📦 Dependencies

- `express`
- `mongoose`
- `ejs`
- `express-session`
- `connect-mongo`
- `bcrypt`
- `multer`

---

## 🖼️ Sample Screenshots

### 🧍 Create User ( `/` )
![Create User](https://github.com/user-attachments/assets/350c9709-a9b5-4688-96b0-07383b624831)

### 🔐 Login User ( `/login` )
![Login User](https://github.com/user-attachments/assets/9abcd19d-1479-486c-b498-aef013f97d0d)

### 🏠 Home Feed ( `/home/:id` )
![Home Feed 1](https://github.com/user-attachments/assets/d8fe8f90-d03d-4ade-9249-7b77993e7289)
![Home Feed 2](https://github.com/user-attachments/assets/eba08ecd-08c0-4834-82df-30082efaf035)

### 👤 User Profile ( `/profile/:id` )
![Profile Page](https://github.com/user-attachments/assets/6a0c1988-2215-4cbf-b2b2-fad324d1c996)

### ✍️ Create Post ( `/post/:id` )
![Post Page](https://github.com/user-attachments/assets/4c5a9efb-be83-4d67-b686-e27c6afe7e80)

### 📝 Edit Profile ( `/edit/:id` )
![Edit Page](https://github.com/user-attachments/assets/fee24e80-8b68-44be-bf0c-6141bcdd8f65)

### 🌐 Other User Profile ( `/profile-others/:id` )
![Others Profile](https://github.com/user-attachments/assets/fcd3f0e7-771f-4ec2-8a75-8ee2dce356a9)

---

## 🤝 Contributing

Pull requests are welcome! If you plan to make major changes, please open an issue first to discuss it.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Utkarsh Soni**  
[GitHub Profile](https://github.com/UtkarshSoni1)

---

## 📌 Notes

Let me know if you'd like:
- A deployed demo link
- Live preview
- GIF walkthroughs
- Badges (build, version, dark-mode, etc.)
