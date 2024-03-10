import { BiSolidMicrophone } from "react-icons/bi";
import { useSidebarContext } from "../../contexts/SidebarContext";

const Header = () => {
  const { handleCloseSideBar, handleModal } = useSidebarContext();

  return (
    <>
      <header>
        <nav className="flex items-center fixed z-10 w-full top-0 justify-between pr-5 pl-7 py-3 bg-white max-md:px-2 ">
          <section className="flex items-center gap-5 max-sm:gap-3">
            <img
              src="/menu.svg"
              alt=""
              onClick={handleCloseSideBar}
              className="cursor-pointer"
            />
            <a href="/">
              <img
                src="/yt-logo.svg"
                alt=""
                className="w-24 max-sm:w-20 cursor-pointer"
              />
            </a>
          </section>
          <section className="relative flex items-center  max-sm:hidden  ">
            <input
              type="search"
              placeholder="Search"
              className="lg:w-[550px] md:w-[350px]   rounded-l-full h-10 border-y mr-20 border-l border-[#cccccc] pl-5"
            />
            <section className="absolute right-[80px] top-0 text-2xl pl-4 pt-2   cursor-pointer  rounded-r-full border border-[#cccccc] w-16 h-10 bg-[#f8f8f8]">
              <img src="/search.svg" alt="" />
            </section>
            <section className="text-2xl w-10 h-10 border ml-5 bg-[#f0f0f0] rounded-full flex items-center justify-center cursor-pointer">
              <BiSolidMicrophone />
            </section>
          </section>
          <section className="flex items-center gap-5 text-2xl max-sm:gap-3 ">
            <img
              src="/search.svg"
              alt=""
              className="max-sm:block h-5 cursor-pointer "
              hidden
            />
            <BiSolidMicrophone className="max-sm:block text-lg " hidden />
            <img
              src="/create.svg"
              alt=""
              className="cursor-pointer h-6"
              onClick={handleModal}
            />
            <img src="/bell.svg" alt="" className="h-6 cursor-pointer" />
            <img
              src="/profile.jpg"
              alt="profile-pic"
              className="cursor-pointer w-7 h-7 rounded-full object-cover"
            />
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
