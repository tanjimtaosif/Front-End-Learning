import {
    useGetPostsQuery,
    useDeletePostMutation,
    postsApi,
} from './postsApi';
import { useDispatch } from 'react-redux';
import PostForm from '../../components/PostForm';

export default function Posts() {
    const { data: posts, isLoading } = useGetPostsQuery();
    const [deletePost] = useDeletePostMutation();
    const dispatch = useDispatch();

    if (isLoading) return <div className="text-center mt-10 text-lg">Loading...</div>;

    return (
        <div className="px-4 py-10 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center text-blue-600">Posts</h1>

            <PostForm />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts?.map((post) => (
                    <div key={post.id} className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-gray-600 mt-2">{post.body}</p>

                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Post ID: {post.id}</span>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded"
                                onClick={async () => {
                                    try {
                                        await deletePost(post.id).unwrap();
                                        dispatch(
                                            postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
                                                return draft.filter((p) => p.id !== post.id);
                                            })
                                        );
                                    } catch (err) {
                                        console.error("Delete failed:", err);
                                    }
                                }}
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
