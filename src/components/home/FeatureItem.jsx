function FeatureItem({ icon, title }) {
  return (
    <li className="feature-item">
      <span className={`feature-item__icon feature-item__icon--${icon}`} aria-hidden="true" />
      <span>{title}</span>
    </li>
  );
}

export default FeatureItem;
