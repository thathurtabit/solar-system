import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Venus = () => {
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
          className={`page page--venus sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Venus</h1>
          <h2>Earth's 'sister planet'</h2>

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
          className={`page-info page-info--venus sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Venus</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>First Record:</dt>
                <dd>17th Century BC</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered by:</dt>
                <dd>Babylonian astronomers</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Diameter:</dt>
                <dd>12,104 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>4.87 x 10^24 kg (81.5% Earth)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Surface Temp:</dt>
                <dd>462&deg;C</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>A year on Venus takes 225 Earth days</li>
                <li>
                  Venus is nearly as big as the Earth with a diameter of 12,104
                  km
                </li>
                <li>
                  A day on the surface of Venus (solar day) would appear to take
                  117 Earth days
                </li>
                <li>The surface temperature on Venus can reach 471&deg;C.</li>
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
                    href="https://en.wikipedia.org/wiki/Venus"
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
                <h4>Venus</h4>
                <img src="/images/img-venus-300x.png" alt="Venus" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>None</li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                The surface of the planet is obscured by an opaque layer of
                clouds made up of sulphuric acid.
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

          <Link to="/earth" className="btn-next">
            <span>
              <strong>Visit:</strong> Earth
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
