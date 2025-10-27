import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Jupiter = () => {
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
          className={`page page--jupiter sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Jupiter</h1>
          <h2>The Solar System's Largest Planet</h2>

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
          className={`page-info page-info--earth sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Jupiter</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>142,984 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Distance:</dt>
                <dd>778,340,821 km (5.20 AU)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>4,333 days (11.9 years)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>1.90 × 10^27 kg (318 Earths)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Effective Temp:</dt>
                <dd>-148 &deg;C</dd>
              </dl>

              <dl className="profile--dl">
                <dt>First Recorded:</dt>
                <dd>7th or 8th century BC</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>
                  Jupiter has the shortest day of all the planets at just under
                  10 hours
                </li>
                <li>Jupiter orbits the Sun once every 11.8 Earth years</li>
                <li>
                  Jupiter has a thin ring system, made of dust particles from
                  comet and asteroid impacts
                </li>
                <li>90% of the atmosphere of Jupiter is made of hydrogen</li>
                <li>
                  Jupiter's moon Ganymede is the largest moon in the Solar
                  System; it's larger than the planet Mercury.
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
                    href="https://en.wikipedia.org/wiki/Jupiter"
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
                <h4>Jupiter</h4>
                <img src="/images/img-jupiter-300x.png" alt="Jupiter" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>Io</li>
                  <li>Europa</li>
                  <li>Ganymede</li>
                  <li>Callisto</li>
                  <li>Metis</li>
                  <li>Adrastea</li>
                  <li>Amalthea</li>
                  <li>Thebe</li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Moons_of_Jupiter"
                      target="_blank"
                    >
                      + 59 others
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                Jupiter's famous Great Red Spot is actually a huge storm, raging
                for over 350 years. It is so large 3 Earths could fit inside it{" "}
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

          <Link to="/saturn" className="btn-next">
            <span>
              <strong>Visit:</strong> Saturn
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
