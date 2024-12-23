# Movie App 🎥

## Description

Movie App is a React-based web application that allows users to search for movies, add them to a "Watchlist," and mark them as "Watched." The app features seamless navigation using React Router and a responsive design for a smooth user experience across devices.

---

## Features

- **Search Movies**: Search for movies using an API.
- **Add to Watchlist**: Add movies to your personal watchlist.
- **Add to Watched**: Mark movies as watched.
- **Disable Buttons**: Buttons get disabled after adding movies to the respective lists.
- **Persistent Data**: All movie data is globally managed using `useContext`.
- **Responsive Design**: Optimized for all devices using CSS and auto-prefixes.

---

## Tech Stack

- **Framework**: React.js
- **Routing**: React Router DOM
- **State Management**: React `useContext`
- **Styling**: CSS with vendor prefixes for cross-browser compatibility
- **API**: Fetch movie data from a third-party API

---

## Usage

- Search: Use the search bar in the Add section to find movies.
- Add to Lists: Click "Add to Watchlist" or "Add to Watched." Buttons are disabled after selection.
- Navigation: Use the links in the header to switch between pages (Add, Watchlist, Watched).
