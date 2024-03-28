import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props: any) {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setLoggedIn(true) : setLoggedIn(false);
    console.log("checking for token");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <>
      <div className="mainHeader">
        <Link className="logo" to="/">
          <h1>Collinear </h1>
        </Link>

        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <div className="header">
            {loggedIn ? (
              <>
                <button
                  className="authButton bg-2 clr-f"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="authButton clr-2">Log In</button>{" "}
                </Link>
                <Link to="/signup">
                  <button className="authButton bg-2 clr-f">Sign Up</button>
                </Link>{" "}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
