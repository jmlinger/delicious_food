import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerValidation } from '../utils/inputValidations';
import { apiRegister } from '../services/apiCalls';
import '../styles/pages/Login.css';

function Register() {
  const navigate = useNavigate();
  const [hiddenOn, setHiddenOn] = useState(true);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });

  function handleChange({ target: { name, value } }) {
    setRegister({ ...register, [name]: value });
  }

  async function submitRegister(e) {
    e.preventDefault();

    const response = await apiRegister(register);

    if (response.error) {
      setHiddenOn(false);
    } else {
      navigate('/');
    }
  }

  function hiddenInvalidEmail() {
    !hiddenOn && setTimeout(() => setHiddenOn(true), 4000);
    return hiddenOn;
  }

  return (
    <div className="register">
      <Link to="/" className="login-link">
        Já tenho conta!
      </Link>
      <fieldset className="login-container">
        <form className="login-form">
          <input
            className="login-input"
            data-testid="name-input"
            type="text"
            name="name"
            placeholder="Insira seu nome"
            onChange={handleChange}
          />
          <input
            className="login-input"
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Insira um email válido"
            onChange={handleChange}
          />
          <input
            className="login-input"
            data-testid="address-input"
            type="text"
            name="address"
            placeholder="Insira seu endereço completo"
            onChange={handleChange}
          />
          <input
            className="login-input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Insira uma senha válida"
            onChange={handleChange}
          />
          <p
            hidden={hiddenInvalidEmail()}
            className="invalid-email"
            data-testid="invalid-email-element">
            Email já cadastrado!
          </p>
          <button
            className="login-button"
            data-testid="register-button"
            type="submit"
            disabled={registerValidation(register).error}
            onClick={(e) => submitRegister(e)}>
            Cadastre-se
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Register;
