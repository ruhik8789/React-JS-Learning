import { Link, useNavigate } from "react-router-dom";
import { users, deleteUser } from "../data";
import { logout } from "../auth";

export default function Users() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Users</h1>
            <button onClick={() => {logout(); navigate("/login")}}>Logout</button>
            <button onClick={() => navigate("/users/new")}>Add User</button>
            <hr />

            {users.map(user => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                    <Link to={`/users/${user.id}/edit`}>Edit</Link>
                    {" | "}
                    <button onClick={() => {deleteUser(user.id); navigate(0);}}>Delete</button>
                </div>
            ))}
        </>
    )
}