import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const Home = () => {
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
          className={`page page--home sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>
            <span>The </span>Solar System
          </h1>

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
          className={`page-info page-info--home sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <div className="page-info-content container-fluid">
            <div className="row">
              <h2 className="col-md-4 offset-md-4 text-center">
                <span>Welcome to</span> The Solar System
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4 offset-md-2 text-col">
                The Solar System formed 4.6 billion years ago from the
                gravitational collapse of a giant interstellar molecular cloud.
                The vast majority of the system's mass is in the Sun, with most
                of the remaining mass contained in Jupiter.
              </div>

              <div className="col-md-4 text-col">
                <p>
                  The four smaller inner planets, Mercury, Venus, Earth and
                  Mars, are terrestrial planets, being primarily composed of
                  rock and metal. The four outer planets are giant planets,
                  being substantially more massive than the terrestrials.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="cite-p">
                <cite>
                  -{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Solar_System"
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

          <a
            href="#page-cover"
            onClick={smoothScrollFromAnchor}
            className="btn-scroll btn-scroll--up"
          >
            <span className="sr-only">Scroll up</span>
          </a>

          <Link to="/sun" className="btn-next">
            <span>
              <strong>Visit:</strong> Sun
            </span>
          </Link>
        </div>
      </Waypoint>
    </>
  );
};
