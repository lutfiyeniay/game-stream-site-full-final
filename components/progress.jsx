export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 h-4 rounded">
      <div className="bg-blue-500 h-4 rounded" style={{ width: `${value}%` }}></div>
    </div>
  );
}
