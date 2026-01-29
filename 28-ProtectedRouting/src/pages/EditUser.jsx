import { useParams, useNavigate } from "react-router-dom";
import { users, updateUser } from "../data";

export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = users.find(user => user.id === Number(id));

    const [name, setName] = useState(user?.name || "");
    const [role, setRole] = useState(user?.role || "");

    if(!user) {
        return <h2>User Not Found</h2>
    }

    const submit = (e) => {
        e.preventDefault();
        updateUser(user.id, {id: user.id, name, role});
        navigate(`/users/${user.id}`);
    };

    return (
        <>
            <h1>Edit User</h1>
            <form onSubmit={submit}>
                <input value={name} onChange={e => setName(e.target.value)} />
                <input value={role} onChange={e => setRole(e.target.value)} />
                <button>Update</button>
            </form>
        </>
    )
}