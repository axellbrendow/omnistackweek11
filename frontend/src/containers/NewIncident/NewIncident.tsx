import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const ngoId = localStorage.getItem('ngoId');

  const handleNewIncident = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ngoId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Error when registering this case, try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Logo Be The Hero" />

          <h1>Register new case</h1>
          <p>Describe the case in details to find a hero to solve this.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Case title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value in dolars"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
