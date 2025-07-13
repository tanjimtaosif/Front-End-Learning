import React from 'react';
import Modal from './Modal';
import UserForm from './UserForm';
import { useUpdateUserMutation } from '../features/users/usersApi';

export default function EditUserModal({ isOpen, onClose, user }) {
  const [updateUser] = useUpdateUserMutation();

  const handleUpdate = async (data) => {
    await updateUser({ id: user._id, ...data });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit User">
      <UserForm initialData={user} onSubmit={handleUpdate} />
    </Modal>
  );
}
