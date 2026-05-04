import { Link, NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef } from "react";
import "./header.css";
import { useContext, useState } from "react";
import { themeContext } from "../../context/ThemeContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Header = () => {
  const sidbarref = useRef(null)
  const burgerRef = useRef(null)

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Connect", path: "/connect" },
  ];
  const { toggle, theme } = useContext(themeContext);
  const [show,setshow] = useState(false)

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      sidbarref.current &&
      !sidbarref.current.contains(e.target) &&
      !burgerRef.current.contains(e.target)
    ) {
      setshow(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])
  return (
    <div className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span>M</span>
            Mohamed Adel
          </Link>
        </div>
        {/* Links */}
        <div ref={sidbarref} className={`icon_links ${show?"show":""}`}>
          <div className="close_icon" onClick={()=>setshow(!show)}>
            <IoIosCloseCircleOutline />
          </div>
          <ul className="links">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
              onClick={()=>setshow(false)}
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
          {/* Mode Icon */}
          <div className="mode" onClick={toggle}>
          {theme === "dark" ? <IoSunnyOutline /> : <IoMoon />}
        </div>
        </div>
        <div ref={burgerRef} className="burgerIcon" onClick={()=>setshow(!show)}>
            <GiHamburgerMenu/>
        </div>
      </div>
    </div>
  );
};

export default Header;
