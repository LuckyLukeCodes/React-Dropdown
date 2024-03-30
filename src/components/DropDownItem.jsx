const DropDownItem = ({ text, hoverColor }) => {
  return (
    <span
      className={`cursor-pointer rounded-xl bg-slate-600/10 p-4 text-slate-400 hover:bg-slate-600/20 ${hoverColor}`}
    >
      {text}
    </span>
  );
};

export default DropDownItem;
