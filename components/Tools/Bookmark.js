import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
export default function Bookmark({handleClick,isFilled,id}) {
  let BookmarktIcon = isFilled ? <FaRegBookmark /> : <FaBookmark />;
  return (
    <div >
      <i
        className=" text-xl text-orange-500 cursor-pointer transition-all hover:text-opacity-90"
        onClick={handleClick}
      >
        {BookmarktIcon}
      </i>
    </div>
  );
}
