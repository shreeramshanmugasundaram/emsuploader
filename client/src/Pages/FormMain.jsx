import React, { useState } from "react";
import "./Forms.css";
import Table from "../Components/Table";

const FormMain = ({ source, delFun, getFun, heading }) => {
  const uploadNewStudentData = source;
  const [formdata, setFormdata] = useState({});
  const [img, setImg] = useState();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("imagebuffer", img);
    for (const key in formdata) {
      formData.append(key, formdata[key]);
    }
    uploadNewStudentData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{heading} Page Student List</h1>
        <input
          type="text"
          placeholder="Student Name"
          name="fname"
          onChange={handleChange}
        />
        <input
          type="number"
          min="10"
          max="100"
          placeholder="Student Mark"
          name="marks"
          onChange={handleChange}
          step="0.01"
        />

        <select name="course" id="" onChange={handleChange}>
          <option value="none" defaultChecked>
            Student Course
          </option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="Commerce">Commerce</option>
        </select>

        <select name="year" id="" onChange={handleChange}>
          <option value="none" defaultChecked>
            Year
          </option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>

        <div className="fileupload">
          <span>Student Photo : </span>
          <input type="file" onChange={handleFile} />
        </div>

        <button type="submit" className="btn-1">
          Submit
        </button>
      </form>
      <Table delFun={delFun} getFun={getFun} />
    </div>
  );
};

export default FormMain;
