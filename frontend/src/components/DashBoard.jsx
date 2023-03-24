import React, { useState } from "react";
import style from "../css/dashboard.module.css";
import AddTasks from "./AddTasks";
import Tables from "./Tables";
import { useDispatch, useSelector } from "react-redux";
import { addAllData, deleteData } from "../redux/action";
import EditModal from "./EditModal";

const initialState = {
  first_name: "",
  last_name: "",
  gender: "",
  semester: "",
  hobby: [],
};

const DashBoard = () => {
  const { allData } = useSelector((store) => store.task);
  const [form, setForm] = useState(initialState);
  const [data, setData] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  // ---------- on change form -----------
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    if (type == "checkbox") {
      setHobby([...hobby, value]);
    }
    if (type == "radio") {
      setForm((prev) => ({ ...prev, [name]: value, gender: value }));
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //----------- submit form -------
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    setData([...data, { ...form, id: id, hobby: hobby }]);
    alert("Saved!!");
    e.target.reset();
  };

  // -------- form reset ------
  const handleReset = (e) => {
    setForm("");
  };

  // ------ add Data -----------
  const handleAdd = () => {
    dispatch(addAllData(data));
  };

  // --------- delete data -----------
  const handleDelete = (Id) => {
    dispatch(deleteData(Id, allData));
    setData("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <AddTasks
        {...form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />

      {/* --------- Class Name ------- */}
      <table className={style.table}>
        <thead>
          <tr className={style.addTr}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className={style.addButton} onClick={handleAdd}>
                Add
              </button>
            </td>
          </tr>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Semester</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        {allData &&
          allData.map((el) => (
            <Tables key={id} {...el} handleDelete={handleDelete} />
          ))}
      </table>
    </div>
  );
};

export default DashBoard;
