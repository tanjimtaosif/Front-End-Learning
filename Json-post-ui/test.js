fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        allPosts = data;
        displayPosts(allPosts);
    })
    .catch(error => console.error("Error fetching data:", error));

// Function to display posts
function displayPosts(posts) {
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const shortBody = post.body.length > 20 ? post.body.slice(0, 20) + "..." : post.body;
        const fullBody = post.body.replace(/\n/g, "<br>");

        postElement.innerHTML = `
  <h3>${post.title}</h3>
  <div class="idContainer">
    <span><strong>User ID:</strong> ${post.userId}</span>
    <span><strong>Post ID:</strong> ${post.id}</span>
  </div>
  <p class="post-body" data-full="${post.body}">
    ${shortBody}
    ${post.body.length > 20 ? '<span class="view-toggle">View More</span>' : ''}
  </p>
  <div class="card-footer">
  <a href="read-more.html?id=${post.id}" class="read-more-btn" target="_blank">Read More</a>
    <img src="assets/info-icon.png" alt="Info Icon" class="info-icon" data-id="${post.id}" />
  </div>
`;


        postContainer.appendChild(postElement);
    });

    document.querySelectorAll(".view-toggle").forEach(btn => {
        btn.addEventListener("click", function () {
            const p = this.closest(".post-body");
            const fullText = p.dataset.full;
            const isExpanded = this.textContent === "View Less";

            p.innerHTML = isExpanded
                ? fullText.slice(0, 20) + '...<span class="view-toggle">View More</span>'
                : fullText.replace(/\n/g, "<br>") + '<span class="view-toggle">View Less</span>';

            p.querySelector(".view-toggle").addEventListener("click", arguments.callee);
        });
    });

    // Modal open logic
    document.querySelectorAll(".info-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            const postId = parseInt(this.dataset.id);
            const post = allPosts.find(p => p.id === postId);
            showModal(post);
        });
    });
}


function showModal(post) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
    <h3>${post.title}</h3>
    <p><strong>User ID:</strong> ${post.userId}</p>
    <p><strong>Post ID:</strong> ${post.id}</p>
    <p>${post.body.replace(/\n/g, "<br>")}</p>
  `;

    modal.classList.remove("hidden");
}

// Close modal
document.getElementById("modalClose").addEventListener("click", function () {
    document.getElementById("modal").classList.add("hidden");
});

// Search functions
document.getElementById("searchInput").addEventListener("input", handleSearch);
document.getElementById("searchType").addEventListener("change", handleSearch);

function handleSearch() {
    const input = document.getElementById("searchInput").value.trim();
    const searchType = document.getElementById("searchType").value;

    if (input === "") {
        displayPosts(allPosts);
        return;
    }

    const filtered = allPosts.filter(post => {
        if (searchType === "userId") {
            return post.userId === parseInt(input);
        } else if (searchType === "id") {
            return post.id === parseInt(input);
        } else if (searchType === "title") {
            return post.title.toLowerCase().includes(input.toLowerCase());
        }
        return false;
    });

    displayPosts(filtered);
}