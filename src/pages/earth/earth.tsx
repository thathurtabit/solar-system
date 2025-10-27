import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Earth = () => {
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
          className={`page page--earth sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Earth</h1>
          <h2>You are here</h2>

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
              <h1>Earth</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>12,756 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Polar Diameter:</dt>
                <dd>12,714 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Distance:</dt>
                <dd>149,598,262 km (1 AU)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>365.26 days</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>5.97 x 10^24 kg</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Surface Temp:</dt>
                <dd>-88 to 58&deg;C</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>
                  The Earth’s rotation is gradually slowing; at approximately 17
                  milliseconds per hundred years
                </li>
                <li>
                  Earth has a powerful magnetic field due to its nickel-iron
                  core, this helps protect us from solar wind
                </li>
                <li>The Earth is the densest planet in the Solar System</li>
                <li>
                  The Earth's only natural satellite, The Moon, is slowly
                  drifting further away.
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
                    href="https://en.wikipedia.org/wiki/Earth"
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
                <h4>Earth</h4>
                <img src="/images/img-earth-300x.png" alt="Earth" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>The Moon</li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                Earth's atmosphere and oceans were formed by volcanic activity
                and outgassing that included water vapor. The origin of the
                world's oceans was condensation augmented by water and ice
                delivered by asteroids, protoplanets, and comets.
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

          <Link to="/mars" className="btn-next">
            <span>
              <strong>Visit:</strong> Mars
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
