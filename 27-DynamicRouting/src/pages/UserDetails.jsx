import React from 'react'
import { useParams } from 'react-router-dom';
import {data as users} from './data';


const UserDetails = () => {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </>
  );
}

export default UserDetails;
