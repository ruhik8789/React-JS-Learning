import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

export default function LoginToPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if(success) {
            navigate("/");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
            {error && <p style={{color: "red"}}>{error}</p>}
            <p>Use <b>admin / admin</b></p>
        </>
    )
}