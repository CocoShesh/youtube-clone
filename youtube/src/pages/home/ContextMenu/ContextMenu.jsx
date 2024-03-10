import React from "react";
import { AiOutlineDeleteRow } from "react-icons/ai";
const ContextMenu = ({ handleDeleteVideos, itemId, updateModal }) => {
  return (
    <>
      <section className="w-[140px] h-[90px] bg-white   rounded-lg border-2 border-slate-500 flex flex-col  ">
        <button
          onClick={() => {
            handleDeleteVideos(itemId);
            console.log("the id is: ", itemId);
          }}
          className="h-10 flex items-center justify-between pr-3 text-sm font-bold font-sans text-left pl-3 hover:rounded-t-lg hover:bg-[#f4f4f5] "
        >
          Delete <AiOutlineDeleteRow />
        </button>

        <button
          onClick={() => updateModal(itemId)}
          className="h-10 flex items-center justify-between pr-3 text-sm font-bold font-sans text-left pl-3 hover:rounded-t-lg hover:bg-[#f4f4f5] "
        >
          Update <AiOutlineDeleteRow />
        </button>
      </section>
    </>
  );
};

export default ContextMenu;
