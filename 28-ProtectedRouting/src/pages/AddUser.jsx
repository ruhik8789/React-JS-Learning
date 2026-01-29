import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data";

export default function AddUser() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        addUser({id: Date.now(), name, role});
        navigate("/users");
    };

    return (
        <>
            <h1>Add User</h1>
            <form onSubmit={submit}>
                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                <input placeholder="Role" onChange={e => setRole(e.target.value)} />
                <button>Add</button>
            </form>
        </>
    )
}