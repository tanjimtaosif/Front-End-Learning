// File: src/components/UserList.jsx
import React, { useState } from 'react';
import {
    useGetAllUsersQuery,
    useDeleteUserMutation,
} from '../features/users/usersApi';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import ViewUserModal from './ViewUserModal';

export default function UserList() {
    const {
        data: users = [],
        isLoading,
        isError,
        error,
    } = useGetAllUsersQuery();
    const [deleteUser] = useDeleteUserMutation();

    const [addOpen, setAddOpen] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [viewUser, setViewUser] = useState(null);

    if (isLoading) {
        return <p className="text-center py-10">Loading...</p>;
    }
    if (isError) {
        return (
            <p className="text-center py-10 text-red-600">
                Error loading users: {error.toString()}
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-10 px-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
                <button
                    type="button"
                    onClick={() => setAddOpen(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-md"
                >
                    + Add User
                </button>
            </div>

            {/* List */}
            <ul className="space-y-4">
                {users.map((u) => (
                    <li
                        key={u._id}
                        className="p-4 bg-white rounded-xl shadow flex justify-between items-center hover:shadow-lg transition-shadow"
                    >
                        {/* Info */}
                        <div className="flex items-center">
                            {u.image && (
                                <img
                                    src={u.image}
                                    alt={u.name}
                                    className="h-12 w-12 rounded-full object-cover mr-4"
                                />
                            )}
                            <div>
                                <p className="font-semibold text-lg text-gray-800">
                                    {u.name}
                                </p>
                                <p className="text-sm text-gray-500">{u.email}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-3">
                            <button
                                type="button"
                                onClick={() => setViewUser(u)}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                            >
                                View
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditUser(u)}
                                className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteUser(u._id)}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded-full"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modals */}
            <AddUserModal isOpen={addOpen} onClose={() => setAddOpen(false)} />
            <EditUserModal
                isOpen={!!editUser}
                onClose={() => setEditUser(null)}
                user={editUser}
            />
            <ViewUserModal
                isOpen={!!viewUser}
                onClose={() => setViewUser(null)}
                user={viewUser}
            />
        </div>
    );
}
