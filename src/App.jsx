import { v4 as uuidv4 } from "uuid";
import { useState, useReducer } from "react";
import { InputAddItem } from "./components/InputAddItem";
import { ButtonAddItem } from "./components/ButtonAddItem";
// import { SelectFilter } from "./components/SelectFilter";
import { ListItems } from "./components/ListItems";
import reducer from "./components/tasksReducer";

function App() {
  const [items, dispatch] = useReducer(reducer, [
    { id: uuidv4(), name: "Initial State", checked: false },
  ]);

  const [newItem, setNewItem] = useState("");
  //const filter = ["All", "Done"];

  // Met à jour le nom de la nouvelle tâche
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  // Coche ou décoche une tâche de la liste
  const handleChecked = (id) => () => {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
  };

  // Supprime une tâche de la liste
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  // Ajoute une nouvelle tâche à la liste
  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setNewItem("");
  };

  return (
    <>
      <div className="mb-2 mt-2 ml-2 flex gap-2 items-center">
        <InputAddItem value={newItem} onChange={handleChange} />
        <ButtonAddItem
          className="btn btn-primary btn-xs"
          onClick={handleAddItem}
        >
          Add item
        </ButtonAddItem>
      </div>
      {/* <div>
        <SelectFilter filter={filter} />
      </div> */}
      <div className="ml-2">
        <ListItems
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
