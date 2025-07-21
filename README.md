# LinkedIn Skill Endorser Extension

A lightweight Chrome extension that automatically endorses skills on a LinkedIn profile page. It simulates manual clicks on skill endorsement buttons and allows you to configure how many skills to endorse.

> ⚠️ For personal/educational use only. Automating LinkedIn interactions may violate LinkedIn's Terms of Service.

---

## 🔧 Features

- Auto-endorses skills on any LinkedIn profile page you visit
- Configurable number of skills to endorse (default: 10)
- Adds human-like delay between actions (randomized 500ms–1500ms)
- Simple popup interface for configuration

---

## 🛠 Installation

1. Clone or download this repository and extract the ZIP.
2. Go to `chrome://extensions` in Chrome.
3. Enable **Developer Mode** in the top-right corner.
4. Click **"Load unpacked"** and select the extracted folder.

---

## 🚀 Usage

1. Open any LinkedIn user’s profile (URL must match `https://www.linkedin.com/in/*`).
2. Click on the extension icon in the Chrome toolbar.
3. Enter the number of skills to endorse (or leave default), then click **"Endorse"**.
4. The extension will automatically endorse up to that number of skills.

> ✅ Make sure the skills section is visible. Scroll down manually if needed.

---

## 📂 Project Structure

linkedin-skill-endorser/
│
├── manifest.json # Chrome extension manifest
├── popup.html # UI for skill count input
├── popup.js # Handles user input and starts script
├── content.js # Core logic to find and click 'endorse' buttons
└── icon.png # Toolbar icon


## 🧠 How It Works

- Uses a content script (`content.js`) to find visible "Endorse" buttons.
- Randomized sleep between clicks to mimic real human interaction.
- Shows a final `alert()` with how many endorsements were made.

## ⚠️ Disclaimer

This extension is intended for **personal use only**. Automating interactions on LinkedIn can result in warnings or account restrictions.

---

## 📄 License

MIT License