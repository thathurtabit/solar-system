import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Sun = () => {
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
          className={`page page--sun sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Sun</h1>
          <h2>The centre of the solar system</h2>

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
          className={`page-info page-info--sun sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Sun</h1>
              <h2>Star Profile:</h2>

              <dl className="profile--dl">
                <dt>Age:</dt>
                <dd>4.6 Billion Years</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Type:</dt>
                <dd>Yellow Dwarf (G2V)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Diameter:</dt>
                <dd>1,392,684 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>1.99 × 10^30 kg (333,060 Earths)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Surface Temp:</dt>
                <dd>5,500 &deg;C</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>
                  At its centre the Sun reaches temperatures of 15 million
                  &deg;C
                </li>
                <li>The Sun is 4.6 billion years old</li>
                <li>
                  The Sun is all the colours mixed together, this appears white
                  to our eyes
                </li>
                <li>
                  The Sun is mostly composed of hydrogen (70%) and Helium (28%)
                </li>
                <li>
                  The Sun is 109 times wider than the Earth and 330,000x as
                  massive.
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
                    href="https://en.wikipedia.org/wiki/Sun"
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
                <h4>Sun</h4>
                <img src="/images/img-sun-300x.png" alt="Sun" />
              </div>

              <div className="page--animation__satellites">
                <h4>Satellites</h4>
                <ul className="profile--satellites">
                  <li>Mercury</li>
                  <li>Venus</li>
                  <li>Earth</li>
                  <li>Mars</li>
                  <li>Jupiter</li>
                  <li>Saturn</li>
                  <li>Uranus</li>
                  <li>Neptune</li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                After exhausting its supply of hydrogen, the Sun will eventually
                turn into a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Red_giant"
                  target="_blank"
                >
                  red giant
                </a>
                , swelling in size until it becomes large enough to consume
                Mercury, Venus, and the Earth.
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

          <Link to="/mercury" className="btn-next">
            <span>
              <strong>Visit:</strong> Mercury
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
