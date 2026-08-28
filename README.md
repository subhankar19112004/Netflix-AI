# 🎬 Netflix-AI

> An AI-powered Netflix-inspired movie discovery application built with **React.js**, **Redux Toolkit**, **Tailwind CSS**, **Firebase Authentication**, **TMDB API**, and AI-powered movie recommendations.

Netflix-AI is a learning-focused project developed while following the **Namaste React** curriculum by **Akshay Saini**. The project recreates the core experience of a modern streaming platform while exploring real-world React architecture, state management, authentication, API integration, responsive UI development, and AI-powered search/recommendation workflows.

---

## Live Demo link
  - [Netflix-AI](https://netflixai-d27af.web.app/)

## ✨ Features

### 🔐 Authentication

- User Sign Up
- User Sign In
- User Sign Out
- Authentication state management
- Protected application routes
- User profile information
- Firebase Authentication integration

### 🏠 Netflix-Style Browse Experience

- Netflix-inspired landing page
- Hero/banner section
- Movie backdrop images
- Now Playing movies
- Popular movies
- Top Rated movies
- Upcoming movies
- Trending movies
- Horizontally scrollable movie lists
- Responsive layout

### 🤖 AI Movie Search

- AI-powered movie search
- Natural-language movie recommendations
- Search for multiple movies at once
- Recommendation-based discovery
- AI-generated movie suggestions

### 🎥 Movie Experience

- Movie cards
- Movie posters
- Backdrop images
- Movie descriptions
- Ratings and metadata
- Trailer integration
- Movie recommendation sections

### 🌐 Additional Features

- Responsive design
- Shimmer loading UI
- Reusable React components
- Redux-based state management
- API caching where applicable
- Form validation
- Multi-language-ready architecture
- Error handling
- Route-based navigation

---

# 🛠️ Tech Stack

| Technology                  | Purpose                          |
| --------------------------- | -------------------------------- |
| **React.js**                | Frontend UI                      |
| **JavaScript (ES6+)**       | Application logic                |
| **Redux Toolkit**           | Global state management          |
| **React Redux**             | Connecting Redux with React      |
| **React Router**            | Client-side routing              |
| **Tailwind CSS**            | Responsive UI styling            |
| **Firebase Authentication** | User authentication              |
| **TMDB API**                | Movie and TV metadata            |
| **AI API**                  | AI-powered movie recommendations |
| **Git & GitHub**            | Version control                  |
| **Parcel**                  | Development/build tooling        |

The project follows the same broad learning direction as the NetflixGPT portion of the Namaste React curriculum, which covers React architecture, authentication, Redux Toolkit, Tailwind CSS, API integration and AI-powered movie recommendations.

---

# 🏗️ Application Architecture

The application can be understood as several major layers:

```text
                         ┌─────────────────────┐
                         │      React UI       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  React Components   │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
           ┌─────────────────┐             ┌─────────────────┐
           │  Redux Toolkit  │             │ React Router    │
           │      Store      │             │                 │
           └────────┬────────┘             └─────────────────┘
                    │
                    ▼
           ┌─────────────────┐
           │   API Layer     │
           └────────┬────────┘
                    │
             ┌──────┴─────────┐
             ▼                ▼
      ┌─────────────┐   ┌─────────────┐
      │  TMDB API   │   │   AI API    │
      └─────────────┘   └─────────────┘

                    │
                    ▼
           ┌─────────────────┐
           │ Firebase Auth   │
           └─────────────────┘
```

---

# 📂 Project Structure(Maybe changed later)

A typical project structure looks like:

```text
Netflix-AI/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Browse.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Shimmer.jsx
│   │   └── ...
│   │
│   ├── hooks/
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   └── ...
│   │
│   ├── utils/
│   │   └── redux/
│   │       ├── appStore.js
│   │       ├── userSlice.js
│   │       └── movieSlice.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> Your actual folder structure may differ depending on the stage of development.

---

# 🚀 Getting Started

## 1. Prerequisites

Make sure the following are installed:

- **Node.js** 18+
- **npm**
- **Git**
- A modern browser
- A TMDB account
- A Firebase project
- An AI API account/provider if AI search is enabled

Check your Node.js installation:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

# 📥 Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd Netflix-AI
```

Install dependencies:

```bash
npm install
```

---

# 🔑 Environment Configuration

This project requires external API credentials.

Create a `.env` file in the root directory:

```text
Netflix-AI/
├── .env
├── package.json
├── src/
└── ...
```

Example:

```env
TMDB_ACCESS_TOKEN=your_tmdb_read_access_token

AI_API_KEY=your_ai_api_key

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

### ⚠️ Important

**Never commit `.env` to GitHub.**

Your `.gitignore` should contain:

```gitignore
.env
.env.*
!.env.example
```

TMDB supports application authentication through an API Read Access Token sent as a `Bearer` token in the `Authorization` header.

---

# 🔑 Setting Up `constants.js`

This project originally uses a `src/utils/constants.js` file for application-level constants.

The file is intentionally ignored by Git in this project:

```gitignore
src/utils/constants.js
```

This means every developer cloning the repository must create their own local copy.

Create:

```text
src/utils/constants.js
```

Then use the following structure:

```javascript
export const BACKGROUND_IMAGE_URL = "YOUR_NETFLIX_BACKGROUND_IMAGE_URL";

export const LOGO_URL = "YOUR_NETFLIX_LOGO_URL";

export const USER_URL = "YOUR_USER_PROFILE_IMAGE_URL";

export const GITHUB_PROFILE_PHOTO_URL = "YOUR_GITHUB_PROFILE_PHOTO_URL";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${YOUR_TMDB_ACCESS_TOKEN}`,
  },
};

export const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
```

### Example with environment variables

If your bundler exposes environment variables through `process.env`:

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};

