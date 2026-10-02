# QuickNotes

A simple note-taking web app built with HTML, CSS and JavaScript. You can add, search and delete short notes, and they stay saved in your browser.

## Features

- Add notes with a category (personal, work, study, ideas)
- Validation: empty notes and notes over 200 characters are rejected
- Delete notes
- Search notes as you type
- Live note count (zero, one and many)
- Notes saved in localStorage, so they survive a refresh
- Responsive layout for small screens

## How to run locally

1. Clone the repository: `git clone https://github.com/Martin-nyiha/quicknotes-app.git`
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (or just open `index.html` in a browser).

## What I learned

- How to build a page that updates by changing an array and calling `render()`
- Why `textContent` is safer than `innerHTML` for user text
- How `JSON.stringify` and `JSON.parse` let localStorage keep arrays of objects