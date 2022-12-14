import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUpdateRegister } from '../services/apiCalls';
import { ProfileIcon } from '../styles/components/Icons';
import { updateUserValidation } from '../utils/inputValidations';
import '../styles/components/Profile.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Profile() {
  const {
    id: userId,
    name: currentName,
    email: currentEmail,
    address: currentAddress,
    token
  } = JSON.parse(localStorage.getItem('user'));

  const [modalIsOpen, setIsOpen] = useState(false);
  const [hideChangeData, setHideChangeData] = useState(true);
  const [register, setRegister] = useState({
    id: userId,
    name: currentName,
    email: currentEmail,
    address: currentAddress,
    password: ''
  });

  useEffect(() => {
    setHideChangeData(true);
  }, [modalIsOpen]);

  function reebotRegister() {
    setRegister({
      ...register,
      name: currentName,
      email: currentEmail,
      password: '',
      address: currentAddress
    });
  }

  async function submitUpdateRegister(e) {
    e.preventDefault();

    const response = await apiUpdateRegister(register);

    if (!response.error) {
      setHideChangeData(true);
      // atualiza o local storage
      const { id, name, email, address } = response;
      const userData = { id, name, email, address, token };
      localStorage.setItem('user', JSON.stringify(userData));
      window.location.reload();
    }
  }

  function handleChange({ target: { name, value } }) {
    setRegister({ ...register, [name]: value });
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
    reebotRegister();
  }

  function BackToInitProfile() {
    setHideChangeData(false);
    reebotRegister();
  }

  const { name, email, address, password } = register;

  return (
    <div>
      <button onClick={toggleModal}>
        <ProfileIcon modalIsOpen={modalIsOpen} />
      </button>
      <Modal
        className="modal"
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}>
        <h2>Perfil</h2>
        <div hidden={!hideChangeData}>
          <div className="init-profile">
            <button className="profile-button" onClick={() => BackToInitProfile()}>
              Alterar dados
            </button>
            <Link to="/">
              <button className="profile-button">Logout</button>
            </Link>
          </div>
        </div>
        <form hidden={hideChangeData}>
          <div className="profile-form">
            <input
              className="profile-input"
              data-testid="name-input"
              type="text"
              name="name"
              placeholder="Insira seu nome"
              value={name}
              onChange={handleChange}
            />
            <input
              className="profile-input"
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Insira um email válido"
              value={email}
              onChange={handleChange}
            />
            <input
              className="profile-input"
              data-testid="address-input"
              type="text"
              name="address"
              placeholder="Insira seu endereço completo"
              value={address}
              onChange={handleChange}
            />
            <input
              className="profile-input"
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="Insira uma senha válida"
              value={password}
              onChange={handleChange}
            />
            <p>Deixe em branco o campo que não deseja alterar.</p>
            <button
              className="profile-button"
              data-testid="register-button"
              type="submit"
              disabled={updateUserValidation({ name, email, address, password }).error}
              onClick={(e) => submitUpdateRegister(e)}>
              Enviar Alteração
            </button>
            <button
              className="profile-button"
              type="button"
              onClick={() => setHideChangeData(true)}>
              Sair
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Profile;