export const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
```

If your build setup uses a different environment-variable convention, use the convention supported by your bundler.

---

# 🧩 Constants Explained

Your `constants.js` contains several application-level values.

### `BACKGROUND_IMAGE_URL`

Used for the Netflix-style background/hero section.

```javascript
export const BACKGROUND_IMAGE_URL = "YOUR_BACKGROUND_IMAGE_URL";
```

### `LOGO_URL`

Used to display the Netflix-style branding/logo.

```javascript
export const LOGO_URL = "YOUR_LOGO_URL";
```

### `USER_URL`

Used as the default/profile avatar.

```javascript
export const USER_URL = "YOUR_USER_PROFILE_IMAGE_URL";
```

### `GITHUB_PROFILE_PHOTO_URL`

Used for the developer profile/avatar.

```javascript
export const GITHUB_PROFILE_PHOTO_URL = "YOUR_GITHUB_PROFILE_PHOTO_URL";
```

### `API_OPTIONS`

Contains the configuration required for TMDB API requests.

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${YOUR_TMDB_ACCESS_TOKEN}`,
  },
};
```

TMDB's official documentation recommends the API Read Access Token as a Bearer token in the `Authorization` header.

### `API_URL`

Defines the initial TMDB endpoint used to retrieve movies currently playing.

```javascript
export const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
```

---

# 🎞️ TMDB API Setup

This application uses **The Movie Database (TMDB)** for movie metadata.

TMDB provides APIs for movies, TV shows, people, images and related metadata.

## Step 1 — Create a TMDB account

Create an account on TMDB and access the API settings from your account.

## Step 2 — Generate an API credential

Generate your **API Read Access Token**.

## Step 3 — Add it to your environment

```env
TMDB_ACCESS_TOKEN=your_token_here
```

## Step 4 — Use it in your API configuration

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};
```

Do **not** copy the token from another developer's `constants.js`.

Create and use **your own TMDB credentials**.

---

# 🔥 AI Search Setup

