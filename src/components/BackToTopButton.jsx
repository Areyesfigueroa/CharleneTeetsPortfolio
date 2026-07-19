import { useEffect, useState } from "react";

const LAYOUT_MAX_WIDTH = 1300;
const LAYOUT_PADDING = 40;

function getRightOffset() {
  const vw = window.innerWidth;
  if (vw > LAYOUT_MAX_WIDTH) {
    return (vw - LAYOUT_MAX_WIDTH) / 2 + LAYOUT_PADDING;
  }
  return LAYOUT_PADDING;
}

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [rightOffset, setRightOffset] = useState(LAYOUT_PADDING);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setRightOffset(getRightOffset());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 z-40 px-4 py-2 text-xs font-medium tracking-wide transition-opacity duration-300 shadow-md cursor-pointer rounded-full"
      style={{
        right: rightOffset,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      Back to the top
    </button>
  );
}
