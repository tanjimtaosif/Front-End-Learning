import {
    useGetPostsQuery,
    useDeletePostMutation,
} from './postsApi';
import PostForm from '../../components/PostForm';

export default function Posts() {
    const { data: posts, isLoading } = useGetPostsQuery();
    const [deletePost] = useDeletePostMutation();

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
            <PostForm />
            <div className="space-y-4">
                {posts?.map((post) => (
                    <div key={post.id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                        <div className="flex gap-4 mt-2">
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => deletePost(post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
