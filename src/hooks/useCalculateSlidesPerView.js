export const useCalculateSlidesPerView = (resultsLength, minView) => {
    return Math.min(minView, Math.max(2, resultsLength));
  };
