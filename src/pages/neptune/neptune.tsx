import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Neptune = () => {
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
          className={`page page--neptune sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Neptune</h1>
          <h2>Farthest planet from the Sun</h2>

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
          className={`page-info page-info--neptune sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-col page--col1">
            <div className="page--title">
              <h1>Neptune</h1>
              <h2>Planet Profile:</h2>

              <dl className="profile--dl">
                <dt>Equator Diameter:</dt>
                <dd>49,528 km</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Orbit Peroid:</dt>
                <dd>60,190 days (164.8 years)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Mass:</dt>
                <dd>1.02 × 10^26 kg (17 Earths)</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Effective Temp:</dt>
                <dd>-214 &deg;C</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered:</dt>
                <dd>September 23rd 1846</dd>
              </dl>

              <dl className="profile--dl">
                <dt>Discovered by:</dt>
                <dd>Urbain Le Verrier &amp; Johann Galle</dd>
              </dl>

              <h2>Quick Facts:</h2>

              <ul className="profile--list">
                <li>
                  Neptune is the smallest of the ice giants, but has a greater
                  mass than Uranus
                </li>
                <li>
                  Neptune appears blue because the methane absorbs the red light
                </li>
                <li>
                  Large storms whirl through its upper atmosphere, and
                  high-speed winds track around the planet at up 600 meters per
                  second
                </li>
                <li>Neptune has a very thin collection of rings</li>
                <li>
                  Neptune spins on its axis very rapidly, despite its size, the
                  clouds on its equator circle the planet every 18 hours.
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
                    href="https://en.wikipedia.org/wiki/Neptune"
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
                <h4>Neptune</h4>
                <img src="/images/img-neptune-300x.png" alt="Neptune" />
              </div>

              <div className="page--animation__satellites">
                <h4>Moons</h4>
                <ul className="profile--satellites">
                  <li>Triton</li>
                  <li>Nereid</li>
                  <li>Proteus</li>
                  <li>Despina</li>
                  <li>Larissa</li>
                  <li>Galatea</li>
                  <li>Thalassa</li>
                  <li>Naiad</li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Moons_of_Neptune"
                      target="_blank"
                    >
                      + 6 others
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="page--snippet">
              <h3>Did you know?</h3>
              <p>
                Neptune has an incredibly thick atmosphere comprised of 74%
                hydrogen, 25% helium and approximately 1% methane. Its
                atmosphere also contains icy clouds and the fastest winds
                recorded in the solar system.
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

          <Link to="/" className="btn-next">
            <span>
              <strong>Return to:</strong> Start
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
