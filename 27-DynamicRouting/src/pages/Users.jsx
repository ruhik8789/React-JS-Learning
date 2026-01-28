import React from 'react'
import { Link } from 'react-router-dom';
import { data  } from './data';

const users = () => {
  return (
    <>
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </>
  );
}

export default users
