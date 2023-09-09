import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MinimalistNav from "./Components/Navbar/MinimalistNav";
import Slider from "./Components/Slider";
import Game_items from "./Components/Game_items";

function Template1() {
  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <MinimalistNav />
      <div className="relative flex lg:flex-auto max-w-7xl h-1/3 mx-auto px-0 gap-2 items-center justify-center">
        <Slider />
        <div className="absolute ml-3 max-w-2xl z-10 text-slate-50">
          <h1 className="text-4xl mb-2">Your Title Goes Here</h1>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            sunt ab voluptas exercitationem laboriosam, numquam doloribus ea
            architecto. In nulla fugit facilis eos consequatur animi fuga, hic
            eligendi sunt quis!
          </h3>
        </div>
      </div>
      <Game_items />
    </div>
  );
}

export default Template1;
