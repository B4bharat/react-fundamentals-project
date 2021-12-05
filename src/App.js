import React, { useState } from 'react';

// ----------- Components -----------
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age, id) => {
    const userId = Math.random().toString();

    setUsers((prevUsers) => {
      return [...prevUsers, { name, age, id: userId }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
