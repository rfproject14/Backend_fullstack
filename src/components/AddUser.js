import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nama_kendaraan, setnama_kendaraan] = useState("");
  const [tahun_kendaraan, settahun_kendaraan] = useState("");
  const [pemilik, setpemilik] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama_kendaraan,
        tahun_kendaraan,
        pemilik,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
                value={tahun_kendaraan}
                onChange={(e) => settahun_kendaraan(e.target.value)}
                placeholder="tahun_kendaraan"
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
