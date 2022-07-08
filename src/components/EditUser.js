import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama_kendaraan, setnama_kendaraan] = useState("");
  const [tahun_Kendaraan, settahun_Kendaraan] = useState("");
  const [pemilik, setpemilik] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama_kendaraan,
        tahun_Kendaraan,
        pemilik,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setnama_kendaraan(response.data.nama_kendaraan);
    settahun_Kendaraan(response.data.tahun_Kendaraan);
    setpemilik(response.data.pemilik);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama Kendaraan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_kendaraan}
                onChange={(e) => setnama_kendaraan(e.target.value)}
                placeholder="nama_kendaraan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tahun Kendaraan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tahun_Kendaraan}
                onChange={(e) => settahun_Kendaraan(e.target.value)}
                placeholder="tahun_Kendaraan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pemilik</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={pemilik}
                onChange={(e) => setpemilik(e.target.value)}
                placeholder="pemilik"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
