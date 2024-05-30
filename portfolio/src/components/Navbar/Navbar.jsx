import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <main className={`nav--container ${scroll ? "scrolled":""}`} id="nav--continer">
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </main>
    </div>
  );
};

export default Navbar;
