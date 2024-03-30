import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import DropDownItem from "./DropDownItem";

const dropdownData = [{ text: "Darth Vadar" }, { text: "Luke Skywalker" }];

const DropDown = () => {
  return (
    <div className="hover:box group relative flex w-[25%] justify-center overflow-hidden rounded-xl bg-black p-1 text-white">
      <div className="group z-10 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-black p-1">
        <div className="flex w-full items-center justify-between rounded-xl border-t-2 border-t-slate-700 bg-[#1E2229] p-4 font-semibold text-[var(--text-color)]">
          Select Favorite
          <div className="cursor-pointer text-[var(--text-color)] group-hover:text-[#3b73f6]">
            <IoCaretUp />
            <IoCaretDown />
          </div>
        </div>
        <div className="hidden w-full flex-col gap-3 text-lg font-bold group-hover:flex group-hover:transition-all group-hover:delay-1000 group-hover:ease-linear">
          {dropdownData.map((data) => (
            <DropDownItem key={data.text} text={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