The AI component allows users to describe what they want to watch instead of searching only by exact movie title.

For example:

```text
"Suggest me some mind-bending science fiction movies"
```

The application can send this query to the configured AI service and use the response to discover relevant movies.

A typical flow is:

```text
User
 │
 ▼
AI Search Box
 │
 ▼
AI API
 │
 ▼
Movie Suggestions
 │
 ▼
TMDB Search
 │
 ▼
Movie Cards
```

Add your AI credential to `.env`:

```env
AI_API_KEY=your_ai_api_key
```

Keep this credential private and never commit it to GitHub.

---

# 🔥 Firebase Authentication Setup

Create a Firebase project and enable the authentication provider used by the application.

Typical flow:

```text
User
 │
 ├── Sign Up
 │      │
 │      ▼
 │   Firebase
 │
 └── Sign In
        │
        ▼
     Firebase
        │
        ▼
   Authentication State
        │
        ▼
     Redux Store
        │
        ▼
      Browse
```

Add your Firebase configuration to your environment variables or your local configuration file according to your project's setup.

---

# ▶️ Running the Application

Start the development server:

```bash
npm start
```

or, if your package configuration uses the development script:

```bash
npm run dev
```

Then open the URL shown in your terminal.

For example:

```text
http://localhost:1234
```

The exact port depends on your Parcel configuration.

---

# 📦 Production Build

Create a production build:

```bash
npm run build
```

Before deploying, verify:

- Environment variables are configured
- API credentials are valid
- Firebase configuration is correct
- No secrets are committed
- Production API requests work correctly
- Routes work correctly after deployment

---

# 🧠 React Concepts Practiced

This project is also a practical implementation of several React concepts:

- Functional components
- JSX
- Props
- State management
- `useState`
- `useEffect`
- `useRef`
- Custom hooks
- Conditional rendering
- Component composition
- Controlled forms
- React Router
- Lazy loading
- Memoization
- Reusable components
- API integration
- Error handling
- Shimmer UI
- Performance optimization

---

# 🧠 Redux Toolkit Architecture

Redux Toolkit is used to manage application-wide state.

A simplified architecture:

```text
                    Redux Store
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
    userSlice       movieSlice      configSlice
        │               │               │
        ▼               ▼               ▼
 Authentication      Movies          App Config
```

Redux is particularly useful when multiple components need access to the same application state.

---

# 🔄 Movie Data Flow

The movie data flow can be represented as:

```text
TMDB API
   │
   ▼
fetch()
   │
   ▼
Movie API Response
   │
   ▼
Redux Store
   │
   ▼
Browse Component
   │
   ├── Hero Section
   │
   ├── Now Playing
   │
   ├── Popular
   │
   ├── Top Rated
   │
   └── Upcoming
        │
        ▼
    Movie Cards
```

---

# 🎨 UI Design

The UI is inspired by modern streaming platforms and focuses on:

- Dark cinematic interface
- Large hero sections
- Poster-based movie rows
- Responsive layouts
- Smooth horizontal scrolling
- Strong visual hierarchy
- Minimal navigation
- Loading states
- Mobile-friendly components

---

# ⚡ Performance Considerations

The application is designed with several performance considerations:

- Reusable components
- Redux-based centralized state
- Avoiding unnecessary API calls
- Memoization where appropriate
- Lazy loading where appropriate
- Shimmer loading states
- Efficient rendering of movie lists
- Separation of API/configuration logic from UI components

---

# 🔐 Security Notes

### Never commit secrets

Do not commit:

```text
TMDB Access Tokens
AI API Keys
Firebase private credentials
.env files
```

Your local `constants.js` is currently ignored using:

```gitignore
src/utils/constants.js
```

Therefore, after cloning the project, every developer needs to create their own local `constants.js`.

### Verify ignored files

You can check whether Git ignores the file:

```bash
git check-ignore -v src/utils/constants.js
```

