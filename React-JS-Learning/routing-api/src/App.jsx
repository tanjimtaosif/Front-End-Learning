import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [searchType, setSearchType] = useState('') // dropdown option
  const [searchInput, setSearchInput] = useState('') // user input

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setFilteredPosts(data)
      })
  }, [])

  useEffect(() => {
    if (!searchInput.trim()) {
      setFilteredPosts(posts)
      return
    }

    const query = searchInput.toLowerCase()

    const results = posts.filter(post => {
      switch (searchType) {
        case 'postId':
          return post.id.toString() === query
        case 'userId':
          return post.userId.toString() === query
        case 'title':
          return post.title.toLowerCase().includes(query)
        case 'postIdOrTitle':
          return (
            post.id.toString() === query ||
            post.title.toLowerCase().includes(query)
          )
        default:
          return true
      }
    })

    setFilteredPosts(results)
  }, [searchInput, searchType, posts])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Blue Navbar with Search Input and Dropdown in One Row */}
      <div className="bg-blue-500 rounded-xl shadow-lg p-4 flex items-center justify-between mb-10">
        <h2 className="text-white text-xl font-bold whitespace-nowrap mr-4">POST.UI</h2>

        <div className="flex flex-1 items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm max-w-xl">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>

          {/* Dropdown Selector */}
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="text-sm border-none bg-transparent focus:outline-none text-gray-600 px-2"
          >
            <option value="">Filter</option>
            <option value="postId">Post ID</option>
            <option value="userId">User ID</option>
            <option value="title">Title</option>
            <option value="postIdOrTitle">Post ID or Title</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 text-sm bg-transparent focus:outline-none text-gray-800"
          />

          {/* Clear Button */}
          {searchInput && (
            <button
              onClick={() => setSearchInput('')}
              className="text-gray-500 hover:text-red-500 text-xl px-2"
              title="Clear"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="h-48 w-full object-cover"
              src="https://v3.tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
              alt="Card Cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">Post ID: {post.id} | User ID: {post.userId}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/post/${post.id}`}
                  className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600"
                >
                  Read More
                </Link>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-blue-500 hover:text-blue-700 text-lg"
                  title="More Info"
                >
                  ℹ️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">Post no. {selectedPost.id}</h2>
            <p className="mb-2 text-gray-700">{selectedPost.title}</p>
            <p className="mb-2 text-gray-700">{selectedPost.body}</p>
            <p className="text-gray-500 text-sm">User ID: {selectedPost.userId}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
