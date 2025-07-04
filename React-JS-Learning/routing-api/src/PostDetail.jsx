import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [id])

    if (!post) {
        return <div className="text-center mt-10 text-lg">Loading post...</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white max-w-xl w-full rounded-xl shadow-md overflow-hidden">
                <img
                    className="h-64 w-full object-cover"
                    src="https://v3.tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
                    alt="Post Cover"
                />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                    <p className="text-gray-600 mb-4">{post.body}</p>
                    <p className="text-sm text-gray-500">Post ID: {post.id} | User ID: {post.userId}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetail
