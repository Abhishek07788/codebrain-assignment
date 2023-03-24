import { addData, delete_data, getData, updateData } from "./type.js";

export const addAllData = (data) => async (dispatch) => {
  try {
    dispatch({ type: addData, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const deleteData = (Id, data) => async (dispatch) => {
  try {
    const filtered = data.filter((el) => el.id !== Id);
    dispatch({ type: delete_data, payload: filtered });
  } catch (e) {
    console.log(e);
  }
};

export const editData = (Id, data, edit) => async (dispatch) => {
    console.log('Id, data, edit: ', Id, data, edit);
  try {
    const filtered = data.map((el) => {
      return Id == el.id ? { ...el, ...edit } : el;
    });
    dispatch({ type: updateData, payload: filtered });
  } catch (e) {
    console.log(e);
  }
};
