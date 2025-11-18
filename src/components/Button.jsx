import React from "react";
import "./Button.css";

export default function Button({
  label,
  to,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",      
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <a
        className={classes}
        href={to}
        onClick={onClick} 
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}
