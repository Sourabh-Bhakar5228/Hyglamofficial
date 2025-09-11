import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll restoration + smooth scroll + fade-in animations
 */
export default function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Animate sections on scroll
    const sections = document.querySelectorAll(".section-fade");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
