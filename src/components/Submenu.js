import React, { useState } from "react";
import { Link } from "react-router-dom";

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div
        onClick={item.subNav && showSubnav}
        className="flex justify-between cursor-pointer text-xl p-4 hover:bg-slate-100 hover:border-l-4 text-[#9e0064] font-medium hover:border-[#9e0064]"
      >
        <div>
          <h1>{item.title}</h1>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="flex text-lg border-2 p-2 transition-all ease-in-out duration-300 px-6 hover:bg-[#9e0064] hover:text-white"
            >
              {item.icon}
              <h1>{item.title}</h1>
            </Link>
          );
        })}
    </>
  );
};

export default Submenu;
