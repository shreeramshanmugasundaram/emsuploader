import React, { useEffect, useState } from "react";

import { Buffer } from "buffer";
import "./Table.css";

const Table = ({ delFun, getFun }) => {
  const [change, setChange] = useState();
  const deleteStudentData = delFun;
  const getAllStudentData = getFun;
  const [allStudent, setData] = useState([]);
  const handleDelete = (id) => {
    deleteStudentData({ id });
    setChange(id);
  };
  useEffect(() => {
    getAllStudentData(setData);
  }, [change]);
  return (
    <div className="Table">
      <hr />
      <h2>Student List</h2>
      <hr />
      {allStudent.map((data) => {
        const bufferImage = data?.imageBuffer.data;
        const base64Image = Buffer.from(bufferImage).toString("base64");
        const src = `data:image/jpeg;base64,${base64Image}`;
        return (
          <div className="TableCard">
            <img src={src} alt="" />
            <div style={{ textAlign: "left" }}>
              <div>
                <b>Name :</b> {data.fname}
              </div>
              <div>Marks : {data.marks}</div>
              <div>Year : {data.year}</div>
              <div>Course :{data.course}</div>
            </div>
            <button
              className="btn-1"
              id={data._id}
              onClick={(e) => handleDelete(e.target.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
