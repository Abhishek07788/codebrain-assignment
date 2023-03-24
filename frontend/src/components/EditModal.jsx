import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../css/edit.module.css";
import { editData } from "../redux/action";

const EditModal = (props) => {
  const { allData } = useSelector((store) => store.task);
  console.log("allData: ", allData);
  const { setShowModal, showModal, id } = props;

  const initialState = {
    first_name: props.first_name,
    last_name: props.last_name,
    gender: "",
    semester: props.semester,
    hobby: [],
  };
  const [form, setForm] = useState(initialState);
  const [hobby, setHobby] = useState([]);
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
    setShowModal(false);
    dispatch(editData(id, allData, { ...form, hobby: hobby }));
  };

  const { first_name, last_name, semester } = form;
  return (
    <div
      className={style.modal}
      style={{ display: showModal ? "block" : "none" }}
    >
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label>First Name:</label>
          <input
            required
            name="first_name"
            value={first_name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            required
            name="last_name"
            value={last_name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label>Gander:</label>
          <input
            value={"Male"}
            onChange={handleChange}
            type="radio"
            style={{ marginLeft: "15px" }}
          />
          <label>Male</label>
          <input value={"Female"} onChange={handleChange} type="radio" />
          <label>Female</label>
        </div>

        <div>
          <label>Semester:</label>
          <input
            required
            name="semester"
            value={semester}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Hobby:</label>
          <input
            value={"Cricket"}
            onChange={handleChange}
            type="checkbox"
            style={{ marginLeft: "15px" }}
          />
          <label>Cricket</label>
          <input value={"Coding"} onChange={handleChange} type="checkbox" />
          <label>Coding</label>
          <input value={"Travelling"} onChange={handleChange} type="checkbox" />
          <label>Travelling</label>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
