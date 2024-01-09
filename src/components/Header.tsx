import { Link, NavLink } from "react-router-dom";
import Logo from "assets/shared/logo.svg";
import Hamburger from "assets/shared/icon-hamburger.svg";
import Close from "assets/shared/icon-close.svg";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (event: any) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setMenuOpen(false);
        }
      };
      document.body.addEventListener("click", handleClickOutside);

      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  return (
    <header className="relative flex items-center justify-between w-screen bg-transparent p-5 h-28 z-50 mb-10 xl:px-20">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      <nav
        ref={dropdownRef}
        className={`bg-transparent backdrop-blur-md flex flex-col absolute right-0 transition-all ease-in w-72 z-50 text-white text-xl md:flex-row md:relative md:justify-end md:items-center lg:w-full ${
          windowSize
            ? isMenuOpen
              ? "opacity-100 top-28"
              : "opacity-0 -top-96 pointer-events-none"
            : ""
        }`}
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "opacity-50 border-b-2 border-white"
              : "border-b-2 border-transparent hover:border-white"
          }
        >
          <button className="flex gap-2 items-center p-5">
            <p className="md:hidden">00</p> Home
          </button>
        </NavLink>

        <NavLink
          to={"/destination"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "opacity-50 border-b-2 border-white"
              : "border-b-2 border-transparent hover:border-white"
          }
        >
          <button className="flex gap-2 items-center p-5">
            <p className="md:hidden">01</p> Destination
          </button>
        </NavLink>

        <NavLink
          to={"/crew"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "opacity-50 border-b-2 border-white"
              : "border-b-2 border-transparent hover:border-white"
          }
        >
          <button className="flex gap-2 items-center p-5">
            <p className="md:hidden">02</p> Crew
          </button>
        </NavLink>

        <NavLink
          to={"/technology"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "opacity-50 border-b-2 border-white"
              : "border-b-2 border-transparent hover:border-white"
          }
        >
          <button className="flex gap-2 items-center p-5">
            <p className="md:hidden">03</p> Technology
          </button>
        </NavLink>
      </nav>

      {windowSize && (
        <div className="cursor-pointer" ref={dropdownRef}>
          {isMenuOpen ? (
            <img
              src={Close}
              alt="Close menu"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <img src={Hamburger} alt="Menu" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      )}
    </header>
  );
}
