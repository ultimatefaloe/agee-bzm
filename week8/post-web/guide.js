(function () {
  "use strict";

  // ----- DOM refs -----
  const postContainer = document.getElementById("postContainer");
  const modalOverlay = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("openModalBtn");
  const cancelBtn = document.getElementById("cancelModalBtn");
  const postForm = document.getElementById("postForm");
  const titleInput = document.getElementById("titleInput");
  const bodyInput = document.getElementById("bodyInput");

  // ----- state -----
  let posts = [];

  // ----- helper: generate unique ID (simple increment) -----
  let nextId = 1;
  function generateId() {
    return nextId++;
  }

  // ----- render posts -----
  function renderPosts() {
    // clear container
    postContainer.innerHTML = "";

    if (posts.length === 0) {
      // show empty state
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "empty-message";
      emptyDiv.textContent = "✨ No posts yet. Click “New Post” to create one.";
      postContainer.appendChild(emptyDiv);
      return;
    }

    // sort by id descending (newest first)
    const sorted = [...posts].sort((a, b) => b.id - a.id);

    for (const post of sorted) {
      const card = document.createElement("div");
      card.className = "post-card";

      // userId + id badge
      const idSpan = document.createElement("span");
      idSpan.className = "post-id";
      idSpan.textContent = `👤 ${post.userId} · #${post.id}`;

      const titleEl = document.createElement("h2");
      titleEl.className = "post-title";
      titleEl.textContent = post.title;

      const bodyEl = document.createElement("p");
      bodyEl.className = "post-body";
      bodyEl.textContent = post.body;

      // footer with just a small meta (optional)
      const footerEl = document.createElement("div");
      footerEl.className = "post-footer";
      const metaSpan = document.createElement("span");
      metaSpan.textContent = `📌 user ${post.userId}`;
      footerEl.appendChild(metaSpan);

      card.appendChild(idSpan);
      card.appendChild(titleEl);
      card.appendChild(bodyEl);
      card.appendChild(footerEl);

      postContainer.appendChild(card);
    }
  }

  // ----- add new post -----
  function addPost(title, body) {
    if (!title.trim() || !body.trim()) {
      alert("Both title and body are required.");
      return false;
    }

    const newPost = {
      userId: Math.floor(Math.random() * 10) + 1, // fake userId 1..10
      id: generateId(),
      title: title.trim(),
      body: body.trim(),
    };

    posts.push(newPost);
    renderPosts();
    return true;
  }

  // ----- modal controls -----
  function openModal() {
    modalOverlay.classList.add("active");
    titleInput.value = "";
    bodyInput.value = "";
    titleInput.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
  }

  // ----- event listeners -----
  openBtn.addEventListener("click", openModal);

  cancelBtn.addEventListener("click", closeModal);

  // click outside modal to close
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // ESC key to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // form submit
  postForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const body = bodyInput.value;

    const success = addPost(title, body);
    if (success) {
      closeModal();
    }
  });

  // ----- seed with initial sample posts (for demonstration) -----
  function seedInitialPosts() {
    // We'll add 3 sample posts so the page looks alive
    const samplePosts = [
      {
        userId: 3,
        id: generateId(),
        title: "Getting started with Web Post",
        body: 'This is a simple post manager. Click the "New Post" button to add your own entries. The posts are stored in memory.',
      },
      {
        userId: 7,
        id: generateId(),
        title: "Design is how it works",
        body: "Clean, minimal cards with soft shadows and a friendly header. The modal makes it easy to create new content.",
      },
      {
        userId: 1,
        id: generateId(),
        title: "Keyboard shortcuts",
        body: "Press ESC to close the modal. Use tab to navigate between fields. Stay productive!",
      },
    ];
    // push samples
    for (const p of samplePosts) {
      posts.push(p);
    }
    // ensure nextId is ahead of any used id
    const maxId = posts.reduce((max, p) => (p.id > max ? p.id : max), 0);
    if (maxId >= nextId) {
      nextId = maxId + 1;
    }
    renderPosts();
  }

  // start with sample posts
  seedInitialPosts();
})();
