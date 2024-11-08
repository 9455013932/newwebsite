import { useState } from "react";
import "./App.css";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="bg-black text-white">
        <div className="flex p-4 justify-end">
          {/* Desktop Menu */}
          <ul className="space-x-8 mx-24 sm:flex hidden">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact Us</li>
          </ul>

          {/* Mobile Toggle Button */}
          <button className="flex sm:hidden" onClick={toggleMenu}>
            {isOpen ? <RxCross1 /> : <RxDragHandleHorizontal />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute bg-black w-64 text-center h-screen transition-all ease-in-out duration-300 right-0 ${isOpen?"translate-x-0":"translate-x-full"}`}>
          <ul className="right-0 p-2 m-4">
            <li className="p-2 ">Home</li>
            <li className="p-2 ">About</li>
            <li className="p-2 ">Project</li>
            <li  className="p-2 ">Contact Us</li> 
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
