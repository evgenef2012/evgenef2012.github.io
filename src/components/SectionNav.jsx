import { useEffect, useRef } from "react";
import "./SectionNav.css";

export default function SectionNav({
  to,
  label,
  align = "center",
  className = "",
}) {
  const navRef = useRef(null);

  useEffect(() => {
    const root = navRef.current;
    if (!root) return;

    const cssNum = (el, name, fallback) =>
      parseFloat(getComputedStyle(el).getPropertyValue(name)) || fallback;

    const rings = root.querySelectorAll(".ring");
    const anims = [];

    const setupId = requestAnimationFrame(() => {
      rings.forEach((el) => {
        const list = el.getAnimations ? el.getAnimations() : [];
        list.forEach((a) => {
          a.play();
          anims.push(a);
        });
      });
    });

    let raf;
    const tweenRate = (target) => {
      cancelAnimationFrame(raf);
      anims.forEach((a) => {
        const from = a.playbackRate || 1;
        const start = performance.now();
        const dur = 180;

        const step = (t) => {
          const k = Math.min(1, (t - start) / dur);
          const eased = k * (2 - k);
          a.playbackRate = from + (target - from) * eased;
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      });
    };

    const boost = () => {
      const target = cssNum(root, "--ring-speed-boost", 1.8);
      tweenRate(target);
    };

    const normal = () => {
      const target = cssNum(root, "--ring-speed-normal", 1);
      tweenRate(target);
    };

    root.addEventListener("mouseenter", boost);
    root.addEventListener("mouseleave", normal);
    root.addEventListener("focusin", boost);
    root.addEventListener("focusout", normal);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(setupId);
      root.removeEventListener("mouseenter", boost);
      root.removeEventListener("mouseleave", normal);
      root.removeEventListener("focusin", boost);
      root.removeEventListener("focusout", normal);
    };
  }, []);

  return (
    <div className={`section-nav ${align} ${className}`.trim()}>
      <a
        ref={navRef}
        href={to}
        className="nav-next"
        aria-label={`Go to ${label}`}
      >
        <span className="nav-label">{label}</span>
        <span className="chevrons" aria-hidden="true">
          <span className="vchev">˅</span>
          <span className="vchev">˅</span>
          <span className="vchev">˅</span>
        </span>
        <span className="ring r1" aria-hidden="true"></span>
        <span className="ring r2" aria-hidden="true"></span>
        <span className="ring r3" aria-hidden="true"></span>
      </a>
    </div>
  );
}
