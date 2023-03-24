import React, { useState } from "react";
import EditModal from "./EditModal";

const Tables = (props) => {
  const { id, first_name, last_name, gender, semester, hobby, handleDelete } =
    props;

  const [showModal, setShowModal] = useState(false);

  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{gender}</td>
        <td>{semester}</td>
        <td>{hobby && hobby.join(",")}</td>
        <td>
          <button onClick={() => setShowModal(!showModal)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </td>
      </tr>
      <EditModal
        setShowModal={setShowModal}
        showModal={showModal}
        id={id}
        first_name={first_name}
        last_name={last_name}
        semester={semester}
      />
    </tbody>
  );
};

export default Tables;
