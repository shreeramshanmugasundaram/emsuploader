import React, { useEffect, useState } from "react";
import "./Forms.css";
import Table from "../Components/Table";

const FormMain = ({ source, delFun, getFun, heading }) => {
  const uploadNewStudentData = source;
  const [formdata, setFormdata] = useState({});
  const [links, setLinks] = useState([]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    uploadNewStudentData(formdata);
  };

  useEffect(() => {
    getFun(setLinks);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{heading}</h1>
        <input
          type="text"
          placeholder="Youtube Shots Link"
          name="link"
          onChange={handleChange}
        />

        <button type="submit" className="btn-1">
          Submit
        </button>
      </form>
      <div className="links">
        <hr />
        <h2>Links</h2>
        <hr />
        {links.map((link) => {
          return (
            <div>
              {link.link}
              <button
                className="btn-2"
                onClick={() => delFun({ id: link._id })}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormMain;
