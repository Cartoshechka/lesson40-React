import { useState } from "react";

const ControlledForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button type="submit">Submit</button>

            <div>Email: {email}</div>
            <div>Password: {password}</div>
        </form>
    );
};

export default ControlledForm;