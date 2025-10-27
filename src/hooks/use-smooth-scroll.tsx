import type { MouseEvent } from "react";

export const useSmoothScroll = (offset: number = 0) => {
  const smoothScrollFromAnchor = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    // Only handle same-page anchors
    if (!href.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1); // remove '#'
    const el = document.getElementById(id);
    if (!el) {
      // fallback: set hash (will jump)
      window.location.hash = id;
      return;
    }

    // If you need an offset (e.g. fixed header), compute it here:
    const headerOffset = offset; // set to px height of header if needed

    if (headerOffset) {
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // update URL hash without jumping
    history.pushState(null, "", `#${id}`);
  };

  return { smoothScrollFromAnchor };
};
