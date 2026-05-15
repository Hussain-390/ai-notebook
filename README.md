

# 📝 AI-Powered Notebook App

## Author
**MOHAMMAD HUSSAIN SHAIK**  
📧 sk.mhussain2006@gmail.com  

---

## 🌐 Live Demo  
🔗 **Frontend:** [https://notebook-frontend-v2.onrender.com](https://notebook-frontend-v2.onrender.com)  

---

A full-stack **MERN notebook application** integrated with **AI note generation** and **canvas drawing** capabilities.  
This app allows users to **create**, **edit**, and **organize** text notes and sketches, while leveraging AI to automatically generate content or drawings.  
It also includes **JWT-based authentication**, **email OTP verification**, and **dark mode** personalization.

---

## ⚙️ API Endpoints Overview

### 🔐 Authentication
- `POST /api/auth` — Login or register user  
- `POST /api/forgot-password/send-otp` — Send OTP email  
- `POST /api/forgot-password/verify-otp` — Verify OTP code  
- `POST /api/forgot-password/reset` — Reset password  
- `POST /api/update-user` — Update user preferences (e.g. dark mode)

---

### 🗂️ Sections
- `POST /api/section/create` — Create a new section  
- `GET /api/section/` — Fetch all user sections  
- `PATCH /api/section/rename/:sectionId` — Rename section  
- `DELETE /api/section/:sectionId` — Delete section  

---

### 📄 Pages
- `POST /api/page/create` — Create a new page  
- `GET /api/page/:pageId` — Get page by ID  
- `PUT /api/page/:pageId` — Update entire page data  
- `PATCH /api/page/content/:pageId` — Update page content only  
- `PATCH /api/page/title/:pageId` — Update page title  
- `DELETE /api/page/:sectionId/:pageId` — Delete a page  

---

### 🎨 Canvas
- `POST /api/canvas/create` — Create new canvas  
- `GET /api/canvas/:canvasId` — Fetch a canvas  
- `PATCH /api/canvas/title/:canvasId` — Update canvas title  
- `PATCH /api/canvas/content/:canvasId` — Update drawing content  
- `DELETE /api/canvas/:sectionId/:canvasId` — Delete canvas  

---

### 🤖 AI Integration
- `POST /api/ai/generate-ai-note` — Generate AI-based notes  
- `POST /api/ai/generate-canvas-drawing` — Generate AI-powered drawings  

> **Model Used:**  
> `deepseek/deepseek-r1-0528-qwen3-8b:free`

---

## 📦 Dependencies

### **Backend Packages**
`express` | `mongoose` | `jsonwebtoken` | `bcryptjs` | `nodemailer` | `dotenv` | `cors` | `ejs` | `openai` | `uuid` | `node-fetch`

### **Frontend Packages**
`react` | `react-dom` | `react-router-dom` | `react-hook-form` | `axios` | `zustand` | `tailwindcss` | `shadcn` | `react-quill-new` | `react-sketch-canvas` | `sonner` | `lucide-react` | `motion` | `lottie-react` | `crypto-js` | `zod` | `next-themes` | `@tanstack/react-query` | `lodash.debounce` | `tailwind-merge` | `clsx`

---

## ⚙️ Environment Variables

### Backend `.env`
```env
PORT=3000
FRONTEND_URL=https://notebook-frontend-v2.onrender.com
FRONTEND_DEV_URL=http://localhost:5173

OPENAI_API_KEY=your_api_key
AI_MODEL=deepseek/deepseek-r1-0528-qwen3-8b:free
AI_URL=https://openrouter.ai/api/v1

MONGODB_URI=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key

EMAIL=your_email
PASSWORD=your_email_password
```

### Frontend `.env`
```env
VITE_BACKEND_URL=https://notebook-oe5t.onrender.com
VITE_BACKEND_DEV_URL=http://localhost:3000
```

---

## 📥 Clone & Run

```bash
git clone https://github.com/Hussain-390/ai-notebook.git
```

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🏷️ Tech Badges

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js">
  <img src="https://img.shields.io/badge/Express.js-Backend-black?logo=express">
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb">
  <img src="https://img.shields.io/badge/React-Frontend-blue?logo=react">
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwindcss">
  <img src="https://img.shields.io/badge/OpenRouter-AI-purple">
  <img src="https://img.shields.io/badge/JWT-Auth-yellow?logo=jsonwebtokens">
</p>

---

## 💬 Connect With Me

<p align="center">
  <a href="mailto:sk.mhussain2006@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact%20Me-red?logo=gmail">
  </a>
  <a href="https://github.com/Hussain-390">
    <img src="https://img.shields.io/badge/GitHub-Hussain--390-black?logo=github">
  </a>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with❤️by-Mohammad%20Hussain-orange?style=for-the-badge">
</p>
