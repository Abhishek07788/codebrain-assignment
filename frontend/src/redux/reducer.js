import { addData, delete_data, getData, updateData } from "./type.js";

const initialState = {
  allData: [],
};

export const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addData: {
      return { ...state, allData: payload };
    }

    case delete_data: {
      return { ...state, allData: payload };
    }

    case updateData: {
      return { ...state, allData: payload };
    }
    default:
      return state;
  }
};
