export function InputAddItem({ value, onChange }) {
  return (
    <input
      className="input input-bordered input-primary w-full max-w-xs"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
