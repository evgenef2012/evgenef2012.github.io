import React, { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal({ open, onClose, title = "Document", children }) {
  const boxRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;

    const box = boxRef.current;
    const firstFocusable = box?.querySelector(
      'a,button,[tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lastActiveRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
      onMouseDown={onClose}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={boxRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {title && (
          <h3 id="modal-title" className="modal-title">
            {title}
          </h3>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
