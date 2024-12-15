import React from "react";
import { IoAddOutline } from "react-icons/io5";

const Sidebar = ({ communities, toggleCommunity, onCreateCommunity }) => {
  return (
    <aside className="flex flex-col items-start border-r-2 h-screen shadow-lg pl-5 pr-2">
      <button
        className="flex flex-row items-center justify-between px-10 py-2 w-full mb-8 mt-5 bg-blue-100 rounded-lg"
        onClick={onCreateCommunity} // Use onCreateCommunity callback
      >
        <p>Create Group</p>
        <div className="bg-blue-200 w-6 h-6 flex items-center justify-center rounded-md">
          <IoAddOutline />
        </div>
      </button>
      {communities.map((community) => (
        <div
          key={community.id}
          onClick={() => toggleCommunity(community.id)} // Use toggleCommunity callback
          className={`flex flex-row items-center w-full mb-2 py-2 px-10 cursor-pointer ${
            community.selected
              ? "bg-blue-600 rounded-2xl text-cyan-50"
              : "hover:bg-blue-50 hover:rounded-2xl"
          }`}
        >
          {community.id !== 0 && (
            <img
              src={community.dp}
              alt={`${community.name} dp`}
              className={`w-14 pr-5 ${
                community.selected ? "rounded-s-3xl" : ""
              }`}
            />
          )}
          <p>{community.name}</p>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
