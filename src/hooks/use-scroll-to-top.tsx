import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Scrolls the window to the top whenever the route pathname changes.
 * Add this component once (near your Router) so navigation always starts at top.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use the native scrollTo so it works even if components manage their own focus/scrolling
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
