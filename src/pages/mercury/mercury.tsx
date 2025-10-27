import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Mercury = () => {
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
          className={`page page--mercury sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Mercury</h1>
          <h2>The smallest planet in the Solar System</h2>

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
          className={`page-info page-info--mercury sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Mercury</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>First Record:</dt>
                <dd>14th Century BC</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered by:</dt>
                <dd>Unknown</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Diameter:</dt>
                <dd>4,879 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>3.30 x 10^23 kg (5.5% Earth)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Surface Temp:</dt>
                <dd>-173 to 427&deg;C</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>Mercury does not have any moons or rings</li>
                <li>
                  Your weight on Mercury would be 38% of your weight on Earth
                </li>
                <li>A day on the surface of Mercury lasts 176 Earth days</li>
                <li>A year on Mercury takes 88 Earth days</li>
                <li>
                  Mercury has a diameter of 4,879 km, making it the smallest
                  planet
                </li>
                <li>It’s not known who discovered Mercury.</li>
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
                    href="https://en.wikipedia.org/wiki/Mercury_(planet)"
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
                <h4>Mercury</h4>
                <img src="/images/img-mercury-300x.png" alt="Mercury" />
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
                Due to its proximity to the Sun, Mercury is only visible to us
                13 times every century. The event is called a transit.
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

          <Link to="/venus" className="btn-next">
            <span>
              <strong>Visit:</strong> Venus
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
