export function Switch({ onCheckedChange }) {
  return (
    <input
      type="checkbox"
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="scale-125"
    />
  );
}
