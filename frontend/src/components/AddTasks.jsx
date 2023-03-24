import React from "react";
import style from "../css/addtask.module.css";

const AddTasks = (props) => {
  const {
    first_name,
    last_name,
    semester,
    handleChange,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div className={style.mainDiv}>
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
          <button type="button" onClick={(e) => handleReset(e)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTasks;
