import { useState, useRef, useEffect } from "react";
import "./App.css";
import MainContent from "./MainContent";
import SideComponent from "./SideComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "My files", path: "/my-files" },
    { title: "Recent files", path: "/recent" },
    { title: "Shared files", path: "/shared" },
    { title: "File request", path: "/requests" },
    { title: "Trash", path: "/trash" },
  ];

  const dropdownItems = [
    "Create Folder",
    "Upload Files",
    "Upload Folder",
    "Create File",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <button className="gradient-button"></button>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.title} className="nav-item">
              <a href={item.path} className="nav-link">
                <div className="nav-icon"></div>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="separator"></div>

        <div className="dropdown" ref={dropdownRef}>
          <button
            className="create-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Create New</span>
            <div className="square-container">
              <div className="plus-sign"></div>
            </div>
          </button>

          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            {dropdownItems.map((item) => (
              <div key={item} className="dropdown-item">
                <div className="dropdown-icon"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <MainContent />
      <SideComponent />

      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-icon"></div>
      </button>
    </>
  );
};
//-

export default App;
