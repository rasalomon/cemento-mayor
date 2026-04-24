import { Link } from "react-router-dom";

function CTAButton({ children, to, href, variant = "primary", external = false }) {
  const classes = `cta-button cta-button--${variant}`;

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

  return <button className={classes}>{children}</button>;
}

export default CTAButton;
