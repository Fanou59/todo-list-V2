import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: uuidv4(), name: action.payload, checked: false }];
    case "TOGGLE_ITEM":
      return state.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default reducer;
