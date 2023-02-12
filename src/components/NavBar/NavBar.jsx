import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav>
      <div className="Header">
        <div className="Logo">Adelphi</div>
        <div className="Menu" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </div>
      </div>
      {isOpen && (
        <div className="Navigation">
          <Link to="/accounts" className="NavigationLink">
            Accounts
          </Link>
          <Link to="/accountowners" className="NavigationLink">
            Account owners
          </Link>
        </div>
      )}
    </nav>
  );
};
