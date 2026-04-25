import { Link } from "react-router-dom";

function CTAButton({ children, to, href, variant = "primary", external = false, className = "", type = "button" }) {
  const classes = `cta-button cta-button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}

export default CTAButton;
