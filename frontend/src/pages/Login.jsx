import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginValidation } from '../utils/inputValidations';
import { apiLogin } from '../services/apiCalls';
import '../styles/pages/Login.css';

function Login() {
  const navigate = useNavigate();
  const [hiddenOn, setHiddenOn] = useState(true);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  function handleChange({ target: { name, value } }) {
    setLogin({ ...login, [name]: value });
  }

  async function submitLogin(e) {
    e.preventDefault();

    const response = await apiLogin(login);

    if (response.error) {
      setHiddenOn(false);
    } else {
      const {
        token,
        user: { id, name, email, address }
      } = response;
      const userData = { id, name, email, address, token };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/restaurants');
    }
  }

  function hiddenInvalidEmail() {
    !hiddenOn && setTimeout(() => setHiddenOn(true), 4000);
    return hiddenOn;
  }

  return (
    <div id="login-body" className="login">
      <Link to="/register" className="register-link">
        <h2 className="login-register-1">Não tem conta?</h2>
        <h2 className="login-register-2">Cadastre-se</h2>
      </Link>
      <div className="login-subtitle-container-container">
        <div className="login-subtitle-container">
          <h1 className="login-subtitle">Encontre os melhores restaurantes perto de você!</h1>
        </div>
      </div>
      <div>
        <h1 className="login-title">Delicious Food</h1>
      </div>
      <fieldset id="login-fieldset" className="login-container">
        <form id="login-form" className="login-form">
          <input
            className="login-input"
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="login-input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
          />
          <p hidden={hiddenInvalidEmail()} className="invalid-email" data-testid="invalid-email">
            Email ou senha inválido.
          </p>
          <button
            className="login-button"
            data-testid="login-button"
            type="submit"
            disabled={loginValidation(login).error}
            onClick={(e) => submitLogin(e)}>
            Entrar
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
