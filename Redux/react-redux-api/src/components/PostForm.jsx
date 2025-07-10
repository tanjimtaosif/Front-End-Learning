// src/components/PostForm.jsx
import { useState } from 'react';
import { useCreatePostMutation } from '../features/posts/postsApi';

export default function PostForm() {
    const [createPost] = useCreatePostMutation();
    const [formData, setFormData] = useState({ title: '', body: '' });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ ...formData, userId: 1 });
        setFormData({ title: '', body: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
            <input
                name="title"
                className="w-full border p-2 rounded"
                placeholder="Post Title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                name="body"
                className="w-full border p-2 rounded"
                placeholder="Post Content"
                value={formData.body}
                onChange={handleChange}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Post</button>
        </form>
    );
}
