import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

class Incident {
  public id!: number;

  public title!: string;

  public description!: string;

  public value!: number;

  public ngoId!: string;

  public readonly createAt!: Date;

  public readonly updatedAt!: Date;
}

const Profile = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  const ngoId = localStorage.getItem("ngoId");
  const ngoName = localStorage.getItem("ngoName");

  const fetchIncidents = async () => {
    if (page > 1 && incidents?.length === total) {
      alert("No more cases");
      return;
    }

    const response = await api.get("/ngos/incidents", {
      headers: {
        Authorization: ngoId,
      },
      params: {
        page,
      },
    });

    setTotal(response.data.count);
    setPage(page + 1);
    setIncidents([...incidents, ...response.data.rows]);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  const handleDeleteIncident = async (id: number) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ngoId,
        },
      });
    } catch (error) {
      alert("Error when deleting case, try again.");
    }

    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo Be The Hero" />
        <span>Welcome, {ngoName}</span>
        <Link to="/incidents/new" className="button">
          Register new case
        </Link>
        <button type="button" onClick={Logout}>
          <FiPower size={18} color="#e02041" title="Logout" />
        </button>
      </header>
      <h1>Registered cases (total: {total})</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASE:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIPTION:</strong>
            <p>{incident.description}</p>

            <strong>VALUE:</strong>
            <p>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="button" onClick={fetchIncidents}>
        Fetch more cases
      </button>
    </div>
  );
};

export default Profile;
