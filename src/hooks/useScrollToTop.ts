export const useScrollToTop = () => {
  const handleScrollToTop = () => {
    (function smoothScroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  };

  return { handleScrollToTop };
};
