import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Saturn = () => {
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
          className={`page page--saturn sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Saturn</h1>
          <h2>The ringed planet</h2>

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
          className={`page-info page-info--saturn sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Saturn</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>120,536 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Distance:</dt>
                <dd>1,426,666,422 km (9.54 AU)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>10,756 days (29.5 years)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>5.68 × 10^26 kg (95 Earths)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Effective Temp:</dt>
                <dd>-178 &deg;C</dd>
              </dl>

              <dl className="profile--dl">
                <dt>First Recorded:</dt>
                <dd>8th century BC</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>Saturn has the most extensive rings in the solar system</li>
                <li>Saturn is a gas giant, like Jupiter</li>
                <li>Saturn can be seen with the naked eye</li>
                <li>
                  Saturn is the flattest planet, this is due to its low density
                  and fast rotation
                </li>
                <li>Saturn is made mostly of hydrogen</li>
                <li>Saturn has 150 moons and smaller moonlets.</li>
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
                    href="https://en.wikipedia.org/wiki/Saturn"
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
              <div className="page--animation__planet saturn-ring">
                <h4>Saturn</h4>
                <img
                  src="/images/img-saturn-300x.png"
                  className="img-saturn"
                  alt="Saturn"
                />
                <span className="page--animation__planet-saturn-ring"></span>
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>Mimas</li>
                  <li>Enceladus</li>
                  <li>Tethys</li>
                  <li>Dione</li>
                  <li>Rhea</li>
                  <li>Titan</li>
                  <li>Iapetus</li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Moons_of_Saturn"
                      target="_blank"
                    >
                      + 55 others
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                Saturn's rings are made up of are billions of particles that
                range in size from tiny dust grains to to objects as large as
                mountains. These are made up of chunks of ice and rock, believed
                to have come from asteroids comets or even moons.
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

          <Link to="/uranus" className="btn-next">
            <span>
              <strong>Visit:</strong> Uranus
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
