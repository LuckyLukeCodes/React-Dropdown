import React from "react";

const DropDownItem = ({ text }) => {
  return (
    <span className="cursor-pointer rounded-xl bg-slate-600/10 p-4 text-slate-400 hover:bg-slate-600/20 hover:text-[#3B73F6]">
      {text}
    </span>
  );
};

export default DropDownItem;
