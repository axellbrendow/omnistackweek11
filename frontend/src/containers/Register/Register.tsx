import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [fu, setFu] = useState("");

  const history = useHistory();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      fu,
    };

    try {
      const response = await api.post("ngos", data);

      alert(`Your access ID: ${response.data.id}`);

      history.push("/");
    } catch (error) {
      console.log(JSON.parse(JSON.stringify(error.response)));
      alert("Error in the register, try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Logo Be The Hero" />

          <h1>Register</h1>
          <p>
            Register, enter in the platform and help people to find your
            NGO&apos;s cases.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="NGO name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="FU"
              style={{ width: 80 }}
              value={fu}
              onChange={(e) => setFu(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
