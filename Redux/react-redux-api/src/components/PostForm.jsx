import { useState } from 'react';
import { useCreatePostMutation, useGetPostsQuery, postsApi } from '../features/posts/postsApi';
import { useDispatch } from 'react-redux';

export default function PostForm() {
    const [createPost] = useCreatePostMutation();
    const [formData, setFormData] = useState({ title: '', body: '' });
    const dispatch = useDispatch();
    const { refetch } = useGetPostsQuery();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await createPost({ ...formData, userId: 1 }).unwrap();

            // Manually update the UI
            dispatch(
                postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
                    draft.unshift(newPost); // add on top
                })
            );

            setFormData({ title: '', body: '' });
        } catch (err) {
            console.error("Post creation failed:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-10 bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Add New Post</h2>

            <input
                name="title"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 rounded"
                placeholder="Post Title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                name="body"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 rounded"
                placeholder="Post Content"
                value={formData.body}
                onChange={handleChange}
            />
            <button className="bg-purple-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                Add Post
            </button>
        </form>
    );
}
