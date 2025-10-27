import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Mars = () => {
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
          className={`page page--mars sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Mars</h1>
          <h2>The red planet</h2>

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
          className={`page-info page-info--mars sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Mars</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>6,792 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Distance:</dt>
                <dd>227,943,824 km (1.52 AU)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>687 days (1.9 years)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>6.42 x 10^23 kg (10.7% Earth)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Surface Temp:</dt>
                <dd>-153 to 20&deg;C</dd>
              </dl>

              <dl className="profile--dl">
                <dt>First Recorded:</dt>
                <dd>2nd millennium BC</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>Mars and Earth have approximately the same landmass</li>
                <li>
                  Mars is home to the tallest mountain in the solar system:
                  Olympus Mons
                </li>
                <li>Mars has the largest dust storms in the solar system</li>
                <li>
                  On Mars the Sun appears about half the size as it does on
                  Earth
                </li>
                <li>Pieces of Mars have fallen to Earth.</li>
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
                    href="https://en.wikipedia.org/wiki/Mars"
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
                <h4>Mars</h4>
                <img src="/images/img-mars-300x.png" alt="Mars" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>Phobos</li>
                  <li>Deimos</li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                In the next 20-40 million years Mars' largest moon Phobos will
                be torn apart by gravitational forces leading to the creation of
                a ring that could last up to 100 million years.
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

          <Link to="/jupiter" className="btn-next">
            <span>
              <strong>Visit:</strong> Jupiter
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
