export function ListItems({ items, handleChecked, handleDelete, handleEdit }) {
  if (!items || !Array.isArray(items)) {
    return null; // ou un message d'erreur ou un élément vide
  }
  return (
    <ul>
      {items.map((item) => (
        <div key={item.id} className="flex mb-2 gap-2 items-center">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={handleChecked(item.id)}
          />
          <li className={item.checked ? "line-through" : ""} key={item.id}>
            {item.name}
          </li>
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-error btn-xs"
          >
            Delete
          </button>
          <button className="btn btn-warning btn-xs">Edit</button>
        </div>
      ))}
    </ul>
  );
}
