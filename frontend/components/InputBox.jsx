export const InputBox = ({ label, placeholder }) => {
  return (
    <div>
      <div className="text-slate-700 font-semibold text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200 "
      ></input>
    </div>
  );
};
