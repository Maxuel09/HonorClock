import React, { useState } from 'react';
import '../Css/AuthForm.css';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';

function AuthForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="main">
            <input
                type="checkbox"
                id="chk"
                aria-hidden="true"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />

            <LoginForm />
            <RegisterForm />
        </div>
    );
}

export default AuthForm;
