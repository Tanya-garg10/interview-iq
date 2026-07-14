# InterviewIQ.AI — AI-Powered Mock Interview Platform

InterviewIQ.AI is a modern, full-stack web application designed to help job seekers practice mock interviews using state-of-the-art AI. The platform supports customized interview setups, video-assisted interactive AI interviewers, automatic scoring and feedback generation, history tracking, and a premium credit system with payment gateway integration.

---

## 🚀 Core Features

- **Customized Mock Interviews**: Configure interviews by selecting roles, experience levels, and custom job descriptions.
- **Interactive AI Interviewer**: A realistic conversational flow with video-enabled virtual AI interviewers (male and female avatars).
- **AI Scoring & Detailed Feedback**: Automatic feedback on answer correctness, body language/confidence, and areas of improvement, powered by **OpenRouter**.
- **Interactive Reports**: Detailed scoring breakdowns, visual progress indicators, and PDF report downloads.
- **Secure Authentication**: Frontend authentication via **Firebase Auth** synced with **JWT-based** custom session management on the Node.js backend.
- **Credits & Monetization**: Credit-based system integrated with the **Razorpay** payment gateway for subscription/pricing plans.

---

## 📂 Project Structure

The project is structured as a monorepo consisting of two main sub-projects:

```
interview-iq/
├── client/                     # Frontend Application (React + Vite)
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── assets/             # Images, icons, and AI interviewer videos
│   │   ├── components/         # Reusable UI components (Navbar, Footer, Interview Steps, Timer)
│   │   ├── pages/              # Page layouts (Home, Auth, Interview, History, Report, Pricing)
│   │   ├── redux/              # Redux state management (auth, store)
│   │   └── utils/              # Firebase utility configuration
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API (Node.js + Express)
│   ├── config/                 # Database and Token configurations
│   ├── controllers/            # Request handlers (auth, interview, payment, user)
│   ├── middlewares/            # Authentication and file-upload (multer) middlewares
│   ├── models/                 # Mongoose schemas (User, Interview, Payment)
│   ├── routes/                 # API routes mapping
│   ├── services/               # Integrations (OpenRouter, Razorpay)
│   ├── index.js                # Server entry point
│   └── package.json
│
└── README.md                   # Project documentation
```

---

## ⚙️ Environment Variables Configuration

Both the frontend and backend require configuration files to connect to third-party services.

### Frontend Setup (`client/.env`)
Create a `.env` file inside the `client` directory:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Backend Setup (`server/.env`)
Create a `.env` file inside the `server` directory:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## 🛠️ Installation & Setup

### Frontend Installation
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   *The frontend will run at `http://localhost:5173`.*

### Backend Installation
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the API server:
   ```bash
   npm start
   ```
   *The backend will run at `http://localhost:8000`.*

---

## 🤝 Contribution Guidelines

We welcome contributions to InterviewIQ.AI! To contribute, please follow these steps:

### 1. Fork & Clone
Fork this repository and clone your fork locally:
```bash
git clone https://github.com/your-username/interview-iq.git
cd interview-iq
```

### 2. Create a Branch
Create a branch with a descriptive name for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/your-bugfix-name
```

### 3. Keep Changes Clean & Documented
- Make sure to write clean, commented code.
- Ensure your changes do not break existing code by running the dev server locally.
- Do not commit `.env` files. (A global `.gitignore` is provided to safeguard keys).

### 4. Committing Changes
Follow conventional commit formats:
```bash
git commit -m "feat: add user profile picture upload support"
git commit -m "fix: resolve razorpay signature mismatch on payment success"
```

### 5. Push & Open a PR
Push your changes to your branch and open a Pull Request against the `main` branch of the original repository:
```bash
git push origin feature/your-feature-name
```

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
