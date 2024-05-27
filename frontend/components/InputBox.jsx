export const InputBox = ({ label, placeholder ,onChange}) => {
  return (
    <div className="m-4">
      <div className="text-slate-700 text-lg font-semibold text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 h-10 border rounded border-slate-200 "
        onChange={onChange}
      ></input>
    </div>
  );
};
