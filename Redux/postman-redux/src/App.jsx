import React from 'react';
import UserList from './components/UserList';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
