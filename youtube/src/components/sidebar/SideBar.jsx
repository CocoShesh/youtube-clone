import React, { useState } from "react";
import { list, list2, list3, listIconSidebar } from "./data";
import { GoChevronRight } from "react-icons/go";
import Subcriptions from "./Subcriptions";
import Explore from "./Explore";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../contexts/SidebarContext";
const SideBar = () => {
  const { closeSideBar, handleCloseSideBar } = useSidebarContext();
  const [showMore, setShowMore] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <>
      {closeSideBar ? (
        <aside
          className={`w-[250px] fixed bg-white z-10  h-screen  mt-14 max-md:mt-14 pt-5 pb-20 text-sm overflow-auto  ${
            closeSideBar ? "md:z-10 visible" : "md:z-10 visible"
          }`}
        >
          {list.map(item => {
            return (
              <>
                {item.external ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <section
                      key={item.id}
                      className={` flex items-center ml-2 mr-10  pl-5 rounded-xl gap-5 mb-1 h-10 hover:bg-[#e6e6e6]  ${
                        active === item.id ? "bg-[#e6e6e6]" : ""
                      }`}
                      onClick={() => setActive(item.id)}
                    >
                      <img
                        src={active === item.id ? item.dark : item.icon}
                        alt={item.name}
                      />
                      <span className="pl-1">{item.name}</span>
                    </section>
                  </a>
                ) : (
                  <Link key={item.id} to={item.link}>
                    <section
                      className={` flex items-center ml-2 mr-10  pl-5 rounded-xl gap-5 mb-1 h-10 hover:bg-[#e6e6e6]  ${
                        active === item.id ? "bg-[#e6e6e6]" : ""
                      }`}
                      onClick={() => setActive(item.id)}
                    >
                      <img
                        src={active === item.id ? item.dark : item.icon}
                        alt={item.name}
                      />
                      <span className="pl-1">{item.name}</span>
                    </section>
                  </Link>
                )}
              </>
            );
          })}
          <div className="w-full bg-[#e5e5e5] mt-3 h-[1px]"> </div>
          <span className="flex items-center text-lg pl-6 py-3 ">
            You <GoChevronRight />
          </span>
          {list2.map(item => {
            return (
              <Link key={item.id} to={item.link}>
                <section key={item.id} className="flex px-7 gap-5 pb-4">
                  <img src={item.icon} alt={item.name} />
                  <span className="pl-1"> {item.name}</span>
                </section>
              </Link>
            );
          })}
          <span
            className={`flex items-center gap-3 px-7 cursor-pointer ${
              showMore ? "hidden" : "block"
            }`}
            onClick={() => setShowMore(true)}
          >
            <img src="/arrow-down.svg" alt="arrow-down" />
            <span className="pl-2">Show more</span>
          </span>
          {showMore && (
            <section>
              {list3.map(item => {
                return (
                  <section key={item.id} className="flex px-7 gap-5 pb-4">
                    <img src={item.icon} alt={item.name} />
                    <span className="pl-1">{item.name}</span>
                  </section>
                );
              })}
              <span
                className="flex items-center gap-3 px-7 cursor-pointer"
                onClick={() => setShowMore(false)}
              >
                <img src="/arrow-up.svg" alt="arrow-up" />
                <span className="pl-2">Show less</span>
              </span>
            </section>
          )}

          <Subcriptions />
          <Explore />
        </aside>
      ) : (
        <section className="w-full max-h-screen fixed ">
          <aside className="mt-20 max-md:hidden bg-white w-14   z-10  max-sm:hidden max-xs:hidden ">
            {listIconSidebar.map(item => {
              return (
                <Link key={item.id} to={item.link}>
                  <section
                    className={` flex flex-col items-center ml-1 mr-10  pt-2 relative  w-[75px]  overflow-hidden  text-nowrap rounded-xl gap-3 mb-1 h-16 hover:bg-[#e6e6e6]  ${
                      active === item.id ? "bg-[#e6e6e6]" : ""
                    }`}
                    onClick={() => setActive(item.id)}
                  >
                    <img
                      src={active === item.id ? item.dark : item.icon}
                      alt={item.name}
                      className="h-6"
                    />
                    <span className="text-[10px]">{item.name}</span>
                  </section>
                </Link>
              );
            })}
          </aside>
        </section>
      )}
      {/* displaying in tablet and mobile */}
      {/* {closeSideBar && (
        <>
          <aside
            className={`w-[250px] fixed bg-white z-40    h-screen  lg:hidden   pb-20 text-sm overflow-auto  ${
              closeSideBar ? "max-sm:visible " : ""
            }`}
          >
            {" "}
            <section className="flex items-center gap-5 p-7">
              <img src="/menu.svg" alt="" onClick={handleCloseSideBar} />
              <img src="/yt-logo.svg" alt="" className="w-24" />
            </section>
            {list.map(item => {
              return (
                <>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <section
                        key={item.id}
                        className={` flex items-center ml-2 mr-10  pl-5 rounded-xl gap-5 mb-1 h-10 hover:bg-[#e6e6e6]  ${
                          active === item.id ? "bg-[#e6e6e6]" : ""
                        }`}
                        onClick={() => setActive(item.id)}
                      >
                        <img
                          src={active === item.id ? item.dark : item.icon}
                          alt={item.name}
                        />
                        <span className="pl-1">{item.name}</span>
                      </section>
                    </a>
                  ) : (
                    <Link key={item.id} to={item.link}>
                      <section
                        className={` flex items-center ml-2 mr-10  pl-5 rounded-xl gap-5 mb-1 h-10 hover:bg-[#e6e6e6]  ${
                          active === item.id ? "bg-[#e6e6e6]" : ""
                        }`}
                        onClick={() => setActive(item.id)}
                      >
                        <img
                          src={active === item.id ? item.dark : item.icon}
                          alt={item.name}
                        />
                        <span className="pl-1">{item.name}</span>
                      </section>
                    </Link>
                  )}
                </>
              );
            })}
            <div className="w-full bg-[#e5e5e5] mt-3 h-[1px]"> </div>
            <span className="flex items-center text-lg pl-6 py-3 ">
              You <GoChevronRight />
            </span>
            {list2.map(item => {
              return (
                <Link key={item.id} to={item.link}>
                  <section key={item.id} className="flex px-7 gap-5 pb-4">
                    <img src={item.icon} alt={item.name} />
                    <span className="pl-1"> {item.name}</span>
                  </section>
                </Link>
              );
            })}
            <span
              className={`flex items-center gap-3 px-7 cursor-pointer ${
                showMore ? "hidden" : "block"
              }`}
              onClick={() => setShowMore(true)}
            >
              <img src="/arrow-down.svg" alt="arrow-down" />
              <span className="pl-2">Show more</span>
            </span>
            {showMore && (
              <section>
                {list3.map(item => {
                  return (
                    <section key={item.id} className="flex px-7 gap-5 pb-4">
                      <img src={item.icon} alt={item.name} />
                      <span className="pl-1">{item.name}</span>
                    </section>
                  );
                })}
                <span
                  className="flex items-center gap-3 px-7 cursor-pointer"
                  onClick={() => setShowMore(false)}
                >
                  <img src="/arrow-up.svg" alt="arrow-up" />
                  <span className="pl-2">Show less</span>
                </span>
              </section>
            )}
            <Subcriptions />
            <Explore />
          </aside>
        </>
      )} */}
    </>
  );
};

export default SideBar;
