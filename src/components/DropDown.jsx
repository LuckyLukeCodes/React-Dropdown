import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import DropDownItem from "./DropDownItem";

const dropdownData = [
  { text: "Darth Vadar", hoverColor: "hover:text-[#ff0000]" },
  { text: "Luke Skywalker", hoverColor: "hover:text-[#2E67F8]" },
];

const DropDown = () => {
  return (
    <div className="hover:border-animation group relative flex w-[25%] justify-center overflow-hidden rounded-2xl bg-black p-1 text-white">
      <div className="group z-10 flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-black p-1 hover:gap-2">
        <div className="flex w-full items-center justify-between rounded-xl border-t-2 border-t-slate-700 bg-[#1E2229] p-3 text-lg font-semibold text-[var(--text-color)]">
          Select Favorite
          <div className="cursor-pointer text-[var(--text-color)] group-hover:text-[#3b73f6]">
            <IoCaretUp />
            <IoCaretDown />
          </div>
        </div>
        <div className="smooth flex h-[0px] w-full flex-col gap-3 text-lg font-bold group-hover:h-32">
          {dropdownData.map((data) => (
            <DropDownItem
              key={data.text}
              text={data.text}
              hoverColor={data.hoverColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
