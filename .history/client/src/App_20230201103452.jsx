
import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        Sidebar
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        Navbar
        <Routes>
          <Route path='/' element={<Home />} />
          <Route />
        </Routes>

      </div>
    </div>
  );
}
