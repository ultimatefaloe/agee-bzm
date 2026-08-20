// import {posts} from "./data.js";
import { saveLocalStorage, getLocalStorage } from "./storage.js";
 
let posts = getLocalStorage();

const getElement = (selector) => document.querySelector(selector);


// Select all dom element
const postContainer = getElement("#postContainer");

// modal dom
const modalOverlay = getElement("#modalOverlay");
const openModalBtn = getElement("#openModalBtn");
const cancelBtn = getElement("#cancelModalBtn");

// form dom
const postForm = getElement("#postForm");
const postTitleInput = getElement("#titleInput");
const postBodyInput = getElement("#bodyInput");

// post card ui
const postCard = (post) => {
  const {id, userId, title, body } = post;

  return `
   <article class="post-card">
        <div class="post-meta">
          <span class="post-id">User ${userId} · #${id}</span>
        </div>
        <h2 class="post-title">${title}</h2>
        <p class="post-body">
          ${body}
        </p>
        <div class="post-footer">
          <span>📅 2 min read</span>
        </div>
      </article>
  `
}

const renderPosts = (posts) => {
  if(posts.length === 0) {
    return;
  }
  postContainer.innerHTML = "";
  postContainer.innerHTML = posts.map((post) => postCard(post)).join("");
}

const openModal = () => {
  modalOverlay.classList.add("active");
  postTitleInput.value = "";
  postBodyInput.value = "";
  postTitleInput.focus();
}

const closeModal = () => {
  modalOverlay.classList.remove("active");
}

const createPost  = (data) => {
  const {title, body} = data;
  if (!title.trim() || !body.trim()) {
    alert("Both title and body are required.");
    return;
  }

  const payload ={
    id: Date.now(),
    title,
    body,
    userId: 20
  }

  console.log("New Post Created:", payload);
  posts.unshift(payload);
  saveLocalStorage(posts);
  renderPosts(posts);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPosts(posts);

  openModalBtn.addEventListener("click", openModal);
  cancelBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = postTitleInput.value;
    const body = postBodyInput.value;

    createPost({title, body});

    closeModal();
  })

})