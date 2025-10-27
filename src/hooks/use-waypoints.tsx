import { useState } from "react";

export const useWaypoints = () => {
  const [sectionInFocus, setSectionInFocus] = useState<
    "page-cover" | "page-info"
  >("page-cover");

  return {
    sectionInFocus,
    setSectionInFocus,
  };
};
