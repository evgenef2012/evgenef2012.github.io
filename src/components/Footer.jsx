import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">
          Designed and built by Nefedov Evgeni. 
          Best experienced on desktop.
        </p>

        <div className="footer-links" aria-label="Social links">
          {/* GitHub */}
          <a
            className="footer-icon-link"
            href="https://github.com/evgenef2012"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <svg className="footer-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                       0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                       0-.53.32-.01.55.29.63.41.37.62.96.89 1.51.89.86 0 1.39-.65 1.58-1.02.09-.23.24-.44.42-.57
                       -1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
                       .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                       .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.26.22.47.65.47 1.31 0 .95-.01 1.72-.01 1.96
                       0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8 16 3.58 12.42 0 8 0z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            className="footer-icon-link"
            href="https://www.linkedin.com/in/REPLACE_WITH_YOUR_PROFILE"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <span className="footer-icon footer-icon-text">in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
