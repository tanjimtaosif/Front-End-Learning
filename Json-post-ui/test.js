fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        allPosts = data;
        displayPosts(allPosts); // show all posts initially
    })
    .catch(error => console.error("Error fetching data:", error));

// posts in the UI
function displayPosts(posts) {
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
  <div class="info-icon">
    <img src="assets/info-icon.png" alt="Info Icon" />

    <div class="modal">
      <h4>${post.title}</h4>
      <p><strong>User ID:</strong> ${post.userId}</p>
      <p><strong>Post ID:</strong> ${post.id}</p>
      <p>${post.body.replace(/\n/g, "<br>")}</p>
    </div>
  </div>

  <h3>${post.title}</h3>
  <div class="idContainer">
    <span><strong>User ID:</strong> ${post.userId}</span>
    <span><strong>Post ID:</strong> ${post.id}</span>
  </div>
  <p>${post.body.replace(/\n/g, "<br>")}</p>
`;
        postContainer.appendChild(postElement);
    });
}

document.getElementById("searchInput").addEventListener("input", handleSearch);
document.getElementById("searchType").addEventListener("change", handleSearch);

// search by title, userId or postId
function handleSearch() {
    const input = document.getElementById("searchInput").value.trim();
    const searchType = document.getElementById("searchType").value;

    // it will show all posts if the input is empty
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
