export function SelectFilter({ filter }) {
  return (
    <select className="select select-bordered select-primary">
      {filter.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
}
