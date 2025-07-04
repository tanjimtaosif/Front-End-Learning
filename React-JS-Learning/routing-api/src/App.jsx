import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Post List</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
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
                <a
                  href={`/post/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600"
                > Read More
                </a>
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
        <div className="fixed inset-0 z-50  backdrop-blur-md flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">Post no. {selectedPost.id}</h2>
            <p className="mb-2 text-gray-700">
              <strong></strong> {selectedPost.title}
            </p>
            <p className="mb-2 text-gray-700">
              <strong></strong> {selectedPost.body}
            </p>
            <p className="text-gray-500 text-sm">User ID: {selectedPost.userId}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
