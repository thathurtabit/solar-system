import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <nav className="navbar navbar-toggleable-sm fixed-top">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="navbar-toggler-bar"></span>
      </button>
      <Link className="navbar-brand nav-link" to="/" title="The Solar System">
        <h1>The Solar System</h1>
      </Link>

      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarToggler"
      >
        <ul className="navbar-nav">
          <li className="nav-item nav-sun">
            <Link className="nav-link" to="/sun" title="Sun">
              Sun
            </Link>
          </li>
          <li className="nav-item nav-mercury">
            <Link className="nav-link" to="/mercury" title="Mercury">
              Mercury
            </Link>
          </li>
          <li className="nav-item nav-venus">
            <Link className="nav-link" to="/venus" title="Venus">
              Venus
            </Link>
          </li>
          <li className="nav-item nav-earth">
            <Link className="nav-link" to="/earth" title="Earth">
              Earth
            </Link>
          </li>
          <li className="nav-item nav-mars">
            <Link className="nav-link" to="/mars" title="Mars">
              Mars
            </Link>
          </li>
          <li className="nav-item nav-jupiter">
            <Link className="nav-link" to="/jupiter" title="Jupiter">
              Jupiter
            </Link>
          </li>
          <li className="nav-item nav-saturn">
            <Link className="nav-link" to="/saturn" title="Saturn">
              Saturn
            </Link>
          </li>
          <li className="nav-item nav-uranus">
            <Link className="nav-link" to="/uranus" title="Uranus">
              Uranus
            </Link>
          </li>
          <li className="nav-item nav-neptune">
            <Link className="nav-link" to="/neptune" title="Neptune">
              Neptune
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
