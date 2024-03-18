import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <form className="form">
                <label htmlFor="chk" aria-hidden="true">
                    Log in
                </label>
                <input className="input" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="input" type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};


export default LoginForm;
