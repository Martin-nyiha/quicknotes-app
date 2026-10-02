const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

const MAX_LENGTH = 200;
let notes = [];

function showError(message) {
  errorMessage.textContent = message;
}

function render() {
  notesList.textContent = "";

  for (const note of notes) {
    const li = document.createElement("li");
    li.className = `note ${note.category}`;

    const text = document.createElement("p");
    text.className = "note-text";
    text.textContent = note.text;

    const meta = document.createElement("small");
    meta.textContent = `${note.category} • ${new Date(note.createdAt).toLocaleDateString()}`;

        const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteNote(note.id));

    li.append(text, meta, deleteBtn);
    notesList.append(li);
  }
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = noteInput.value.trim();

  if (text === "") {
    showError("Please type a note before adding.");
    return;
  }
  if (text.length > MAX_LENGTH) {
    showError(`Note is too long (${text.length}/${MAX_LENGTH} characters).`);
    return;
  }

  showError("");
  notes.unshift({
    id: Date.now(),
    text: text,
    category: categorySelect.value,
    createdAt: new Date().toISOString(),
  });

  noteInput.value = "";
  noteInput.focus();
  render();
});

render();