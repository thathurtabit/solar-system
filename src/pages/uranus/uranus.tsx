import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Uranus = () => {
  const { smoothScrollFromAnchor } = useSmoothScroll();
  const { sectionInFocus, setSectionInFocus } = useWaypoints();

  return (
    <>
      <Waypoint
        onEnter={() => {
          setSectionInFocus("page-cover");
        }}
        topOffset={WAYPOINTS_OFFSET}
        bottomOffset={WAYPOINTS_OFFSET}
      >
        <div
          id="page-cover"
          className={`page page--uranus sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Uranus</h1>
          <h2>The Ice Giant</h2>

          <a
            href="#page-info"
            onClick={smoothScrollFromAnchor}
            className="btn-scroll btn-scroll--down"
          >
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => {
          setSectionInFocus("page-info");
        }}
        topOffset={WAYPOINTS_OFFSET}
        bottomOffset={WAYPOINTS_OFFSET}
      >
        <div
          id="page-info"
          className={`page-info page-info--uranus sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Uranus</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>51,118 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>30,687 days (84.0 years)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>8.68 × 10^25 kg (15 Earths)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Effective Temp:</dt>
                <dd>-216 &deg;C</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered:</dt>
                <dd>March 13th 1781</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered by:</dt>
                <dd>William Herschel</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>
                  Uranus was officially discovered by Sir William Herschel in
                  1781
                </li>
                <li>Uranus is only visible via telescope</li>
                <li>
                  Uranus turns on its axis once every 17 hours, 14 minutes
                </li>
                <li>Uranus is often referred to as an "ice giant" planet</li>
                <li>
                  Uranus hits the coldest temperatures of any planet, with a
                  minimum atmospheric temperature of -224 &deg;C.
                </li>
              </ul>

              <p className="cite-p">
                <cite>
                  -{" "}
                  <a
                    href="http://space-facts.com/"
                    title="Info: Space Facts"
                    target="_blank"
                    className="btn-slide-bg"
                  >
                    More Facts
                  </a>
                </cite>{" "}
              </p>
              <p className="cite-p">
                <cite>
                  -{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Uranus"
                    title="Wiki"
                    target="_blank"
                    className="btn-slide-bg"
                  >
                    Further Reading
                  </a>
                </cite>{" "}
              </p>
            </div>
          </div>

          <div className="page-col page--col2">
            <div className="page--animation">
              <div className="page--animation__planet">
                <h4>Uranus</h4>
                <img src="/images/img-uranus-300x.png" alt="Uranus" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>Miranda</li>
                  <li>Ariel</li>
                  <li>Umbriel</li>
                  <li>Titania</li>
                  <li>Oberon</li>
                  <li>Puck</li>
                  <li>Belinda</li>
                  <li>Desdemona</li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Moons_of_Uranus"
                      target="_blank"
                    >
                      + 19 others
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                Uranus is tipped over on its side with an axial tilt of 98
                degrees. It is often described as "rolling around the Sun on its
                side."
              </p>
            </div>
          </div>

          <a
            href="#page-cover"
            onClick={smoothScrollFromAnchor}
            className="btn-scroll btn-scroll--up"
          >
            <span className="sr-only">Scroll up</span>
          </a>

          <Link to="/neptune" className="btn-next">
            <span>
              <strong>Visit:</strong> Neptune
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
