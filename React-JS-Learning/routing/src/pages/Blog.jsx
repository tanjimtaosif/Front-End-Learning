import { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    // Fetch API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 15))) // Only show 12 posts for now
            .catch((err) => console.error('Error fetching posts:', err));
    }, []);

    return (
        <section className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8 text-center">
                    Blog Posts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-gray-900 rounded-lg shadow p-6 hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-green-400 mb-2">
                                {post.title.slice(0, 40)}...
                            </h3>
                            <p className="text-sm text-gray-400 mb-3">
                                <strong>User ID:</strong> {post.userId} <br />
                                <strong>Post ID:</strong> {post.id}
                            </p>
                            <p className="text-gray-300 text-sm">
                                {post.body.slice(0, 120)}...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
