import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar
  const [closeSideBar, setCloseSideBar] = useState(true);
  const handleCloseSideBar = () => {
    setCloseSideBar(prevCloseSideBar => !prevCloseSideBar);
  };

  // open create new video modal
  const [AddVideoModal, setAddVideoModal] = useState(false);
  const handleModal = () => {
    setAddVideoModal(prev => !prev);
  };

  // Open update video modal
  const [updateVideo, setUpdateVideo] = useState(false);
  const [data, setData] = useState([]);
  const updateModal = item => {
    setUpdateVideo(prev => !prev);
    setData(item);
  };

  return (
    <SidebarContext.Provider
      value={{
        closeSideBar,
        handleCloseSideBar,
        AddVideoModal,
        handleModal,
        // updateVideo
        updateVideo,
        updateModal,
        data,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};

export { SidebarProvider, useSidebarContext };