Expected output:

```text
.gitignore:25:src/utils/constants.js
```

---

# 🧪 Development Workflow

A recommended workflow:

```text
1. Clone repository
       ↓
2. npm install
       ↓
3. Configure .env
       ↓
4. Create src/utils/constants.js
       ↓
5. Add your own API credentials
       ↓
6. Start development server
       ↓
7. Test authentication
       ↓
8. Test TMDB API
       ↓
9. Test AI search
       ↓
10. Build for production
```

---

# 📝 Example `constants.js`

> **Do not copy credentials from someone else's project.**
> Replace every placeholder with your own values.

```javascript
export const BACKGROUND_IMAGE_URL = "YOUR_BACKGROUND_IMAGE_URL";

export const LOGO_URL = "YOUR_LOGO_URL";

export const USER_URL = "YOUR_USER_PROFILE_IMAGE_URL";

export const GITHUB_PROFILE_PHOTO_URL = "YOUR_GITHUB_PROFILE_PHOTO_URL";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${YOUR_TMDB_ACCESS_TOKEN}`,
  },
};

export const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
```

---

# 🐛 Troubleshooting

## TMDB returns `401 Unauthorized`

Check:

```text
✓ TMDB token exists
✓ Token is valid
✓ Authorization header is correct
✓ Bearer prefix is present
✓ Token has not expired/revoked
```

Correct format:

```javascript
Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`;
```

TMDB officially documents Bearer-token authentication for application-level API access.

---

## Movies are not loading

Check:

```text
1. Browser DevTools → Network
2. Check the TMDB request
3. Check HTTP status
4. Check Authorization header
5. Check API response
6. Verify the endpoint
```

---

## Images are broken

TMDB image URLs normally require combining the image base URL with the poster/backdrop path returned by the API.

For example:

```javascript
const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
```

Make sure `posterPath` is not `null`.

---

## Authentication is not working

Verify:

```text
✓ Firebase project exists
✓ Authentication provider is enabled
✓ Firebase configuration is correct
✓ Environment variables are loaded
✓ Browser console contains no Firebase errors
```

---

# 🚧 Current Status

This project is actively being developed while progressing through the **Namaste React** learning journey.

Some features may evolve as the project architecture improves.

Planned improvements may include:

- [ ] Advanced AI recommendation pipeline
- [ ] Improved movie detail pages
- [ ] Better trailer integration
- [ ] Enhanced search experience
- [ ] More robust caching
- [ ] Improved accessibility
- [ ] Better error boundaries
- [ ] Automated testing
- [ ] Performance profiling
- [ ] Production deployment improvements

---

# 🎓 Learning Reference

This project is inspired by the **Namaste React** curriculum by **Akshay Saini**.

The official curriculum includes a dedicated NetflixGPT section covering the beginning, core implementation and completion of the NetflixGPT project.

The goal of this repository is not simply to reproduce a UI, but to understand how a production-style React application can be structured around:

```text
React
+
State Management
+
Authentication
+
External APIs
+
AI
+
Responsive UI
+
Performance
```

---

# ⚖️ Disclaimer

This project is an educational **Netflix-inspired** application.

It is not affiliated with, sponsored by, or endorsed by Netflix.

Movie metadata and images are provided through **The Movie Database (TMDB)** API.

The Netflix branding/assets used during development are for educational purposes only. Replace them with your own assets if you intend to distribute or deploy the application commercially.

---

# 👨‍💻 Author

**Subhankar Jena**

Full Stack / MERN Stack Developer

- GitHub: `YOUR_GITHUB_PROFILE`
- LinkedIn: `YOUR_LINKEDIN_PROFILE`
- Portfolio: `YOUR_PORTFOLIO`

---

# ⭐ Support

If you find this project useful for learning React, Redux, API integration, or AI-powered applications, consider giving the repository a ⭐.

```text
Happy Coding 🚀

Built with ❤️ using React
```
