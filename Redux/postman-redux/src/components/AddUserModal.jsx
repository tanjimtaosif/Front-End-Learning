import React from 'react';
import Modal from './Modal';
import UserForm from './UserForm';
import { useAddUserMutation } from '../features/users/usersApi';

export default function AddUserModal({ isOpen, onClose }) {
  const [addUser] = useAddUserMutation();

  const handleAdd = async (data) => {
    await addUser(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New User">
      <UserForm onSubmit={handleAdd} />
    </Modal>
  );
}
