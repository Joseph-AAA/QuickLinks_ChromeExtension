🚀 Launchpad — Chrome Extension

A custom Chrome New Tab extension built with React, Vite, and Tailwind CSS. Launchpad replaces Chrome's default New Tab page with a clean, personalized dashboard.

✨ Features
🕐 Dynamic Greeting
Displays "Good Morning" or "Good Evening" based on the current time.
🌤️ Weather Widget
Fetches current weather data using the Open-Meteo API.
Displays:
Current temperature
Day/night condition
Weather icons based on weather codes
Location information
🔗 Quick Links
Add your own shortcuts.
Automatically displays website favicons.
Open saved websites directly from the New Tab page.
Delete shortcuts when they are no longer needed.
Saves shortcuts using localStorage.
🖼️ Dynamic Background
Fetches a random wallpaper from the Unsplash API.
🔍 Search
Search the web directly from the Launchpad New Tab page.
📱 Responsive Design
Works across desktop, tablet, and mobile screen sizes.
🛠️ Built With
React
JavaScript
Vite
Tailwind CSS
Open-Meteo API
Unsplash API
React Icons
LocalStorage
Chrome Extension Manifest V3

📂 Project Structure
Launchpad_Chrome_Ext/
├── public/
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── QuickLink.jsx
│   │   ├── QuickLinkForm.jsx
│   │   ├── SearchBox.jsx
│   │   └── WeatherWidget.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
