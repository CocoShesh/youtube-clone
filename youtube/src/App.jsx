// import MainComponent from "./components/MainComponent";
import { useState } from "react";

import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/SideBar";
import Shorts from "./pages/shorts/Shorts";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import { MainChannel } from "./pages/channel/MainChannel";
import { Home as Account } from "./pages/channel/pages/Home";
import Playlists from "./pages/channel/pages/Playlists";
import { SidebarProvider } from "./contexts/SidebarContext";
function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Header />

        <section className="flex  font-roboto">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
          </Routes>
        </section>
        <Routes>
          <Route path="/channel" element={<MainChannel />}>
            <Route path="/channel" element={<Account />} />
            <Route path="playlists" element={<Playlists />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
