# 🎬 Revelix

Revelix is a dynamic and interactive movie browsing platform built with **Next.js**, **TypeScript**, and **CSS Modules**. It allows users to explore movies by categories, view upcoming releases, mark favorites, and dive into detailed movie information, all in a smooth and responsive UI.

## 🚀 Features

### 🔐 Authentication & Feedback
- **Login System**: Secure user authentication to personalize your experience.
- **Logout Option**: Accessible from the header for a quick and easy sign-out.
- **Feedback Alerts**: Clear alerts for login status, actions like adding to favorites, etc.

### 🏠 Home Page
- **Random Discover Section**: At the top of the home page, a header section displays randomly selected movies to encourage discovery.
- **Movies by Category**: Browse movies organized by category with an interactive filter.
- **Upcoming Movies**: Stay updated with a section dedicated to future releases.
- **Favorites**: Access your list of favorite movies quickly and easily.
- **Scrollable Sections**: Each movie list supports horizontal scrolling by click, moving in smooth segments.

### 🎥 Movie Cards
- **Hover Details**: Hovering over a movie poster reveals key information.
- **Card Types**: Two types of movie cards—horizontal and vertical—adapted to layout and content.
- **Navigation**: Clicking on any movie card takes you to a detailed view.

### 📄 Movie Details Page
- **Slug-Based Routing**: Each movie detail page is accessed via a URL based on the movie's name.
- **Detailed View**: See all important information about a movie, and add it to your favorites from this page.

### 💡 Skeleton Loaders
- **Loading Feedback**: Both the Home page and the Movie Details page use skeleton loaders to enhance the user experience while content is being fetched.
- **Improved UX**: Provides visual feedback and reduces perceived waiting time.

### 🌙 Theme Support & Header Controls
- **Light/Dark Mode Toggle**: Easily switch between light and dark themes using a toggle in the header.
- **Logout Button**: Sign out anytime directly from the header menu.

## 🛠️ Technologies Used

- **Next.js** – React framework for server-side rendering and static site generation.
- **TypeScript** – Static typing to enhance code quality and maintainability.
- **CSS Modules** – Scoped CSS for styling components in a modular way.

## 📂 Getting Started

```bash
git clone https://github.com/DHVDeveloper/revelix.git
cd revelix
npm install
npm run dev
```

Navigate to `http://localhost:3000` to explore the app.
