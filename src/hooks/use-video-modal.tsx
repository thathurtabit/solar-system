import { useState } from "react";

export const useVideoModal = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return {
    isVideoModalOpen,
    openVideoModal,
    closeVideoModal,
  };
};
