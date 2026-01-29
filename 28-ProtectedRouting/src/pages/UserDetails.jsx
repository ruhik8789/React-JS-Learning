import { useParams, Link } from "react-router-dom";
import { users } from "../data";

export default function UserDetails() {
    const { id } = useParams();
    const user = users.find(user => user.id === Number(id));

    if(!user) {
        return <h2>User Not Found</h2>
    }

    return (
        <>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
            <Link to="/users">Back</Link>
        </>
    )
}